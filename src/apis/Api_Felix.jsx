import { createContext, useState } from 'react';

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Cambia la URL por la de tu endpoint en mockable.io
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://demo.mockable.io/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) throw new Error('Login failed');
      const data = await response.json();
      setUser(data.user);
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