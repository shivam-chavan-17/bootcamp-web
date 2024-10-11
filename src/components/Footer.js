import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="bg-black text-white py-10">
                <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
                    {/* Left Section: Logo, Description, and Contact Info */}
                    <div className="mb-6 md:mb-0 md:w-1/3">
                        <h2 className="text-3xl font-bold mb-2">E-Learning</h2>
                        <p className="mb-4">A premier online learning platform offering industry-aligned courses to help you build a successful career.</p>

                        <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
                        <p>Email: <a href="mailto:info@elearning.com" className="hover:underline">info@elearning.com</a></p>
                        <p>Address: 1234 Learning St, Education City</p>
                        <p>Phone: <a href="tel:+1234567890" className="hover:underline">+123-456-7890</a></p>
                    </div>

                    {/* Right Section: Quick Links and Social Media Links */}
                    <div className="md:w-1/3">
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-gray-400 transition duration-300">Home</Link></li>
                            <li><Link to="/about" className="hover:text-gray-400 transition duration-300">About</Link></li>
                            <li><Link to="/bootcamps" className="hover:text-gray-400 transition duration-300">Bootcamps</Link></li>
                            <li><Link to="/login" className="hover:text-gray-400 transition duration-300">Login</Link></li>
                            <li><Link to="/signup" className="hover:text-gray-400 transition duration-300">Signup</Link></li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-4 mt-6">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-400 transition duration-300">Facebook</a>
                            <a href="#" className="hover:text-gray-400 transition duration-300">Twitter</a>
                            <a href="#" className="hover:text-gray-400 transition duration-300">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer Bottom */}
            <div className="bg-white text-black py-4 text-center mt-2">
                <p>© 2024 E-Learning. All rights reserved.</p>
            </div>
        </>
    );
};

export default Footer;
