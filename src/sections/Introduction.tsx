import React from 'react';

const Introduction: React.FC = () => {
    return <section id="home" className="flex flex-col items-center justify-center flex-1 py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-600 max-w-prose">
                Welcome to My Personal Background Page
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700 text-center max-w-prose">
                This is a brief introduction about myself. Here you can find information about my projects, skills, and interests.
            </p>
        </section>;
};

export default Introduction;