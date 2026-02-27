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

  return <div 
      className="relative w-full py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-gray-50/50 transition-colors px-4 overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex-1 relative z-10 pr-[150px]">
        <div className="flex items-center gap-4 mb-3">
          <h2 className="text-2xl font-bold text-blue-600">{title}</h2>
          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full uppercase tracking-wider">
            {date}
          </span>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          {description}
        </p>
      </div>

      <div className="hidden md:flex shrink-0 relative z-10 flex-col items-center gap-4 w-[150px]">
        {/* Animated GIF / Static Image - Positoned Statically */}
        <div className="w-24 h-24 rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-opacity duration-300">
          <img 
            src={isHovered ? gifImage : staticImage} 
            alt={`${title} visual`} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>;
};

export default Project;