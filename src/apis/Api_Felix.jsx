import { createContext, useState } from 'react';

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);


    try {
      const response = await fetch('http://demo1029291.mockable.io/login');
      if (!response.ok) throw new Error('Login failed');
      const data = await response.json();

      

      if (!userData) throw new Error('Credenciales incorrectas');

      

    } catch (err) {
      setError(err.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => setUser(null);

  return (
    <LoginContext.Provider value={{ user, loading, error, login, logout }}> 

      {children}

    </LoginContext.Provider>
  );
}