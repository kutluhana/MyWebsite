import React from 'react';

interface TechProps {
  name: string;
  icon: string;
}

const Tech: React.FC<TechProps> = ({ name, icon }) => {
  return <div className="relative flex items-center justify-center p-4 sm:p-5 md:p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:bg-blue-50 hover:-translate-y-1 transition-all cursor-pointer text-center font-medium overflow-hidden min-h-[5rem] sm:min-h-[6rem] md:min-h-[7rem]">
      {icon && (
        <img 
          src={icon} 
          alt={`${name} logo`} 
          className="absolute inset-0 w-full h-full object-contain p-3 sm:p-4 opacity-15 pointer-events-none"
        />
      )}
      <span className="relative z-10 text-gray-800 text-sm sm:text-base md:text-lg break-words">{name}</span>
    </div>;
};

export default Tech;