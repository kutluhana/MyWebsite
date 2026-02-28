interface ProjectProps {
  title: string;
  description: string;
  details: string;
  isExpanded: boolean;
  onMouseEnter: () => void;
}

const Project: React.FC<ProjectProps> = ({ title, description, details, isExpanded, onMouseEnter }) => {
  return <div
      className="w-full border-b border-white/10 last:border-b-0 py-4 sm:py-5"
      onMouseEnter={onMouseEnter}
    >
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
        <h2 className="text-lg sm:text-xl font-bold text-amber-200">{title}</h2>
      </div>
      <p className="text-amber-100/90 text-base sm:text-lg leading-relaxed">
        {description}
      </p>
      <div
        className="grid transition-[grid-template-rows] duration-500 ease-in-out"
        style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="pt-3 sm:pt-4 pl-0">
            <p className="text-amber-100/80 text-base sm:text-lg leading-relaxed max-w-3xl">
              {details}
            </p>
          </div>
        </div>
      </div>
    </div>;
};

export default Project;