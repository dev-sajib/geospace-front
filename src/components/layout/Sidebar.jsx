import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import {
  CommonErrorHandler,
  SilentErrorHandler,
} from "../../utils/error_handler";
import { getMenusByRoleId } from "../../api/menu_sidebar_service";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  const [menuItems, setMenuItems] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);

  const hasFetched = useRef(false);

  useEffect(() => {
    const fetchMenus = async () => {
      if (user?.RoleId) {
        try {
          const data = await getMenusByRoleId(user.RoleId);
          setMenuItems(data);

          const currentParent = data.find((link) =>
            link.Sublinks?.some((sublink) =>
              location.pathname.startsWith(sublink.RoutePath)
            )
          );
          setOpenMenu(currentParent ? currentParent.MenuName : null);
        } catch (error) {
          SilentErrorHandler(error, "Failed to fetch sidebar menus");
          return [];
        }
      }
    };

    if (!hasFetched.current) {
      fetchMenus();
      hasFetched.current = true;
    }
  }, [user, location.pathname]);

  return (
    <aside className="w-72 bg-white flex-shrink-0 hidden lg:flex flex-col">
      <div className="p-6 flex justify-center">
        <img src="/images/logo.png" alt="GeoEspace Logo" className="h-10" />
      </div>
      <nav className="p-4 flex-1">
        <ul>
          {menuItems.map((link) => {
            const isParentActive = openMenu === link.MenuName;
            return (
              <li key={link.MenuId} className="mb-2">
                <button
                  onClick={() =>
                    setOpenMenu(isParentActive ? null : link.MenuName)
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
                      src={link.IconPath}
                      alt=""
                      className={`h-5 w-5 mr-3 ${
                        isParentActive ? "brightness-0 invert" : ""
                      }`}
                    />
                    <span>{link.MenuName}</span>
                  </div>
                  {link.Sublinks &&
                    (isParentActive ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    ))}
                </button>
                {link.Sublinks && isParentActive && (
                  <ul className="pl-4 mt-2 space-y-1">
                    {link.Sublinks.map((sublink) => (
                      <li key={sublink.MenuId}>
                        <NavLink
                          to={sublink.RoutePath}
                          className={({
                            isActive,
                          }) => `block py-2 px-4 rounded-md text-sm font-medium
                                ${
                                  isActive
                                    ? "bg-[#B3D9D0] text-emerald-900"
                                    : "text-gray-500 hover:bg-gray-100"
                                }`}
                        >
                          {sublink.MenuName}
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
