interface ProjectProps {
  title: string;
  date?: string;
  description: string;
  bullets: string[];
  isExpanded: boolean;
  onMouseEnter: () => void;
}

const Project: React.FC<ProjectProps> = ({ title, date, description, bullets, isExpanded, onMouseEnter }) => {
  const handleActivate = () => onMouseEnter();
  return <button
      type="button"
      className="w-full border-b border-white/10 last:border-b-0 py-4 sm:py-5 cursor-default text-left bg-transparent border-x-0 border-t-0"
      onMouseEnter={handleActivate}
      onFocus={handleActivate}
    >
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
        <h2 className="text-lg sm:text-xl font-bold text-amber-200">{title}</h2>
        {date && <span className="text-amber-200/70 text-sm">{date}</span>}
      </div>
      <p className="text-amber-100/90 text-base sm:text-lg leading-relaxed">
        {description}
      </p>
      <div
        className="grid transition-[grid-template-rows] duration-500 ease-in-out"
        style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="pt-3 sm:pt-4 pl-5 list-disc text-amber-100/80 text-base sm:text-lg leading-relaxed max-w-3xl space-y-1">
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </button>;
};

export default Project;