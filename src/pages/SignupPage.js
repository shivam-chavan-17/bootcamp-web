import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/authContext';
import { FaArrowLeft } from 'react-icons/fa'; // Import arrow icon

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // Default role
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(name, email, password, role);
      navigate('/student-dashboard'); // Redirect to student dashboard after signup
    } catch (error) {
      console.error('Signup error:', error.response.data.message);
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login');
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

        {/* Right side: Signup form */}
        <div className="w-full md:w-1/2 bg-black p-10 flex flex-col justify-center rounded-r-lg">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Signup</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
            <div>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-white text-black rounded-md hover:bg-gray-200 transition duration-300"
            >
              Signup
            </button>
          </form>
          <p className="text-gray-400 mt-4 text-center">
            Already have an account?{' '}
            <button
              onClick={handleLoginRedirect}
              className="text-blue-500 hover:text-blue-700 ml-1"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
