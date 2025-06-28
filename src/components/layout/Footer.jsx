import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#12382c] text-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4 sm:mb-6">
              <img
                src="/images/footer-logo.png"
                alt="GeoEspace"
                className="object-contain"
                style={{ width: "267px", height: "50px" }}
              />
            </Link>
            <div className="mt-4">
              <img
                src="/images/footer-qr.png"
                alt="QR Code"
                className="object-contain rounded-xl"
                style={{ width: "178px", height: "178px" }}
              />
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-white mb-4 sm:mb-6 text-sm sm:text-base">
              Hire Freelancer
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:underline text-xs sm:text-sm transition-colors"
                >
                  Miners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:underline text-xs sm:text-sm transition-colors"
                >
                  Geologists
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:underline text-xs sm:text-sm transition-colors"
                >
                  Engineer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:underline text-xs sm:text-sm transition-colors"
                >
                  Technician
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:underline text-xs sm:text-sm transition-colors"
                >
                  Civil Engineer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:underline text-xs sm:text-sm transition-colors"
                >
                  Data Specialist
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:underline text-xs sm:text-sm transition-colors"
                >
                  Professional Drillers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:underline text-xs sm:text-sm transition-colors"
                >
                  Petroleum Experts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:underline text-xs sm:text-sm transition-colors"
                >
                  Environment Specialist
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-white mb-4 sm:mb-6 text-sm sm:text-base">
              Apply
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:underline text-xs sm:text-sm transition-colors"
                >
                  Apply as a Freelancer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:underline text-xs sm:text-sm transition-colors"
                >
                  Apply as a Company
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-white mb-4 sm:mb-6 text-sm sm:text-base">
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  to="/refund-replacement"
                  className="text-white hover:underline text-xs sm:text-sm transition-colors"
                >
                  Refund/Replacement Policies
                </Link>
              </li>
              <li>
                <a
                  href="/insurance-payment"
                  className="text-white hover:underline text-xs sm:text-sm transition-colors"
                >
                  Insurance for freelancers
                </a>
              </li>
              <li>
                <Link
                  to="/replacement-guarantee"
                  className="text-white hover:underline text-xs sm:text-sm transition-colors"
                >
                  Replacement Guarantee
                </Link>
              </li>
              <li>
                <a
                  href="/insurance-professional-liability"
                  className="text-white hover:underline text-xs sm:text-sm transition-colors"
                >
                  Insurance Professional Liability
                </a>
              </li>
              <li>
                <Link
                  to="/tax-declaration"
                  className="text-white hover:underline text-xs sm:text-sm transition-colors"
                >
                  Tax Declaration Service
                </Link>
              </li>
              <li>
                <Link
                  to="/cnesst-permit"
                  className="text-white hover:underline text-xs sm:text-sm transition-colors"
                >
                  CNESST permit: AP-2403995
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-white mb-4 sm:mb-6 text-sm sm:text-base">
              Contact Us
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-3 h-3 sm:w-4 sm:h-4 text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white text-xs sm:text-sm">
                    222 Rue Poirier, J7R 6B1,
                  </p>
                  <p className="text-white text-xs sm:text-sm">Canada</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FaPhone className="w-3 h-3 sm:w-4 sm:h-4 text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white text-xs sm:text-sm">
                    +1(514) 571-8238
                  </p>
                  <p className="text-white text-xs sm:text-sm">
                    Fax +1(514-291-8063
                  </p>
                  <p className="text-white text-xs sm:text-sm">
                    Whats app: +1514-588-8238
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FaEnvelope className="w-3 h-3 sm:w-4 sm:h-4 text-white mt-1 flex-shrink-0" />
                <p className="text-white text-xs sm:text-sm">
                  admin@geoespace.ca
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-700 mt-8 sm:mt-12 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-6">
              <Link
                to="/why-choose-geoeospace"
                className="text-white hover:underline text-xs sm:text-sm transition-colors"
              >
                Why GeoEspace
              </Link>
              <Link
                to="/press-releases"
                className="text-white hover:underline text-xs sm:text-sm transition-colors"
              >
                Press Center
              </Link>
              <a
                href="#"
                className="text-white hover:underline text-xs sm:text-sm transition-colors"
              >
                Careers
              </a>
              <Link
                to="/about"
                className="text-white hover:underline text-xs sm:text-sm transition-colors"
              >
                About Us
              </Link>
            </div>

            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-[#0B8468] transition-colors"
              >
                <FaLinkedin className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a
                href="#"
                className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-[#0B8468] transition-colors"
              >
                <FaTwitter className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a
                href="#"
                className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-[#0B8468] transition-colors"
              >
                <FaFacebook className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a
                href="#"
                className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-[#0B8468] transition-colors"
              >
                <FaInstagram className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-700 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <Link
              to="/privacy-policy"
              className="text-white hover:underline text-xs sm:text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-conditions"
              className="text-white hover:underline text-xs sm:text-sm transition-colors"
            >
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
