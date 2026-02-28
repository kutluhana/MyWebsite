import React from 'react';
import Projects from '../sections/Projects';
import TechStack from '../sections/TechStack';
import About from '../sections/About';

const ContentSections: React.FC = () => {
  return <div className="[&_h1]:text-left [&_h2]:text-left">
    <Projects />
    <TechStack />
    <About />
  </div>;
};

export default ContentSections;
