const ClientVideoCard = ({ title, imageSrc, companyName, className = "" }) => {
  return (
    <div
      className={`relative rounded-lg overflow-hidden shadow-lg group cursor-pointer ${className}`}
    >
      <div className="aspect-video bg-gray-200 relative">
        <img
          src={imageSrc || "/api/placeholder/400/225"}
          alt={title}
          className="w-full h-full object-cover"
        />

        {companyName && (
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
            <h3 className="text-white text-sm sm:text-lg font-bold drop-shadow-lg">
              {companyName}
            </h3>
          </div>
        )}

        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 rounded-full p-2 sm:p-3 group-hover:bg-white transition-colors shadow-lg">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 ml-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4">
          <div className="bg-[#0B8468] text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center shadow-lg">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">Watch this Video</span>
            <span className="sm:hidden">Watch</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientVideoCard;
