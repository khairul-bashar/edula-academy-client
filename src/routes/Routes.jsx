import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import MyClasses from "../pages/Dashboard/student/MyClasses";
import EnrolledClasses from "../pages/Dashboard/student/EnrolledClasses";
import PaymentHistory from "../pages/Dashboard/student/PaymentHistory";
import Course from "../components/Courses/Course";
import Teacher from "../components/Teacher/Teacher";
import ManageCourses from "../pages/Dashboard/admin/ManageCourses";
import ManageInstructor from "../pages/Dashboard/admin/ManageInstructor";
import AddCourse from "../pages/Dashboard/instructor/AddCourse";
import InstructorRoute from "./InstructorRoute";
import InstructorCourse from "../pages/Dashboard/instructor/InstructorCourse";
import AdminRoute from "./AdminRoute";
import ManageStudent from "../pages/Dashboard/admin/ManageStudent";

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
      { path: "my-classes", element: <MyClasses /> },
      { path: "enrolled-classes", element: <EnrolledClasses /> },
      { path: "payment-history", element: <PaymentHistory /> },
      {
        path: "manage-student",
        element: (
          <AdminRoute>
            <ManageStudent />
          </AdminRoute>
        ),
      },
      {
        path: "manageCourse",
        element: <AdminRoute>
          <ManageCourses/>
        </AdminRoute>
      },
      {
        path: "addCourse",
        element: (
          <InstructorRoute>
            <AddCourse />
          </InstructorRoute>
        ),
      },
      {
        path: "InstructorCourse",
        element: (
          <InstructorRoute>
            <InstructorCourse />
          </InstructorRoute>
        ),
      },
    ],
  },
]);

export default router;
