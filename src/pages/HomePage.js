// HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    const handleSignupRedirect = () => {
        navigate('/signup');
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-900">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-white mb-8">Welcome to the Bootcamp</h1>
                <p className="text-gray-400 mb-6">Join us to start your journey.</p>
                <div className="space-x-4">
                    <button
                        onClick={handleLoginRedirect}
                        className="py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Login
                    </button>
                    <button
                        onClick={handleSignupRedirect}
                        className="py-2 px-6 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
                    >
                        Signup
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
