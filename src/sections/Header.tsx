import React, { useState, useEffect } from 'react';
import { config } from '../config';

const scrollToSection = (e: React.MouseEvent, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    const headerHeight = document.querySelector('header')?.getBoundingClientRect().height || 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const navLinkClass = "block py-2 sm:py-3 px-2 sm:px-4 min-h-10 sm:min-h-11 flex items-center justify-center rounded-lg font-medium text-xs sm:text-sm md:text-base text-amber-50 hover:text-amber-200 hover:bg-amber-50/5 transition-colors cursor-pointer [&_*]:cursor-pointer";

const Header: React.FC = () => {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the header name after scrolling down 150px
      setShowName(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm p-3 sm:p-4 px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 sm:gap-4 w-full max-w-[100vw] overflow-x-clip transition-all duration-300">
    <a
      href="#home"
      onClick={(e) => scrollToSection(e, 'home')}
      className={`${navLinkClass} shrink-0 py-1! overflow-hidden transition-all duration-500 ease-in-out ${showName ? 'max-h-20 max-w-xs opacity-100 translate-y-0' : 'max-h-0 max-w-0 opacity-0 -translate-y-4 p-0! min-h-0! border-none'}`}
      aria-label="Go to home"
    >
      <span className="text-xl sm:text-2xl font-bold text-amber-50 whitespace-nowrap block">{config.siteName}</span>
    </a>
    <nav className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-amber-50">
      <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className={navLinkClass}>{config.navProjects}</a>
      <a href="#tech-stack" onClick={(e) => scrollToSection(e, 'tech-stack')} className={navLinkClass}>{config.navTechStack}</a>
      <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className={navLinkClass}>{config.navAbout}</a>
    </nav>
  </header>;
};

export default Header;
