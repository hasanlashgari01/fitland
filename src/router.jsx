import { createBrowserRouter } from "react-router";
import Login from "./features/identity/login";
import Register from "./features/identity/register";
import AdminPanelLayout from "./layout/admin/admin-panel-layout";
import IdentityLayout from "./layout/auth/identity-layout";
import MyAccountLayout from "./layout/my-account/my-account-layout";
import PublicLayout from "./layout/public/public-layout";
import AdminBansPage from "./pages/admin/admin-bans-page";
import AdminCategoriesPage from "./pages/admin/admin-categories-page";
import AdminCommentsPage from "./pages/admin/admin-comments-page";
import AdminDashboardPage from "./pages/admin/admin-dashboard-page";
import AdminOrdersPage from "./pages/admin/admin-orders-page";
import AdminProductCreatePage from "./pages/admin/admin-product-create-page";
import AdminProductsPage from "./pages/admin/admin-products-page";
import AdminUsersPage from "./pages/admin/admin-users-page";
import MyAddressPage from "./pages/my-account/my-address-page";
import MyCommentLikesPage from "./pages/my-account/my-comment-likes";
import MyCommentPage from "./pages/my-account/my-comment-page";
import MyDashboardPage from "./pages/my-account/my-dashboard-page";
import MyLikesPage from "./pages/my-account/my-likes-page";
import MyOrdersPage from "./pages/my-account/my-orders-page";
import MyProductLikesPage from "./pages/my-account/my-product-likes-page";
import BrandPage from "./pages/public/brand-page";
import CartPage from "./pages/public/cart-page";
import CategoryPage from "./pages/public/category-page";
import HomePage from "./pages/public/home-page";
import NotFoundPage from "./pages/public/not-found-page";
import ProductPage from "./pages/public/product-page";
import MyOrderPage from "./pages/my-account/my-order-page";
import AdminBrandsPage from "./pages/admin/admin-brands-page";

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
      {
        path: "/product/:slug",
        element: <ProductPage />,
      },
      {
        path: "/brand/:slug",
        element: <BrandPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
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
    path: "/my-account",
    element: <MyAccountLayout />,
    children: [
      {
        path: "dashboard",
        element: <MyDashboardPage />,
      },
      {
        path: "likes",
        element: <MyLikesPage />,
        children: [
          {
            path: "products",
            element: <MyProductLikesPage />,
          },
          {
            path: "comments",
            element: <MyCommentLikesPage />,
          },
        ],
      },
      {
        path: "comments",
        element: <MyCommentPage />,
      },
      {
        path: "orders",
        element: <MyOrdersPage />,
      },
      {
        path: "orders/:trackingCode",
        element: <MyOrderPage />,
      },
      {
        path: "address",
        element: <MyAddressPage />,
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
      {
        path: "comments",
        element: <AdminCommentsPage />,
      },
      {
        path: "brands",
        element: <AdminBrandsPage />,
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
