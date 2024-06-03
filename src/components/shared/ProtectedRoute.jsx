import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.config";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const ProtectedRoute = ({ children }) => {
  const [user, userLoading, error] = useAuthState(auth);
  const location = useLocation();

  if (userLoading) {
    return <LoadingSpinner />;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default ProtectedRoute;
