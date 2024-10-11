import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Homepage = () => {
    return (
        <div>
            <Navbar />
            {/* Header Section */}
            <header className="relative bg-black h-auto min-h-[60vh] flex flex-col items-center py-6">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full px-8">
                    {/* Left side: Text */}
                    <div className="text-left text-white space-y-6 md:w-1/2">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                            Transform Your Future with E-Learning
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg">
                            Explore the best bootcamps and learn at your own pace with industry experts.
                        </p>
                        <button className="bg-white text-black px-6 py-3 rounded hover:bg-gray-300 transition">
                            Learn More
                        </button>
                    </div>

                    {/* Right side: Image (Hidden on small screens) */}
                    <div className="hidden md:block md:w-1/2 flex justify-center">
                        <img src="header.svg" alt="SVG Design" className="max-w-sm lg:max-w-md" />
                    </div>
                </div>
            </header>

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

            {/* About Section */}
            <section className="container mx-auto py-16 flex flex-col md:flex-row items-center">
                {/* About Image */}
                <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"> {/* Flex and justify-center for proper centering */}
                    <img src="s7.jpg" alt="About" className="rounded shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full mx-auto" />
                </div>
                {/* About Content */}
                <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left"> {/* Center text on small screens */}
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                        About Our E-Learning Platform
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg">
                        We offer a wide range of bootcamps tailored to help you succeed in the tech industry. Learn from industry experts and gain real-world experience.
                    </p>
                </div>
            </section>

            {/* Bootcamp Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12">Our Bootcamps</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-gray-100 p-6 rounded shadow-lg">
                                {/* <img src={`s7-${i}.jpg`} alt={`Bootcamp ${i}`} className="mb-4 rounded" /> */}
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
            <Footer />
        </div>
    );
};

export default Homepage;
