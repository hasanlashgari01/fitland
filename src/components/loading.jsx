import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="fixed inset-1/2 flex size-40 -translate-y-1/2 translate-x-1/2 items-center justify-center">
      <BeatLoader size={30} />
    </div>
  );
};

export default Loading;
