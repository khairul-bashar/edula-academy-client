import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";
import Course from "../components/Courses/Course";
import Teacher from "../components/Teacher/Teacher";
import ManageCourses from "../pages/Dashboard/admin/ManageCourses";
import ManageUsers from "../pages/Dashboard/admin/ManageUsers";
import AddCourse from "../pages/Dashboard/instructor/AddCourse";
import InstructorCourse from "../pages/Dashboard/instructor/InstructorCourse";
import EnrolledClasses from "../pages/Dashboard/student/EnrolledClasses";
import MyEnrollClasses from "../pages/Dashboard/student/MyEnrollClasses";
import PaymentHistory from "../pages/Dashboard/student/PaymentHistory";
import Payment from "../pages/Dashboard/student/payment/Payment";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/courses", element: <Course /> },
      { path: "/instructor", element: <Teacher /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signUp", element: <SignUp /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { path: "my-classes", element: <MyEnrollClasses /> },
      { path: "my-classes/payment", element: <Payment /> },
      { path: "student/my-enrolled", element: <EnrolledClasses /> },
      { path: "payment-history", element: <PaymentHistory /> },
      {
        path: "manage-student",
        element: <ManageUsers />,
      },
      {
        path: "manageCourse",
        element: <ManageCourses />,
      },
      {
        path: "addCourse",
        element: <AddCourse />,
      },
      {
        path: "InstructorCourse",
        element: <InstructorCourse />,
      },
    ],
  },
]);

export default router;
