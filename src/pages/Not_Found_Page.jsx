import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../constants/route_paths";

const Not_Found_Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <h1 className="text-6xl font-bold text-emerald-600">404</h1>
      <h2 className="mt-4 text-3xl font-semibold text-gray-800">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-600">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        to={ROUTE_PATHS.HOME}
        className="mt-8 px-6 py-3 bg-[#0B8468] text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default Not_Found_Page;
