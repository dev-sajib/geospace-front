import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/auth_service";
import { ROUTE_PATHS } from "../../constants/route_paths";
import { setLogin } from "../../redux/slices/auth_slice";
import { toast } from "react-toastify";
import { CommonErrorHandler } from "../../utils/error_handler";

const Login_Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const data = await loginUser({ email, password });
      dispatch(setLogin(data));

      if (data.UserDetails.RoleName === "Admin") {
        navigate(ROUTE_PATHS.ADMIN_DASHBOARD);
      } else if (data.UserDetails.RoleName === "Freelancer") {
        navigate(ROUTE_PATHS.FREELANCER_DASHBOARD);
      } else {
        navigate(ROUTE_PATHS.COMPANY_DASHBOARD);
      }
      toast.success("Login successful !");
    } catch (err) {
      CommonErrorHandler(err);
      // setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
      <div className="text-center">
        <img src="/images/logo.png" alt="GeoEspace Logo" />
      </div>

      <div className="flex justify-between items-center">
        <h1 className="font-poppins font-medium text-[32px] leading-[1.4] tracking-[-0.02em] text-gray-900">
          Log in
        </h1>
        <span className="text-sm text-[#222222] flex items-center">
          <img
            className="h-4 w-4 mr-2"
            src="/images/square-lock-password.png"
            alt="Lock Icon"
          />
          Secured connection
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 accent-[#0B8468] border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-gray-900">
              Remember me
            </label>
          </div>
          <a
            href="#"
            className="font-medium text-emerald-600 hover:text-emerald-500"
          >
            Lost Password?
          </a>
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-[#0B8468] hover:bg-emerald-700 disabled:bg-emerald-400"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>

      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative px-2 bg-white text-sm text-gray-500">or</div>
      </div>

      <div className="space-y-3">
        <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-full shadow-sm bg-white font-poppins text-sm font-normal text-gray-700 hover:bg-gray-50">
          <img src="/images/google.png" alt="Google" className="h-5 w-5 mr-2" />
          Log in with Google
        </button>
        <button className="w-full inline-flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm font-poppins text-sm font-normal text-white bg-[#0077B5] hover:bg-[#006097]">
          <img
            src="/images/linkedinBlue.png"
            className="h-5 w-5 mr-2"
            alt="LinkedIn"
          />
          Sign in with Linkedin
        </button>
      </div>

      <p className="text-xs text-center text-gray-500 px-4">
        By clicking Sign in with Linkedin, you agree to let Geoespace store your
        Linkedin profile
      </p>

      <p className="font-poppins text-sm text-center text-gray-600">
        No account? Join Geoespace as a{" "}
        <Link
          to="/signup-freelancer"
          className="font-medium text-emerald-600 hover:underline"
        >
          Freelancer
        </Link>{" "}
        or{" "}
        <Link
          to="/signup-company"
          className="font-medium text-emerald-600 hover:underline"
        >
          Company
        </Link>
      </p>
    </div>
  );
};

export default Login_Page;
