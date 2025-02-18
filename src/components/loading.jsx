import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex w-full min-h-80 items-center justify-center">
      <BeatLoader size={30} />
    </div>
  );
};

export default Loading;
