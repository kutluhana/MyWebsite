import React from 'react';
import Tech from '../components/Tech';

const technologies: string[] = [
  "Java", "Kotlin", "Python", "Spring Boot", "Kafka", "PostgreSQL", "MongoDB", "Keycloak",
  "TypeScript", "React", "Tailwind CSS", "Docker", "Kubernetes", "Maven", "Jenkins", "Git",
  "ELK", "Cursor", "Claude Code", "OpenClaw",
];

const TechStack: React.FC = () => {
  return <main id="tech-stack" className="flex-1 w-full flex flex-col items-center">
      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-blue-600">
          My Tech Stack
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 w-full">
          {technologies.map((name) => (
            <Tech key={name} name={name} />
          ))}
        </div>
      </div>
    </main>;
};

export default TechStack;