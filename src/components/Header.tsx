import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return <header className="flex flex-row items-end">
      <img
        src="https://picsum.photos/48/48"
        alt="Profile"
        className="w-12 h-12 rounded-full object-cover"
      />
      <nav className="">
        <Link to="/projects" className="hover:underline">Projects</Link>
        <Link to="/tech-stack" className="hover:underline">Tech stack</Link>
      </nav>
    </header>;
};

export default Header;
