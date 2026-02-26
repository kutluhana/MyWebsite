import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-row items-end">
      <img
        src="https://picsum.photos/48/48"
        alt="Profile"
        className="w-12 h-12 rounded-full object-cover"
      />
      <nav className="">
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#tech-stack" className="hover:underline">Tech stack</a>
      </nav>
    </header>
  );
};

export default Header;
