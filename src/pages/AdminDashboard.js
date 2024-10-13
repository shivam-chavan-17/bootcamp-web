import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/authContext';
import { FaUser, FaTachometerAlt, FaBook } from 'react-icons/fa';

const AdminDashboard = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleHomeRedirect = () => {
    navigate('/');
  };

  return (
    <div className="flex w-full h-screen">
      {/* Left Section */}
      <div className="flex flex-col w-1/4 h-full">
        {/* Logo Container */}
        <div className="bg-black text-white p-6 flex items-center justify-center">
          <button onClick={handleHomeRedirect} className="text-2xl font-bold">
            {/* <img src="logo.svg" alt="Logo" className="cursor-pointer" /> */}
            <h2>E-Learning</h2>
          </button>
        </div>

        {/* Buttons Container */}
        <div className="bg-white flex-grow p-4 flex flex-col items-start">
          <Link
            to="/profile"
            className={`flex items-center w-full px-4 py-3 mb-2 text-black hover:bg-gray-200 rounded ${
              window.location.pathname === '/profile' ? 'bg-gray-300 font-bold' : ''
            }`}
          >
            <FaUser className="mr-2" /> Profile
          </Link>
          <Link
            to="/admin-dashboard"
            className={`flex items-center w-full px-4 py-3 mb-2 text-black hover:bg-gray-200 rounded ${
              window.location.pathname === '/admin-dashboard' ? 'bg-gray-300 font-bold' : ''
            }`}
          >
            <FaTachometerAlt className="mr-2" /> Dashboard
          </Link>
          <Link
            to="/profile/enrolled-bootcamps"
            className={`flex items-center w-full px-4 py-3 mb-2 text-black hover:bg-gray-200 rounded ${
              window.location.pathname === '/profile/enrolled-bootcamps' ? 'bg-gray-300 font-bold' : ''
            }`}
          >
            <FaBook className="mr-2" /> Bootcamps
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-3/4 bg-blue-50 p-8 h-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Logout
          </button>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Welcome, Admin!</h2>
          <div className="space-y-4">
            <p className="text-lg">
              <strong className="block text-gray-700">Manage Courses and Users directly from here.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
