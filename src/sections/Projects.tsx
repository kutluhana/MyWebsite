import React, { useState } from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: "Miles & Smiles",
    description: "A comprehensive loyalty program platform for an airline, managing user rewards, points, and membership tiers.",
    details: "Features points redemption, tier management, and partner integrations. Built with modern web technologies for scalability and real-time updates.",
  },
  {
    title: "PF",
    description: "A payment facilitator system built specifically for an airline, handling complex financial transactions and ticket processing.",
    details: "Handles multi-currency transactions, refund processing, and reconciliation. Integrates with airline ticketing systems for seamless payment flows.",
  },
  {
    title: "Spendingz",
    description: "A personal spending tracker to help users manage their finances and monitor their expenses.",
    details: "Category-based budgeting, expense charts, and export to CSV. Mobile-first design for on-the-go tracking.",
  },
  {
    title: "HALI",
    description: "A pitch reservation system designed to streamline booking for sports fields and facilities.",
    details: "Time-slot booking, facility management dashboard, and automated availability updates. Reduces no-shows with reminder notifications.",
  }
];

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return <main id="projects" className="flex-1 w-full flex flex-col items-start overflow-x-hidden py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-amber-50">
        Projects
      </h1>
      <div
        className="flex flex-col w-full gap-0"
        onMouseLeave={() => setExpandedProject(null)}
      >
        {projects.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            description={project.description}
            details={project.details}
            isExpanded={expandedProject === project.title}
            onMouseEnter={() => setExpandedProject(project.title)}
          />
        ))}
      </div>
    </main>;
};

export default Projects;