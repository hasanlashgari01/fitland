import { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import useTitle from "../../hooks/useTitle";

const MyLikesPage = () => {
  useTitle("پنل ادمین - علاقه مندی ها");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/my-account/likes") {
      navigate("/my-account/likes/products");
    }
  }, [location.pathname]);

  return (
    <>
      <ul className="mb-5 flex gap-6">
        <Link to="products">محصولات</Link>
        <Link to="comments">نظرات</Link>
      </ul>
      <Outlet />
    </>
  );
};

export default MyLikesPage;
