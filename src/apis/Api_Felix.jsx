import { createContext, useState, useEffect, useContext } from "react";


export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      // 1. Hacemos un GET para obtener todos los usuarios
      const response = await fetch("http://localhost:8080/clientes");

      if (!response.ok) throw new Error("Error al obtener usuarios");

      const usuarios = await response.json();
      
      // 2. Buscamos el usuario que coincida con email y contraseña en el frontend
      const foundUser = usuarios.find(
        (u) => u.email === email && u.contrasenia === password
      );

      if (foundUser) {
        setUser(foundUser);
        localStorage.setItem("rol", foundUser.rol);
        localStorage.setItem("user", JSON.stringify(foundUser));
        setError(null);
        return foundUser;
      } else {
        setError("Correo o contraseña incorrectos");
        return null;
      }
    } catch (err) {
      console.error("Error de conexión con el servidor:", err);
      setError("No se pudo conectar con el servidor");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const register = async (datosUsuario) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:8080/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosUsuario),
      });

      if (response.ok) {
        const clienteGuardado = await response.json();
        return clienteGuardado;
      } else {
        const errorData = await response.text();
        setError(errorData || 'Ocurrió un error durante el registro.');
        return null;
      }
    } catch (error) {
      console.error('Error de red:', error);
      setError('No se pudo conectar con el servidor. Inténtalo más tarde.');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <LoginContext.Provider value={{ user, login, logout, register, loading, error }}>
      {children}
    </LoginContext.Provider>
  );

  
}

export function useLogin() {
  return useContext(LoginContext);
}