import React from 'react';
import { config } from '../config';

const About: React.FC = () => {
  return <section id="about" className="w-full flex flex-col items-start py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-amber-50">
      {config.aboutTitle}
    </h1>
    <p className="text-amber-100/90 text-base sm:text-lg leading-relaxed max-w-3xl">
      {config.aboutParagraph1}
    </p>
    <p className="mt-4 text-amber-100/90 text-base sm:text-lg leading-relaxed max-w-3xl">
      {config.aboutParagraph2}
    </p>
    <p className="mt-4 text-amber-100/90 text-base sm:text-lg leading-relaxed max-w-3xl">
      {config.aboutParagraph3}
    </p>
  </section>;
};

export default About;
