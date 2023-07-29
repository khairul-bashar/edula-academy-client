import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import MyClasses from "../pages/Dashboard/MyClasses";
import EnrolledClasses from "../pages/Dashboard/EnrolledClasses";
import PaymentHistory from "../pages/Dashboard/PaymentHistory";
import AdminLogin from "../pages/Login/Admin/AdminLogin";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signUp", element: <SignUp /> },
  { path: "/admin", element: <AdminLogin /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { path: "/dashboard/", element: <MyClasses /> },
      { path: "/dashboard/my-classes", element: <MyClasses /> },
      { path: "/dashboard/enrolled-classes", element: <EnrolledClasses /> },
      { path: "/dashboard/payment-history", element: <PaymentHistory /> },
    ],
  },
]);

export default router
