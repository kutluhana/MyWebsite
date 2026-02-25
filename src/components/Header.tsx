import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between bg-blue-500 text-white p-4">
      <img
        src="https://picsum.photos/48/48"
        alt="Profile"
        className="w-12 h-12 rounded-full object-cover"
      />
      <nav className="flex gap-6">
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#tech-stack" className="hover:underline">Tech stack</a>
      </nav>
    </header>
  );
};

export default Header;
