const DashboardCard = ({ data, icon }) => {
  return (
    <div className="xs:col-span-3 col-span-full rounded-2xl bg-gray-100 px-12 py-6 md:col-span-2 dark:bg-gray-800">
      {icon}
      <div>
        <h1 className="text-3xl leading-loose font-bold">{data.value}</h1>
        <h1 className="text-xl leading-relaxed">{data.name}</h1>
      </div>
    </div>
  );
};

export default DashboardCard;
