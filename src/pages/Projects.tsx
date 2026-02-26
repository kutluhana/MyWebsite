import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: "Miles & Smiles",
    description: "A comprehensive loyalty program platform for an airline, managing user rewards, points, and membership tiers.",
    date: "Newest",
    icon: "🌟"
  },
  {
    title: "PF",
    description: "A payment facilitator system built specifically for an airline, handling complex financial transactions and ticket processing.",
    date: "Recent",
    icon: "✈️"
  },
  {
    title: "Spendingz",
    description: "A personal spending tracker to help users manage their finances and monitor their expenses.",
    date: "Older",
    icon: "💸"
  },
  {
    title: "HALI",
    description: "A pitch reservation system designed to streamline booking for sports fields and facilities.",
    date: "Oldest",
    icon: "⚽"
  }
];

const Projects: React.FC = () => {
  return <main className="flex-1 w-full flex flex-col items-center overflow-x-hidden">
      <div className="w-full max-w-6xl px-8 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-900">My Projects</h1>
        
        <div className="flex flex-col w-full border-t border-gray-200">
          {projects.map((project, index) => (
            <Project 
              key={index}
              title={project.title}
              description={project.description}
              date={project.date}
              icon={project.icon}
            />
          ))}
        </div>
      </div>
    </main>
};

export default Projects;