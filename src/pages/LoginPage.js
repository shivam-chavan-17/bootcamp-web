import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/authContext';
import { FaArrowLeft } from 'react-icons/fa'; // Import arrow icon

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      const userData = JSON.parse(localStorage.getItem('user'));
      if (userData.role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/student-dashboard');
      }
    } catch (error) {
      console.error('Login error:', error.response.data.message);
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/signup');
  };

  const handleHomeRedirect = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Homepage link */}
      <div className="w-full max-w-6xl flex items-center justify-start py-2">
        <button
          onClick={handleHomeRedirect}
          className="flex items-center text-black font-semibold"
        >
          <FaArrowLeft className="mr-2" />
          Homepage
        </button>
      </div>

      {/* Outer container */}
      <div className="bg-white w-full max-w-6xl h-full md:h-[90vh] flex flex-col md:flex-row shadow-lg rounded-lg">
        {/* Left side: Image (hidden on small screens) */}
        <div className="w-full md:w-1/2 relative hidden md:block">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('s7.jpg')" }} // Replace with your image URL
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="absolute top-1/2 left-0 right-0 px-8 text-white transform -translate-y-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Lorem Ipsum Dolor</h1>
            <p className="text-md md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        {/* Right side: Login form */}
        <div className="w-full md:w-1/2 bg-black p-10 flex flex-col justify-center rounded-r-lg">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label className="ml-2 text-gray-400">Show password</label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-white text-black rounded-md hover:bg-gray-200 transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="text-gray-400 mt-4 text-center">
            Don't have an account?
            <button
              onClick={handleRegisterRedirect}
              className="text-blue-500 hover:text-blue-700 ml-1"
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
