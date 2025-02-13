import { useMe } from "../../../hooks/useUser";

const SidebarProfile = () => {
  const { data, isLoading } = useMe();

  return (
    <div className="flex items-center gap-4">
      <div className="size-10 overflow-hidden rounded-full">
        <img src={data?.avatar || "/public/avatar.png"} alt="" className="size-full" />
      </div>
      <span className="dark:text-white">{!isLoading && data.fullName}</span>
    </div>
  );
};

export default SidebarProfile;
