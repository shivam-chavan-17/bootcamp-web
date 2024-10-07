import { createContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const { data } = await axios.post('/api/auth/login', { email, password });
    setUser(data);  // Set user data with token
    localStorage.setItem('user', JSON.stringify(data));  // Save token to localStorage
  };

  const signup = async (name, email, password, role) => {
    const { data } = await axios.post('/api/auth/signup', { name, email, password, role });
    setUser(data);
    localStorage.setItem('user', JSON.stringify(data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
