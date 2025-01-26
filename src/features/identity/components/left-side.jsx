import { Link } from "react-router";

const LeftSide = ({ image }) => {
  return (
    <div className="bg-secondary-850 relative max-lg:hidden lg:flex-1">
      <div className="image-fade-in -z-10 h-dvh overflow-hidden opacity-0">
        <img
          src={`/src/assets/images/identity-${image}.png`}
          alt=""
          className="w-full object-cover xl:h-full"
        />
      </div>
      <Link
        to="/"
        className="absolute inset-1/2 z-10 h-fit w-64 -translate-y-1/2 translate-x-1/2"
      >
        <img
          src="/src/assets/images/logo.svg"
          alt=""
          className="logo-fade-in opacity-0"
        />
      </Link>
    </div>
  );
};
export default LeftSide;
