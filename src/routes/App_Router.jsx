import { Routes, Route } from "react-router-dom";
import { ROUTE_PATHS } from "../constants/route_paths";

import Main_Layout from "../layouts/Main_Layout";
// import Auth_Layout from "../layouts/Auth_Layout";
// import Dashboard_Layout from "../layouts/Dashboard_Layout";

// import Protected_Route from "./Protected_Route";
// import Role_Based_Route from "./Role_Based_Route";

import Home_Page from "../pages/website/Home_Page";
// import Login_Page from "../pages/auth/Login_Page";
// import Signup_Page from "../pages/auth/Signup_Page";

// import Freelancer_Dashboard_Page from "../pages/freelancer/Dashboard_Page";
// import Company_Dashboard_Page from "../pages/company/Dashboard_Page";
// import Admin_Dashboard_Page from "../pages/admin/Dashboard_Page";

import Not_Found_Page from "../pages/Not_Found_Page";

const App_Router = () => {
  return (
    <Routes>
      <Route element={<Main_Layout />}>
        <Route path={ROUTE_PATHS.HOME} element={<Home_Page />} />
      </Route>

      {/* <Route element={<Auth_Layout />}>
        <Route path={ROUTE_PATHS.LOGIN} element={<Login_Page />} />
        <Route path={ROUTE_PATHS.SIGNUP} element={<Signup_Page />} />
      </Route>

      <Route element={<Protected_Route />}>
        <Route element={<Dashboard_Layout />}>
          <Route element={<Role_Based_Route allowed_roles={["freelancer"]} />}>
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
          </Route>

          <Route element={<Role_Based_Route allowed_roles={["admin"]} />}>
            <Route
              path={ROUTE_PATHS.ADMIN_DASHBOARD}
              element={<Admin_Dashboard_Page />}
            />
          </Route>
        </Route>
      </Route> */}

      <Route path="*" element={<Not_Found_Page />} />
    </Routes>
  );
};

export default App_Router;
