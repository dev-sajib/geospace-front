const ClientLogos = () => {
  const clients = [
    { name: "Wallbridge Mining", logo: "/images/wallbridge2.png" },
    { name: "AXIS", logo: "/images/axis.png" },
    { name: "CNESST", logo: "/images/cnesst2.png" },
    { name: "AEMQ", logo: "/images/aemq1.png" },
    { name: "AXIS", logo: "/images/axis.png" },
    { name: "CNESST", logo: "/images/cnesst2.png" },
    { name: "AEMQ", logo: "/images/aemq1.png" },
    { name: "Wallbridge Mining", logo: "/images/wallbridge2.png" },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="g-h2 text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
          Trusted by <span className="text-emerald-600">100+ Clients</span>{" "}
          Worldwide
        </h2>
        <p className="g-p2 text-sm sm:text-base text-gray-600 mb-8 sm:mb-12">
          Brands and professionals rely on us for quality, reliability, and
          results.
        </p>

        <div className="space-y-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 max-w-6xl mx-auto">
            {clients.slice(0, 5).map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="w-full max-w-[200px] sm:max-w-[240px] h-20 sm:h-24 lg:h-28 flex items-center justify-center border border-gray-200 rounded-2xl p-3 sm:p-4 lg:p-6">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full w-auto h-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-3xl mx-auto">
            {clients.slice(5, 8).map((client, index) => (
              <div key={index + 5} className="flex items-center justify-center">
                <div className="w-full max-w-[200px] sm:max-w-[240px] h-20 sm:h-24 lg:h-28 flex items-center justify-center border border-gray-200 rounded-2xl p-3 sm:p-4 lg:p-6">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full w-auto h-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
