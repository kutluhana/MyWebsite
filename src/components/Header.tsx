import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 p-4 px-8 flex flex-row items-center justify-between">
      <Link to="/" className="shrink-0">
        <img
          src="https://picsum.photos/48/48"
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover hover:ring-2 hover:ring-blue-400 transition-all"
        />
      </Link>
      <nav className="flex gap-6 text-gray-700 font-medium">
        <Link to="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
        <Link to="/tech-stack" className="hover:text-blue-600 transition-colors">Tech stack</Link>
      </nav>
    </header>;
};

export default Header;
