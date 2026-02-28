import React, { useState } from 'react';
import Project from '../components/Project';
import { config } from '../config';

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return <section id="projects" className="w-full flex flex-col items-start overflow-x-hidden py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-amber-50">
      {config.projectsTitle}
    </h1>
    <section
      aria-label="Projects list"
      className="flex flex-col w-full gap-0"
      onMouseLeave={() => setExpandedProject(null)}
    >
      {config.projects.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          date={project.date}
          description={project.description}
          bullets={project.bullets}
          isExpanded={expandedProject === project.title}
          onMouseEnter={() => setExpandedProject(project.title)}
          onClick={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
        />
      ))}
    </section>
  </section>;
};

export default Projects;