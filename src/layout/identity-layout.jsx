import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import LeftSide from "../features/identity/components/left-side";
import ShapeBottom from "../features/identity/components/shape-bottom";
import ShapeTop from "../features/identity/components/shape-top";

const IdentityLayout = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    setImage(Math.floor(Math.random() * 3) + 1);
  }, []);

  return (
    <div className="flex">
      <div className="relative flex h-dvh flex-1 items-center overflow-hidden xl:flex-2">
        <ShapeTop />
        <Outlet />
        <ShapeBottom />
      </div>
      <LeftSide image={image} />
    </div>
  );
};
export default IdentityLayout;
