import React, { useState } from 'react';

interface ProjectProps {
  title: string;
  description: string;
  date: string;
  staticImage: string;
  gifImage: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, date, staticImage, gifImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return <button 
      type="button"
      className="relative w-full py-6 sm:py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 hover:bg-gray-50/50 transition-colors px-4 sm:px-6 overflow-hidden cursor-pointer text-left border-0 bg-transparent"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex-1 min-w-0 pr-0 md:pr-32 lg:pr-36">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-600">{title}</h2>
          <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full uppercase tracking-wider">
            {date}
          </span>
        </div>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      </div>

      <div className="hidden md:flex shrink-0 relative z-10 flex-col items-center gap-4 w-24 sm:w-28 md:w-32">
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg md:rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-opacity duration-300">
          <img 
            src={isHovered ? gifImage : staticImage} 
            alt={`${title} visual`} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </button>;
};

export default Project;