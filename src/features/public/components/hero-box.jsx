const HeroBox = ({ icon, number, text }) => {
  return (
    <div className="flex gap-x-4 w-58">
      <div className="bg-secondary-50 text-secondary-800 flex size-20 items-center justify-center rounded-2xl *:size-10">
        {icon}
      </div>
      <div className="flex flex-col justify-center text-secondary-950">
        <h3 className="text-2xl">{number}</h3>
        <h2>{text}</h2>
      </div>
    </div>
  );
};
export default HeroBox;
