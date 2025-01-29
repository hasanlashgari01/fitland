import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="absolute inset-1/2 rotate-90 translate-1/2">
      <BeatLoader className="flex h-full w-full items-center justify-center bg-amber-300" />
    </div>
  );
};

export default Loading;
