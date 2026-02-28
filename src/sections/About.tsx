import React from 'react';

const About: React.FC = () => {
  return <section id="about" className="flex-1 w-full flex flex-col items-start py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-amber-50">
        About Me
      </h1>
      <p className="text-amber-100/90 text-base sm:text-lg leading-relaxed max-w-3xl">
        I'm a software developer who builds systems that scale. I care about clean architecture, maintainable code, and solving real problems—whether that's streamlining airline loyalty programs, processing payments, or helping people track their spending.
      </p>
      <p className="mt-4 text-amber-100/90 text-base sm:text-lg leading-relaxed max-w-3xl">
        When I'm not coding, I'm usually exploring new tools, reading about system design, or enjoying coffee in Istanbul. I believe the best software comes from understanding both the technical details and the people who use it.
      </p>
    </section>;
};

export default About;
