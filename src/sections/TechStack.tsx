import React from 'react';
import { config } from '../config';

const TechStack: React.FC = () => {
  return <section id="tech-stack" className="w-full flex flex-col items-start py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-amber-50">
      {config.techStackTitle}
    </h1>
    <div className="flex flex-col gap-3 sm:gap-4">
      {Object.keys(config.techStack).map((label) => (
        <p key={label} className="text-amber-100/90 text-base sm:text-lg leading-relaxed">
          {config.techStack[label].map((name: string, i: number) => (
            <span key={name}>
              {i > 0 && <span className="text-amber-200/50 mx-1.5">·</span>}
              {name}
            </span>
          ))}
        </p>
      ))}
    </div>
  </section>;
};

export default TechStack;