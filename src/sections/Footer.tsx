import React from 'react';
import { config } from '../config';

const Footer: React.FC = () => {
  return <footer className="border-t border-white/10 p-4 sm:p-5 mt-auto w-full">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center">
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {config.links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-50 hover:text-amber-200 text-xs transition-colors"
          >
            {link.name} ↗
          </a>
        ))}
      </div>
      <p className="text-xs text-amber-200 whitespace-nowrap">{config.footerCopyright}</p>
    </div>
  </footer>;
};

export default Footer;