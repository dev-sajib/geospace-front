export const FreelancerCard = ({
  name,
  serviceCategory,
  role,
  previousCompany,
  companyName,
  image,
  isActive,
  profileLink,
  enableOverlayOnHover = false,
  disableBoxShadowOnHover = true,
  overlayText = "View Profile",
  enableBorderOnHover = true,
}) => {
  return (
    <div
      onClick={() => (window.location.href = profileLink)}
      className={`w-full bg-white rounded-xl ${
        isActive ? "border-1 border-emerald-600" : "border-0 border-transparent"
      } shadow-[2px_5px_20px_rgba(0,0,0,0.1)] ${disableBoxShadowOnHover && "hover:shadow-none"} ${
        enableBorderOnHover ? "hover:border-emerald-600 hover:border-1" : ""
      } transition-all duration-300  flex flex-col cursor-pointer my-3 group`}
    >
      <div className="w-full h-[271px] overflow-hidden flex-shrink-0 rounded-t-xl relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:-translate-y-2.5"
        />
        <div
          className={`absolute inset-0 bg-[#5cad9ac7]  opacity-0 transition-opacity duration-300 flex items-center justify-center rounded-t-xl ${
            enableOverlayOnHover ? "group-hover:opacity-100" : ""
          }`}
        >
          <span className="text-white font-normal text-lg">{overlayText}</span>
        </div>
      </div>
      <div className="flex-grow flex flex-col p-4 md:p-6">
        <div className="g-semibold-20 text-gray-900 mb-2 line-clamp-2">
          {name}
        </div>
        <div className="flex items-center mb-3">
          <img src="/images/image 6.svg" alt={serviceCategory} />
          <div
            className="font-poppins font-normal g-15 leading-none tracking-normal"
            style={{ color: "#21DC1E" }}
          >
            Verified Expert in {serviceCategory}
          </div>
        </div>
        <div className="#0D0D0D mb-4 g-15 line-clamp-2 flex-grow font-normal">
          {role}
        </div>
        <div className="g-15 text-gray-300 mt-auto">
          <p className="mb-1 font-normal">PREVIOUSLY AT</p>
          <p className="g-15 text-gray-700 line-clamp-2">
            <strong className="g-title">{previousCompany}</strong> {companyName}
          </p>
        </div>
      </div>
    </div>
  );
};
