import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Not_Found_Page from "../components/layout/Not_Found_Page";

const Role_Based_Route = ({ allowed_roles }) => {
  const { role } = useSelector((state) => state.auth);

  if (!role) {
    return <Navigate to="/login" replace />;
  }
  return allowed_roles.includes(role) ? <Outlet /> : <Not_Found_Page />;
};

export default Role_Based_Route;
