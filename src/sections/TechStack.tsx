import React from 'react';
import { config } from '../config';

const TechStack: React.FC = () => {
  return <section id="tech-stack" className="w-full flex flex-col items-start py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-amber-50">
      {config.techStackTitle}
    </h1>
    <div className="flex flex-col gap-4 sm:gap-6 w-full">
      {Object.keys(config.techStack).map((label) => (
        <div
          key={label}
          className="bg-amber-50/5 border border-amber-50/10 rounded-xl p-4 sm:p-5 flex flex-col gap-3 w-full shadow-sm"
        >
          <span className="text-amber-200 font-semibold text-lg sm:text-xl">
            {label}
          </span>
          <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
            {config.techStack[label].map((name: string) => (
              <span
                key={name}
                className="bg-amber-100/10 text-amber-100 text-sm sm:text-base px-3 py-1.5 rounded-lg border border-amber-100/20 whitespace-nowrap shadow-inner transition-colors hover:bg-amber-100/20 hover:border-amber-100/40 cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>;
};

export default TechStack;