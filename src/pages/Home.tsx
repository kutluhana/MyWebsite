import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold text-blue-600 mb-4">My Personal Background</h1>
            <nav className="mb-8">
                <ul className="flex space-x-4">
                    <li><a href="#about" className="hover:underline text-blue-600">About</a></li>
                    <li><a href="#projects" className="hover:underline text-blue-600">Projects</a></li>
                    <li><a href="#contact" className="hover:underline text-blue-600">Contact</a></li>
                </ul>
            </nav>
            <h1 className="text-4xl font-bold text-center text-blue-600">Welcome to My Personal Background Page</h1>
            <p className="mt-4 text-lg text-gray-700">
                This is a brief introduction about myself. Here you can find information about my projects, skills, and interests.
            </p>
        </div>
    );
};

export default Home;