import { createBrowserRouter } from "react-router";
import Login from "./features/identity/login";
import Register from "./features/identity/register";
import AdminPanelLayout from "./layout/admin/admin-panel-layout";
import IdentityLayout from "./layout/auth/identity-layout";
import PublicLayout from "./layout/public/public-layout";
import AdminBansPage from "./pages/admin/admin-bans-page";
import AdminCategoriesPage from "./pages/admin/admin-categories-page";
import AdminDashboardPage from "./pages/admin/admin-dashboard-page";
import AdminOrdersPage from "./pages/admin/admin-orders-page";
import AdminProductCreatePage from "./pages/admin/admin-product-create-page";
import AdminProductsPage from "./pages/admin/admin-products-page";
import AdminUsersPage from "./pages/admin/admin-users-page";
import HomePage from "./pages/public/home-page";
import NotFoundPage from "./pages/public/not-found-page";
import CategoryPage from "./pages/public/category-page";

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/category/:slug",
        element: <CategoryPage />,
      },
    ],
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminPanelLayout />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboardPage />,
      },
      {
        path: "products",
        element: <AdminProductsPage />,
      },
      {
        path: "product/create",
        element: <AdminProductCreatePage />,
      },
      {
        path: "users",
        element: <AdminUsersPage />,
      },
      {
        path: "orders",
        element: <AdminOrdersPage />,
      },
      {
        path: "categories",
        element: <AdminCategoriesPage />,
      },
      {
        path: "bans",
        element: <AdminBansPage />,
      },
    ],
  },
  {
    path: "/not-found",
    element: <NotFoundPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
