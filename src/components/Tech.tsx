import React from 'react';

interface TechProps {
  name: string;
}

const Tech: React.FC<TechProps> = ({ name }) => {
  return <div className="flex items-center justify-center py-2 px-4 aspect-[3/1] bg-gray-800/60 border border-white/20 rounded-lg hover:bg-gray-700/60 hover:-translate-y-0.5 transition-all cursor-default text-center font-medium text-gray-200 text-sm sm:text-base">
      {name}
    </div>;
};

export default Tech;