import React from 'react';

const Header: React.FC = () => {
  return <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm p-4 px-4 sm:px-6 md:px-8 flex flex-row items-center justify-between gap-4 w-full max-w-[100vw] overflow-x-clip">
      <a href="#home" className="shrink-0 min-w-[2.75rem] min-h-[2.75rem] rounded-full flex" aria-label="Go to home">
        <text className="text-2xl font-bold text-amber-50">Jonathan Smith</text>
      </a>
      <nav className="flex gap-3 sm:gap-5 md:gap-6 text-amber-50 font-medium text-sm sm:text-base">
        <a href="#projects" className="hover:text-amber-200 transition-colors py-2 px-3 -mx-3 min-h-[2.75rem] flex items-center">Projects</a>
        <a href="#tech-stack" className="hover:text-amber-200 transition-colors py-2 px-3 -mx-3 min-h-[2.75rem] flex items-center">Tech stack</a>
        <a href="#about" className="hover:text-amber-200 transition-colors py-2 px-3 -mx-3 min-h-[2.75rem] flex items-center">About</a>
      </nav>
    </header>;
};

export default Header;
