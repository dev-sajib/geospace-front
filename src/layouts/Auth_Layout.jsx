import { Outlet } from "react-router-dom";

const Auth_Layout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Outlet />
    </div>
  );
};

export default Auth_Layout;
