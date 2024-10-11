import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load the user from localStorage on page load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Set the user if found in localStorage
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // const { data } = await axios.post('https://bootcamp-backend-8x0p.onrender.com/api/auth/login', { email, password });
    const { data } = await axios.post('/api/auth/login', { email, password });
    setUser(data);  // Set user data with token
    localStorage.setItem('user', JSON.stringify(data));  //Save token to localStorage

    // const response = await axios.post('https://bootcamp-backend-8x0p.onrender.com/api/auth/login', { email, password });
    // const userData = response.data;
    // localStorage.setItem('user', JSON.stringify(userData)); // Store the user data in localStorage
    // setUser(userData); // Set user in state/context
  };

  const signup = async (name, email, password, role) => {
    // const { data } = await axios.post('https://bootcamp-backend-8x0p.onrender.com/api/auth/signup', { name, email, password, role });
    const { data } = await axios.post('/api/auth/signup', { email, password });
    setUser(data);
    localStorage.setItem('user', JSON.stringify(data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
