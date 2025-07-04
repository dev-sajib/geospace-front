import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LogOut, Bell, ChevronDown } from "lucide-react";
import { setLogout } from "../../redux/slices/auth_slice";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../constants/route_paths";

const Dashboard_Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    dispatch(setLogout());
    navigate(ROUTE_PATHS.LOGIN);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white px-6 py-3 flex justify-between items-center sticky top-0 z-40">
      <div className="flex-1"></div>

      <div className="flex items-center space-x-6">
        <button className="relative w-10 h-10 flex items-center justify-center bg-emerald-50 rounded-full text-gray-500 hover:bg-[#B3D9D0]">
          <Bell className="h-6 w-6" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="relative" ref={dropdownRef}>
          <div
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-100"
          >
            <img
              src={user?.ProfilePictureUrl || "/images/userIcon.png"}
              alt="User Avatar"
              className="h-10 w-10 rounded-full object-cover bg-gray-400"
            />
            <div className="hidden md:block">
              <p className="font-semibold text-sm text-gray-900">
                {user?.Email || "admin@gmail.com"}
              </p>
              <p className="text-xs text-gray-500 capitalize">
                {user?.RoleName || "Admin"}
              </p>
            </div>
            <ChevronDown
              className={`h-5 w-5 text-gray-400 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50 py-1">
              <button
                onClick={handleLogout}
                className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Dashboard_Header;
