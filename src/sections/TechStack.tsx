import React from 'react';
import Tech from '../components/Tech';

const technologies = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  { name: "REST", icon: "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.svg" },
  { name: "Hibernate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg" },
  { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Keycloak", icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Keycloak_Logo.png" },
  { name: "Flyway", icon: "https://upload.wikimedia.org/wikipedia/en/2/2a/Flyway_logo.png" },
  { name: "JUnit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg" },
  { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Bitbucket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg" },
  { name: "Kibana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kibana/kibana-original.svg" },
  { name: "Graylog", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Graylog_logo.svg" },
  { name: "Elasticsearch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg" },
  { name: "Logstash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/logstash/logstash-original.svg" },
  { name: "Hexagonal Architecture", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Hexagonal_Architecture.svg" },
  { name: "DDD", icon: "https://freebiesupply.com/logos/ddd-logo-2/" },
  { name: "Clean Code", icon: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Clean_Code_Logo.png" },
  { name: "OCP21", icon: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
  { name: "Agile", icon: "https://www.svgrepo.com/show/379764/agile.svg" },
  { name: "Scrum", icon: "https://upload.wikimedia.org/wikipedia/commons/5/58/Scrum_process.svg" },
  { name: "OpenShift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openshift/openshift-original.svg" },
  { name: "Oracle DB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" },
  { name: "OpenFeign", icon: "https://upload.wikimedia.org/wikipedia/commons/3/35/Spring_Logo.svg" },
  { name: "LeetCode", icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Cursor", icon: "https://mintlify.s3-us-west-1.amazonaws.com/cursor/images/logo/cursor-logo-light.svg" }, 
  { name: "Claude Code", icon: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Anthropic_logo.svg" },
  { name: "OpenClaw", icon: "https://avatars.githubusercontent.com/u/161273950?s=200&v=4" }
];

const TechStack: React.FC = () => {
  return <main id="tech-stack" className="flex-1 w-full flex flex-col items-center">
      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center text-blue-600">
          My Tech Stack
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 w-full">
          {technologies.map((tech) => (
            <Tech key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
    </main>;
};

export default TechStack;