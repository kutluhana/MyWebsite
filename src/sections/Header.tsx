import React from 'react';
import { config } from '../config';

const scrollToSection = (e: React.MouseEvent, id: string) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const navLinkClass = "block py-3 px-4 min-h-11 flex items-center justify-center rounded-lg font-medium text-sm sm:text-base text-amber-50 hover:text-amber-200 hover:bg-amber-50/5 transition-colors cursor-pointer [&_*]:cursor-pointer";

const Header: React.FC = () => {
  return <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm p-4 px-4 sm:px-6 md:px-8 flex flex-row items-center justify-between gap-4 w-full max-w-[100vw] overflow-x-clip">
      <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className={`${navLinkClass} shrink-0`} aria-label="Go to home">
        <span className="text-2xl font-bold text-amber-50">{config.siteName}</span>
      </a>
      <nav className="flex gap-1 sm:gap-2 text-amber-50">
        <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className={navLinkClass}>{config.navProjects}</a>
        <a href="#tech-stack" onClick={(e) => scrollToSection(e, 'tech-stack')} className={navLinkClass}>{config.navTechStack}</a>
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className={navLinkClass}>{config.navAbout}</a>
      </nav>
    </header>;
};

export default Header;
