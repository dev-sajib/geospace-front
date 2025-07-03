import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Dashboard_Header from "../components/layout/Dashboard_Header";
import Dashboard_Footer from "../components/layout/Dashboard_Footer";

const Dashboard_Layout = () => {
  const { role } = useSelector((state) => state.auth);

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F9]">
      <div className="flex flex-1">
        <Sidebar user_role={role} />
        <div className="flex-1 flex flex-col">
          <Dashboard_Header />
          <main className="p-6 md:p-8 flex-1">
            <Outlet />
          </main>
        </div>
      </div>
      <Dashboard_Footer />
    </div>
  );
};

export default Dashboard_Layout;
