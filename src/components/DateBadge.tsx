interface DateBadgeProps {
  date: string;
}

const DateBadge: React.FC<DateBadgeProps> = ({ date }) => {
  return <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/20 text-white">
    {date}
  </span>;
};

export default DateBadge;