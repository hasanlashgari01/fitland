import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex min-h-96 h-full w-full items-center justify-center dark:bg-slate-900">
      <BeatLoader size={30} />
    </div>
  );
};

export default Loading;
