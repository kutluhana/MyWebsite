import React from 'react';

const links = [
  { name: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
  { name: "LeetCode", href: "https://leetcode.com/u/yourprofile" },
  { name: "Medium", href: "https://medium.com/@yourprofile" },
];

const Footer: React.FC = () => {
  return <footer className="border-t border-white/10 p-4 sm:p-5 mt-auto w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center">
        <div className="flex gap-3 sm:gap-4">
          {links.map((link) => (
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
        <p className="text-xs text-amber-200">© 2026 Personal Background Webpage</p>
      </div>
    </footer>;
};

export default Footer;