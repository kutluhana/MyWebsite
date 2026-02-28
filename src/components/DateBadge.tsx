interface DateBadgeProps {
  date: string;
}

const DateBadge: React.FC<DateBadgeProps> = ({ date }) => {
  return <span className="px-2 sm:px-3 py-0.5 rounded text-xs font-medium uppercase tracking-wider text-amber-200/90">
    {date}
  </span>;
};

export default DateBadge;