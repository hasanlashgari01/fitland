const TopSection = ({ text, icon, children }) => {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        {icon && icon}
        <h1 className="text-xl font-bold md:text-2xl">{text}</h1>
      </div>
      {children}
    </div>
  );
};

export default TopSection;
