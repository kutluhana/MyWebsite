import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-center text-blue-600">Welcome to My Personal Background Page</h1>
            <p className="mt-4 text-lg text-gray-700">
                This is a brief introduction about myself. Here you can find information about my projects, skills, and interests.
            </p>
        </div>
    );
};

export default Home;