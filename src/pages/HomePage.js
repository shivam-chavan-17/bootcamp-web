import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            {/* Navigation Bar */}
            <nav className="bg-black p-4 text-white">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-2xl font-bold">
                        <Link to="/">E-Learning</Link>
                    </div>
                    {/* Navigation Links */}
                    <div className="space-x-6">
                        <Link to="/" className="hover:text-gray-300">Home</Link>
                        <Link to="/about" className="hover:text-gray-300">About</Link>
                        <Link to="/bootcamps" className="hover:text-gray-300">Bootcamps</Link>
                        <Link to="/login" className="hover:text-gray-300">Login</Link>
                        <Link to="/signup" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300">Signup</Link>
                    </div>
                </div>
            </nav>

            {/* Header Section */}
            <header className="relative bg-black h-[70vh] flex flex-col md:flex-row items-center">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full px-8">
                    {/* Left side: Text */}
                    <div className="text-left text-white space-y-6 md:w-1/2">
                        <h1 className="text-4xl md:text-6xl font-bold">Transform Your Future with E-Learning</h1>
                        <p className="text-lg">
                            Explore the best bootcamps and learn at your own pace with industry experts.
                        </p>
                        <button className="bg-white text-black px-6 py-3 rounded hover:bg-gray-300 transition">Learn More</button>
                    </div>

                    {/* Right side: Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <img src="your-image-here.jpg" alt="SVG Design" className="max-w-xs" />
                    </div>
                </div>
            </header>

            {/* About Section */}
            <section className="container mx-auto py-16 flex flex-col md:flex-row items-center">
                {/* About Image */}
                <div className="w-full md:w-1/2">
                    <img src="your-about-image.jpg" alt="About" className="rounded shadow-lg" />
                </div>
                {/* About Content */}
                <div className="w-full md:w-1/2 md:pl-12">
                    <h2 className="text-3xl font-semibold mb-4">About Our E-Learning Platform</h2>
                    <p className="text-gray-600 text-lg">
                        We offer a wide range of bootcamps tailored to help you succeed in the tech industry. Learn from industry experts and gain real-world experience.
                    </p>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12">Benefits of Joining E-Learning</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="p-6 bg-gray-100 rounded shadow-lg flex items-start">
                                <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-4">{i}</div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Benefit {i}</h3>
                                    <p className="text-gray-600">This is a brief description of benefit {i} that explains its importance and value.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bootcamp Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12">Our Bootcamps</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-gray-100 p-6 rounded shadow-lg">
                                <img src={`bootcamp-image-${i}.jpg`} alt={`Bootcamp ${i}`} className="mb-4 rounded" />
                                <h3 className="text-xl font-semibold mb-2">Bootcamp {i}</h3>
                                <p className="text-gray-600">Duration: 8 Weeks</p>
                                <p className="text-gray-600">Videos: 25</p>
                                <p className="text-gray-600">Views: 1,200</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">Explore More</button>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-black text-white py-12 relative">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
                    {/* Left Side: Logo, Info, and Contact */}
                    <div className="md:w-1/3">
                        <div className="text-2xl font-bold mb-4">E-Learning</div>
                        <p className="text-gray-400 mb-6">
                            A premier online learning platform offering industry-aligned courses to help you build a successful career.
                        </p>
                    </div>

                    {/* Right Side: Quick Links and Social Media */}
                    <div className="md:w-1/3">
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
                            <li><Link to="/bootcamps" className="hover:text-gray-300">Bootcamps</Link></li>
                            <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
                            <li><Link to="/signup" className="hover:text-gray-300">Signup</Link></li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-8 mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-300">Facebook</a>
                            <a href="#" className="hover:text-gray-300">Twitter</a>
                            <a href="#" className="hover:text-gray-300">LinkedIn</a>
                        </div>
                    </div>
                </div>

                {/* White Contact Info Container Positioned at Bottom Left */}
                <div className="absolute left-0 bottom-0 bg-white text-black p-4 rounded w-64 ml-4 mb-4">
                    <p>Email: info@elearning.com</p>
                    <p>Address: 1234 Learning St, Education City</p>
                    <p>Phone: +123-456-7890</p>
                </div>

                {/* Footer Bottom */}
                <div className="bg-white text-black py-4 text-center">
                    <p>© 2024 E-Learning. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Homepage;
