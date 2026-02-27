interface ProjectButtonProps {
  backgroundImage: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const ProjectButton: React.FC<ProjectButtonProps> = ({ backgroundImage, children, onClick }) => {
  return <button
    type="button"
    onClick={onClick}
    className="relative w-full py-6 sm:py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 transition-colors px-4 sm:px-6 overflow-hidden cursor-pointer text-left border-0 group bg-transparent"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {children}
  </button>;
};

export default ProjectButton;