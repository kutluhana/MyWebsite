import React from 'react';

const Introduction: React.FC = () => {
    return <section id="home" className="flex flex-col items-start justify-center flex-1 py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-blue-600 max-w-prose">
                Jonathan Smith
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700 text-start max-w-prose">
                Developer based in Istanbul, Turkey. I specialize in backend development with a focus on Java and Spring Boot.
            </p>
        </section>;
};

export default Introduction;