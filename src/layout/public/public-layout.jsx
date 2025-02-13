import { Outlet } from "react-router";
import Header from "./header";

const PublicLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default PublicLayout;
