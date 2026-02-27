import React, { useState, useRef, useEffect } from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: "Miles & Smiles",
    description: "A comprehensive loyalty program platform for an airline, managing user rewards, points, and membership tiers.",
    details: "Features points redemption, tier management, and partner integrations. Built with modern web technologies for scalability and real-time updates.",
    date: "Newest",
    backgroundImage: "/miles.avif"
  },
  {
    title: "PF",
    description: "A payment facilitator system built specifically for an airline, handling complex financial transactions and ticket processing.",
    details: "Handles multi-currency transactions, refund processing, and reconciliation. Integrates with airline ticketing systems for seamless payment flows.",
    date: "Recent",
    backgroundImage: "/plane.jpg",
  },
  {
    title: "Spendingz",
    description: "A personal spending tracker to help users manage their finances and monitor their expenses.",
    details: "Category-based budgeting, expense charts, and export to CSV. Mobile-first design for on-the-go tracking.",
    date: "Older",
    backgroundImage: "/spendingz.avif"
  },
  {
    title: "HALI",
    description: "A pitch reservation system designed to streamline booking for sports fields and facilities.",
    details: "Time-slot booking, facility management dashboard, and automated availability updates. Reduces no-shows with reminder notifications.",
    date: "Oldest",
    backgroundImage: "/hali.avif"
  }
];

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (expandedProject && containerRef.current && !containerRef.current.contains(target)) {
        setExpandedProject(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [expandedProject]);

  return <main id="projects" ref={containerRef} className="flex-1 w-full flex flex-col items-center overflow-x-hidden">
      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center text-gray-900">
          My Projects
        </h1>
        
        <div className="flex flex-col w-full gap-0">
          {projects.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              description={project.description}
              details={project.details}
              date={project.date}
              backgroundImage={project.backgroundImage}
              isExpanded={expandedProject === project.title}
              onToggle={() => setExpandedProject((prev) => prev === project.title ? null : project.title)}
            />
          ))}
        </div>
      </div>
    </main>
};

export default Projects;