import { Link } from "react-router-dom";

const Dashboard_Footer = () => {
  return (
    <footer className="bg-[#05372C] text-white text-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p>© 2025 Geoespace. All right reserved.</p>
        <div className="flex items-center space-x-6">
          <Link to="/contact" className="hover:underline">
            Contact Us
          </Link>
          <Link to="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/faq" className="hover:underline">
            FAQs
          </Link>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Dashboard_Footer;
