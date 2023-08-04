import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";
import Loader from "../components/shared/Loader";
import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";


const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loader />;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
