import { createContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const { data } = await axios.post('https://bootcamp-backend-8x0p.onrender.com/api/auth/login', { email, password });
    setUser(data);  // Set user data with token
    localStorage.setItem('user', JSON.stringify(data));  // Save token to localStorage
  };

  const signup = async (name, email, password, role) => {
    const { data } = await axios.post('https://bootcamp-backend-8x0p.onrender.com/api/auth/signup', { name, email, password, role });
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



// import { createContext, useState } from 'react';
// import axios from 'axios';

// const API_URL = 'https://bootcamp-backend-8x0p.onrender.com'; // Make sure this is your correct backend URL

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null); // Retrieve user from localStorage if available

//   const login = async (email, password) => {
//     try {
//       const { data } = await axios.post(`${API_URL}/api/auth/login`, { email, password });
//       setUser(data.user);  // Assuming 'data.user' contains user information
//       localStorage.setItem('user', JSON.stringify(data.user));  // Save user data to localStorage
//     } catch (error) {
//       console.error('Login error:', error.response ? error.response.data.message : error.message);
//       throw error;  // Re-throw the error to handle it in the component
//     }
//   };

//   const signup = async (name, email, password, role) => {
//     try {
//       const { data } = await axios.post(`${API_URL}/api/auth/signup`, { name, email, password, role });
//       setUser(data.user);
//       localStorage.setItem('user', JSON.stringify(data.user));
//     } catch (error) {
//       console.error('Signup error:', error.response ? error.response.data.message : error.message);
//       throw error;  // Re-throw the error to handle it in the component
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, signup, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
