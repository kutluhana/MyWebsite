import DateBadge from './DateBadge';
import ProjectButton from './ProjectButton';

interface ProjectProps {
  title: string;
  description: string;
  details: string;
  date: string;
  backgroundImage: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const Project: React.FC<ProjectProps> = ({ title, description, details, date, backgroundImage, isExpanded, onToggle }) => {
  return <div className="w-full border-b border-white/10 last:border-b-0">
      <ProjectButton backgroundImage={backgroundImage} onClick={onToggle}>
        <div className="relative z-10 flex-1 min-w-0 pr-0 md:pr-32 lg:pr-36">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">{title}</h2>
            <DateBadge date={date} />
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-gray-200">
            {description}
          </p>
        </div>
      </ProjectButton>
      {isExpanded && (
        <div className="px-4 sm:px-6 py-4 sm:py-6 bg-black/60 backdrop-blur-sm border-t border-white/10 text-gray-200">
          <p className="text-base sm:text-lg leading-relaxed max-w-3xl">
            {details}
          </p>
        </div>
      )}
    </div>;
};

export default Project;