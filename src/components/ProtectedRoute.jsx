import { useSelector } from "react-redux";
import {
  selectIsAuthenticated,
  selectUser,
  selectLoading,
} from "../store/slices/authSlice";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const loginLoading = useSelector(selectLoading);

  if (loginLoading) return <div>Ładowanie aplikacji...</div>;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Zalogowany, ale brak odpowiedniej roli -> przekieruj na stronę główną
  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/" replace />;
  }

  // Wszystko OK -> renderuj komponent potomny (Outlet)
  return <Outlet />;
};

export default ProtectedRoute;
