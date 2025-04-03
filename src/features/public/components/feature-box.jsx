const FeatureBox = ({ icon, text }) => {
  return (
    <div className="flex max-xs:aspect-square size-24 md:size-32 lg:size-40 max-xs:flex-1 flex-col items-center justify-center gap-3 rounded-2xl border border-sky-400 bg-white">
      <div>{icon}</div>
      <h3 className="text-tiny xs:text-sm sm:text-base">{text}</h3>
    </div>
  );
};

export default FeatureBox;
