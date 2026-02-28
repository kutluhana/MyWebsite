import React from 'react';
import { config } from '../config';

const scrollToSection = (e: React.MouseEvent, id: string) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Header: React.FC = () => {
  return <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm p-4 px-4 sm:px-6 md:px-8 flex flex-row items-center justify-between gap-4 w-full max-w-[100vw] overflow-x-clip">
      <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="shrink-0 min-w-[2.75rem] min-h-[2.75rem] rounded-full flex" aria-label="Go to home">
        <span className="text-2xl font-bold text-amber-50">{config.siteName}</span>
      </a>
      <nav className="flex gap-3 sm:gap-5 md:gap-6 text-amber-50 font-medium text-sm sm:text-base">
        <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-amber-200 transition-colors py-2 px-3 -mx-3 min-h-[2.75rem] flex items-center">{config.navProjects}</a>
        <a href="#tech-stack" onClick={(e) => scrollToSection(e, 'tech-stack')} className="hover:text-amber-200 transition-colors py-2 px-3 -mx-3 min-h-[2.75rem] flex items-center">{config.navTechStack}</a>
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-amber-200 transition-colors py-2 px-3 -mx-3 min-h-[2.75rem] flex items-center">{config.navAbout}</a>
      </nav>
    </header>;
};

export default Header;
