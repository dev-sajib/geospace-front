import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

const adminNav = [
  {
    title: "System Overview",
    path: "/admin/dashboard",
    icon: "/images/home.png",
    sublinks: [
      { title: "Total Active Users", path: "/admin/active-users" },
      { title: "Contracts in Progress", path: "/admin/contracts" },
      { title: "Pending Timesheets", path: "/admin/pending-timesheets" },
      { title: "Dispute Tickets", path: "/admin/dispute-tickets" },
      { title: "Platform Metrics", path: "/admin/platform-metrics" },
    ],
  },
  {
    title: "Timesheet",
    path: "/admin/timesheet",
    icon: "/images/time_sheet.png",
    sublinks: [
      { title: "Timesheet Sub 1", path: "/admin/timesheet/sub1" },
      { title: "Timesheet Sub 2", path: "/admin/timesheet/sub2" },
    ],
  },
  {
    title: "User Management",
    path: "/admin/users",
    icon: "/images/users.png",
  },
  {
    title: "Project & Contract",
    path: "/admin/projects",
    icon: "/images/projects.png",
  },
  {
    title: "Financial Mangement",
    path: "/admin/finance",
    icon: "/images/dollar-square.png",
  },
  {
    title: "Support & Escalation",
    path: "/admin/support",
    icon: "/images/customer-support.png",
  },
];

const navConfig = { admin: adminNav };

const Sidebar = ({ user_role }) => {
  const location = useLocation();
  const links = navConfig[user_role.toLowerCase()] || [];

  const [openMenu, setOpenMenu] = useState(() => {
    const currentParent = links.find((link) =>
      link.sublinks?.some((sublink) =>
        location.pathname.startsWith(sublink.path)
      )
    );
    return currentParent ? currentParent.title : null;
  });

  return (
    <aside className="w-72 bg-white flex-shrink-0 hidden lg:flex flex-col">
      <div className="p-6 flex justify-center">
        <img src="/images/logo.png" alt="GeoEspace Logo" className="h-10" />
      </div>
      <nav className="p-4 flex-1">
        <ul>
          {links.map((link) => {
            const isParentActive = openMenu === link.title;
            return (
              <li key={link.title} className="mb-2">
                <button
                  onClick={() =>
                    setOpenMenu(isParentActive ? null : link.title)
                  }
                  className={`flex items-center justify-between w-full p-3 rounded-lg text-left transition-colors duration-200 
                    ${
                      isParentActive
                        ? "bg-[#0B8468] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  <div className="flex items-center font-medium">
                    <img
                      src={link.icon}
                      alt=""
                      className={`h-5 w-5 mr-3 ${
                        isParentActive ? "brightness-0 invert" : ""
                      }`}
                    />
                    <span>{link.title}</span>
                  </div>
                  {link.sublinks &&
                    (isParentActive ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    ))}
                </button>
                {link.sublinks && isParentActive && (
                  <ul className="pl-4 mt-2 space-y-1">
                    {link.sublinks.map((sublink) => (
                      <li key={sublink.title}>
                        <NavLink
                          to={sublink.path}
                          className={({
                            isActive,
                          }) => `block py-2 px-4 rounded-md text-sm font-medium
                                ${
                                  isActive
                                    ? "bg-[#B3D9D0] text-emerald-900"
                                    : "text-gray-500 hover:bg-gray-100"
                                }`}
                        >
                          {sublink.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
