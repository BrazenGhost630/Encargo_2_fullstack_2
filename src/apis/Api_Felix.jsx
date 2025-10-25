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
      const response = await fetch("http://demo1029291.mockable.io/user");

      if (!response.ok) throw new Error("Error al obtener usuarios");

      const data = await response.json();
      

      const foundUser = data.users.find(
        (u) => u.email === email && u.password === password
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

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <LoginContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </LoginContext.Provider>
  );

  
}

export function useLogin() {
  return useContext(LoginContext);
}