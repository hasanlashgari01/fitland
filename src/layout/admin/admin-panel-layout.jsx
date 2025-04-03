import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router";
import Loading from "../../components/loading";
import AdminPageProvider from "../../context/admin-page-context";
import ThemeProvider from "../../context/admin-theme-context";
import Sidebar from "../../features/admin/components/sidebar";
import { useMe } from "../../hooks/useUser";

const AdminPanelLayout = () => {
  const { data, isLoading } = useMe();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && location.pathname === "/admin") {
      navigate("/admin/dashboard");
    }
  }, [isLoading, location.pathname]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ThemeProvider>
      {!isLoading && data.role === "ADMIN" ? (
        <AdminPageProvider>
          <div className="flex min-h-dvh bg-white dark:bg-slate-900 dark:text-white">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <main className="relative flex-1 p-6">
              <Outlet />
            </main>
          </div>
        </AdminPageProvider>
      ) : (
        <Navigate to="/login" />
      )}
    </ThemeProvider>
  );
};

export default AdminPanelLayout;
