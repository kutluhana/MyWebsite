import React from 'react';
import { config } from '../config';

const Introduction: React.FC = () => {
  return <section id="home" className="flex flex-col items-start justify-center flex-1 py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 w-full">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-start text-amber-50 max-w-prose">
      {config.siteName}
    </h1>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-start text-amber-200 max-w-prose">
      {config.siteTitle}
    </h2>
    <p className="mt-4 text-base sm:text-lg text-amber-100 text-start max-w-prose">
      {config.introText}
    </p>
  </section>;
};

export default Introduction;