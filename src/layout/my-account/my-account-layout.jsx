import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router";
import Loading from "../../components/loading";
import Header from "../../features/my-account/components/header";
import Sidebar from "../../features/my-account/components/sidebar";
import { useMe } from "../../hooks/useUser";

const MyAccountLayout = () => {
  const { data, isLoading } = useMe();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && location.pathname === "/my-account") {
      navigate("/my-account/dashboard");
    }
  }, [isLoading, location.pathname]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {!isLoading && ["ADMIN", "USER"].includes(data.role) ? (
        <div className="flex min-h-dvh bg-gray-100 dark:bg-slate-900 dark:text-white">
          <Sidebar />
          <section className="flex-1">
            <Header />
            <main className="px-6 lg:px-8">
              <Outlet />
            </main>
          </section>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default MyAccountLayout;
