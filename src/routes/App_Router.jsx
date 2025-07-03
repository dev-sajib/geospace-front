import { Route, Routes } from "react-router-dom";
import { ROUTE_PATHS } from "../constants/route_paths";

import Auth_Layout from "../layouts/Auth_Layout";
import Main_Layout from "../layouts/Main_Layout";

import Dashboard_Not_Found_Page from "../components/layout/Dashboard_Not_Found_Page";
import Dashboard_Layout from "../layouts/Dashboard_Layout";
import Admin_Dashboard_Page from "../pages/admin/Admin_Dashboard_Page";
import Login_Page from "../pages/auth/Login_Page";
import Home_Page from "../pages/website/Home/Home_Page";
import Protected_Route from "./Protected_Route";
import Role_Based_Route from "./Role_Based_Route";
import Not_Found_Page from "../components/layout/Not_Found_Page";
import Top5_Page from "../pages/website/Top5Page/Top5_Page.jsx";
import HireTeam from "../pages/website/HireTeam/HireTea_Page.jsx";
import ConsultingServices_Page from "../pages/website/ConsultingServicesPage/ConsultingServices_Page.jsx";
import Clients_Page from "../pages/website/ClientsPage/Clients_Page.jsx";
import Blog_Page from "../pages/website/BlogPage/Blog_Page.jsx";
import About_Page from "../pages/website/AboutPage/About_Page.jsx";
import HireTalentPage from "../pages/website/HireTalentPage/HireTalent_Page.jsx";

const Placeholder_Page = ({ title }) => (
  <div className="text-center p-20">
    <h1 className="text-4xl font-bold">{title}</h1>
    <p>This page is under construction.</p>
  </div>
);

const App_Router = () => {
  return (
    <Routes>
      <Route element={<Main_Layout />}>
        <Route path={ROUTE_PATHS.HOME} element={<Home_Page />} />

        <Route
          path={ROUTE_PATHS.TOP_5}
          element={<Top5_Page  />}
        />
        <Route
          path={ROUTE_PATHS.HIRE_TEAM}
          element={<HireTeam  />}
        />
        <Route
          path={ROUTE_PATHS.CONSULTING_SERVICES}
          element={<ConsultingServices_Page title="Consulting & Service Page" />}
        />
        <Route
          path={ROUTE_PATHS.CLIENTS}
          element={<Clients_Page title="Clients Page" />}
        />
        <Route
          path={ROUTE_PATHS.BLOG}
          element={<Blog_Page title="Blog Page" />}
        />
        <Route
          path={ROUTE_PATHS.ABOUT_US}
          element={<About_Page title="About Us Page" />}
        />

        <Route
          path="/hire/:talent"
          element={<HireTalentPage title="Hire Talent Page" />}
        />

        <Route
          path={ROUTE_PATHS.APPLY_AS_FREELANCER}
          element={<Placeholder_Page title="Apply as Freelancer Page" />}
        />
        <Route
          path={ROUTE_PATHS.HIRE_TOP_TALENT}
          element={<Placeholder_Page title="Hire Top Talent Page" />}
        />
      </Route>

      <Route element={<Auth_Layout />}>
        <Route path={ROUTE_PATHS.LOGIN} element={<Login_Page />} />
        {/* <Route path={ROUTE_PATHS.SIGNUP} element={<Signup_Page />} /> */}
      </Route>

      <Route element={<Protected_Route />}>
        <Route element={<Dashboard_Layout />}>
          {/* <Route element={<Role_Based_Route allowed_roles={["freelancer"]} />}>
            <Route
              path={ROUTE_PATHS.FREELANCER_DASHBOARD}
              element={<Freelancer_Dashboard_Page />}
            />
          </Route>

          <Route element={<Role_Based_Route allowed_roles={["company"]} />}>
            <Route
              path={ROUTE_PATHS.COMPANY_DASHBOARD}
              element={<Company_Dashboard_Page />}
            />
          </Route> */}
          <Route element={<Role_Based_Route allowed_roles={["Admin"]} />}>
            <Route
              path={ROUTE_PATHS.ADMIN_DASHBOARD}
              element={<Admin_Dashboard_Page />}
            />
            <Route path="*" element={<Dashboard_Not_Found_Page />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<Not_Found_Page />} />
    </Routes>
  );
};

export default App_Router;
