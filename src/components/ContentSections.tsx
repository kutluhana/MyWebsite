import React from 'react';
import Projects from '../sections/Projects';
import TechStack from '../sections/TechStack';
import Links from '../sections/Links';

const ContentSections: React.FC = () => {
  return <div className="[&_h1]:text-left [&_h2]:text-left">
      <Projects />
      <TechStack />
      <Links />
    </div>;
};

export default ContentSections;
