import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: "Miles & Smiles",
    description: "A comprehensive loyalty program platform for an airline, managing user rewards, points, and membership tiers.",
    date: "Newest",
    staticImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80",
    gifImage: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjM5NjJmNDhjOWI2YzBjYzE5YTY3Zjg4ZjQwNzA0NDZjZjc4MTEwZiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/3o7aD2saalEvTehEXe/giphy.gif"
  },
  {
    title: "PF",
    description: "A payment facilitator system built specifically for an airline, handling complex financial transactions and ticket processing.",
    date: "Recent",
    staticImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
    gifImage: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzRmMTE5ZDQwNjFmMzEwNzI3OGY5MmY4Y2I2ZjJhYTY2N2I2YTRiNCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/Lq0h93752f6J9tijrh/giphy.gif"
  },
  {
    title: "Spendingz",
    description: "A personal spending tracker to help users manage their finances and monitor their expenses.",
    date: "Older",
    staticImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80",
    gifImage: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTYwZDRiNWExYzI3MjZkMzFhOTc3OGQ0OWM5NWI4YTNmMzM5NGRhNCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/3o6gDWzmAzrpi5DQU8/giphy.gif"
  },
  {
    title: "HALI",
    description: "A pitch reservation system designed to streamline booking for sports fields and facilities.",
    date: "Oldest",
    staticImage: "https://images.unsplash.com/photo-1518605368461-1e1e38ce7058?w=400&q=80",
    gifImage: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTBoYThjZjQ5ODRkMWMxMThjZGEyZmJkMTIzMjk4OGUzZDExNjk1YyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/l0HlBwsIWjIgEQPOg/giphy.gif"
  }
];

const Projects: React.FC = () => {
  return <main id="projects" className="flex-1 w-full flex flex-col items-center overflow-x-hidden">
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
              date={project.date}
              staticImage={project.staticImage}
              gifImage={project.gifImage}
            />
          ))}
        </div>
      </div>
    </main>
};

export default Projects;