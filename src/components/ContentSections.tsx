import React from 'react';
import Projects from '../sections/Projects';
import TechStack from '../sections/TechStack';

const ContentSections: React.FC = () => {
  return <div className="[&_h1]:text-left [&_h2]:text-left">
      <Projects />
      <TechStack />
    </div>;
};

export default ContentSections;
