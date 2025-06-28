const ProfessionalCard = ({ icon, title, description }) => {
  return (
    <div className="border border-[#E9E9E9] p-10 transition-all duration-300 cursor-pointer group bg-gray-50 hover:bg-[#0B8468] min-h-[300px] flex flex-col">
      <div className="mb-6">
        <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300">
          <div className="group-hover:brightness-0 group-hover:invert">
            {icon}
          </div>
        </div>
      </div>

      <h3 className="text-xl font-medium text-gray-900 group-hover:text-white mb-4 line-clamp-2">
        {title}
      </h3>

      <p className="text-gray-600 group-hover:text-white text-[15px] leading-relaxed flex-1">
        {description}
      </p>

      <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a
          href="#"
          className="flex items-center text-white font-normal text-base hover:underline"
        >
          View {title}s
          <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

const ValueProposition = ({
  enableSectionTopSection = true,
  sectionTitle = "Leverage World-Class",
  sectionDescription = `We are the largest, globally-distributed network of expert geologist and miner, ready to tackle your most critical project.`,
}) => {
  const professionals = [
    {
      title: "Geologist",
      description:
        "Experienced geologists with in-depth knowledge of earth sciences, mineral exploration, and geological mapping.",
      icon: (
        <img
          src="/svg/geologist.svg"
          alt="Geologist"
          className="w-12 h-12 object-contain"
        />
      ),
    },
    {
      title: "Miner",
      description:
        "Skilled miners proficient in underground and surface mining techniques, safety protocols, and resource extraction.",
      icon: (
        <img
          src="/svg/miner.svg"
          alt="Miner"
          className="w-12 h-12 object-contain"
        />
      ),
    },
    {
      title: "Engineer",
      description:
        "Expert engineers across various disciplines, specializing in designing, developing, and optimizing industrial projects.",
      icon: (
        <img
          src="/svg/engineer.svg"
          alt="Engineer"
          className="w-12 h-12 object-contain"
        />
      ),
    },
    {
      title: "Environment Specialist",
      description:
        "A professional focused on analyzing, assessing, and resolving issues related to the environment. They work across various fields to protect ecosystems, promote sustainability, and ensure compliance with environmental regulations.",
      icon: (
        <img
          src="/svg/env-sp.svg"
          alt="Environment Specialist"
          className="w-12 h-12 object-contain"
        />
      ),
    },
    {
      title: "Data Specialist",
      description:
        "Data-driven analysts adept at interpreting complex data sets, providing actionable insights.",
      icon: (
        <img
          src="/svg/data-esp.svg"
          alt="Data Specialist"
          className="w-12 h-12 object-contain"
        />
      ),
    },
    {
      title: "Electrician",
      description:
        "Detail-oriented inspectors ensuring compliance with safety standards, quality control, and regulatory requirements.",
      icon: (
        <img
          src="/svg/electrician.svg"
          alt="Electrician"
          className="w-12 h-12 object-contain"
        />
      ),
    },
    {
      title: "Professional Driller",
      description:
        "Strategic managers with leadership experience in overseeing operations and ensuring project success across sectors.",
      icon: (
        <img
          src="/svg/driller.svg"
          alt="Professional Driller"
          className="w-12 h-12 object-contain"
        />
      ),
    },
    {
      title: "Technician",
      description:
        "A technician in mining and geology plays a critical role in the exploration, extraction, and analysis of mineral resources. Their work supports geologists, mining engineers, and other professionals in gathering data.",
      icon: (
        <img
          src="/svg/technician.svg"
          alt="Technician"
          className="w-12 h-12 object-contain"
        />
      ),
    },
    {
      title: "Petroleum Expert",
      description:
        "Experienced operators proficient in controlling and monitoring machinery, equipment, and systems to ensure optimal performance and safety.",
      icon: (
        <img
          src="/svg/petroleum.svg"
          alt="Petroleum Expert"
          className="w-12 h-12 object-contain"
        />
      ),
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {enableSectionTopSection && (
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {sectionTitle}
            </h2>
            <h2 className="g-h2 mb-6">
              <span className="text-emerald-600">Geological and Mining</span>{" "}
              <span className="text-gray-900">Talent</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {sectionDescription}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {professionals.map((professional, index) => (
            <ProfessionalCard key={index} {...professional} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
