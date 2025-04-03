import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Footer from "./footer";
import Header from "./header";

const PublicLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;
