import React from 'react';

const techRows: Record<string, string[]> = {
  backend: ["Java", "Kotlin", "Python", "Spring Boot", "Kafka", "PostgreSQL", "MongoDB", "Keycloak"],
  frontend: ["TypeScript", "React", "Tailwind CSS"],
  "devops + observability": ["Docker", "Kubernetes", "Maven", "Jenkins", "Git", "ELK"],
  ai: ["Cursor", "Claude Code", "OpenClaw"],
};

const TechStack: React.FC = () => {
  return <main id="tech-stack" className="flex-1 w-full flex flex-col items-start py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-amber-50">
        Tech Stack
      </h1>
      <div className="flex flex-col gap-3 sm:gap-4">
        {Object.keys(techRows).map((label) => (
          <p key={label} className="text-amber-100/90 text-base sm:text-lg leading-relaxed">
            {techRows[label].map((name: string, i: number) => (
              <span key={name}>
                {i > 0 && <span className="text-amber-200/50 mx-1.5">·</span>}
                {name}
              </span>
            ))}
          </p>
        ))}
      </div>
    </main>;
};

export default TechStack;