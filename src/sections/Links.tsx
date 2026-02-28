import React from 'react';

const links = [
  { name: "LinkedIn", href: "https://linkedin.com/in/yourprofile", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" },
  { name: "LeetCode", href: "https://leetcode.com/u/yourprofile", icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" },
  { name: "Medium", href: "https://medium.com/@yourprofile", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/medium/medium-original.svg" },
];

const Links: React.FC = () => {
  return <section id="links" className="flex flex-col items-center py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-blue-600">
        Links
      </h2>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-800/60 hover:bg-gray-700/60 transition-colors text-gray-200 hover:text-white"
          >
            <img src={link.icon} alt="" className="w-6 h-6 object-contain opacity-90" />
            <span className="font-medium">{link.name}</span>
          </a>
        ))}
      </div>
    </section>;
};

export default Links;
