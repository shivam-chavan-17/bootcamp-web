import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the hamburger menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Navigation Bar */}
            <nav className="bg-black p-6 text-white">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-2xl font-bold">
                        <Link to="/">E-Learning</Link>
                    </div>
                    {/* Hamburger Menu for small screens */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                    {/* Navigation Links (Hidden on small screens) */}
                    <div className="hidden lg:flex space-x-6 items-center">
                        <Link to="/" className="hover:text-gray-300">Home</Link>
                        <Link to="/about" className="hover:text-gray-300">About</Link>
                        <Link to="/bootcamps" className="hover:text-gray-300">Bootcamps</Link>
                        <Link 
                            to="/login" 
                            className="bg-black text-white border-2 border-white px-4 py-1 rounded hover:bg-white hover:text-black"
                        >
                            Login
                        </Link>
                        <Link 
                            to="/signup" 
                            className="bg-black text-white border-2 border-white px-4 py-1 rounded hover:bg-white hover:text-black"
                        >
                            Signup
                        </Link>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden">
                        <div className="flex flex-col space-y-4 mt-4 items-start px-4"> {/* Align links to the left */}
                            <Link to="/" className="hover:text-gray-300" onClick={toggleMenu}>Home</Link>
                            <Link to="/about" className="hover:text-gray-300" onClick={toggleMenu}>About</Link>
                            <Link to="/bootcamps" className="hover:text-gray-300" onClick={toggleMenu}>Bootcamps</Link>
                            <Link 
                                to="/login" 
                                className="bg-black text-white border-2 border-white px-4 py-1 rounded hover:bg-white hover:text-black w-auto"
                                onClick={toggleMenu}
                            >
                                Login
                            </Link>
                            <Link 
                                to="/signup" 
                                className="bg-black text-white border-2 border-white px-4 py-1 rounded hover:bg-white hover:text-black w-auto"
                                onClick={toggleMenu}
                            >
                                Signup
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
