import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTE_PATHS } from "../constants/route_paths";

const Protected_Route = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTE_PATHS.LOGIN} replace />
  );
};

export default Protected_Route;
