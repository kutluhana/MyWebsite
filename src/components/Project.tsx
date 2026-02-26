import React, { useState } from 'react';

interface ProjectProps {
  title: string;
  description: string;
  date: string;
  icon: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, date, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-200 hover:bg-gray-50/50 transition-colors px-4 overflow-hidden"
    >
      {/* Animated Icon */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 text-7xl pointer-events-none transition-all duration-1000 ease-out z-0"
        style={{
          right: isHovered ? '10vw' : '-100px',
          opacity: isHovered ? 0.2 : 0,
          transform: `translateY(-50%) ${isHovered ? 'scale(1)' : 'scale(0.5)'}`
        }}
      >
        {icon}
      </div>

      <div className="flex-1 relative z-10">
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
      <div className="hidden md:flex shrink-0 relative z-10">
        <button 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="px-6 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Project;