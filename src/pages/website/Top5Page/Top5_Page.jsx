import {
  FaGlobe,
  FaClipboardCheck,
  FaVideo,
  FaProjectDiagram,
  FaStar,
} from "react-icons/fa";

const Top5Page = () => {
  const screeningSteps = [
    {
      step: "01",
      icon: <img src="/images/top5-stp1.svg" className="w-full h-full" />,
      title: "Language and Personality",
      description:
        "The first step of the screening process is a comprehensive English & French language and communication interview evaluation. We also assess personality traits, looking for candidates who are passionate and fully engaged in their work.",
    },
    {
      step: "02",
      icon: <img src="/images/top5-stp2.svg" className="w-full h-full" />,
      title: "In-Depth Skill Review",
      description:
        "We also test each applicant's technical knowledge and problem-solving ability through various assessments. Every member of the GeoEspace network is an expert in their domain, and we typically only advance candidates with exceptional results in this phase.",
    },
    {
      step: "03",
      icon: <img src="/images/top5-stp3.svg" className="w-full h-full" />,
      title: "Live Screening",
      description:
        "Each candidate is interviewed by GeoEspace screeners who are experts in their functional domain. Our screeners provide specific live exercises, looking for problem-solving ability, depth of experience, communication ability, and creativity.",
    },
    {
      step: "04",
      icon: <img src="/images/top5-stp4.svg" className="w-full h-full" />,
      title: "Test Projects",
      description:
        "Each candidate is assigned a test project to evaluate whether they can 'walk the walk.' Test projects take 1-3 weeks are comprehensive and provide real-world scenarios for candidates to demonstrate their competence, thoroughness, professionalism, and integrity.",
    },
    {
      step: "05",
      icon: <img src="/images/top5-stp5.svg" className="w-full h-full" />,
      title: "Continued Excellence",
      description:
        "Members of the GeoEspace network maintain a track record of excellence while working with clients. As a quality-first company, our focus is on the top for talent and the top for clients, and this principle permeates through to every engagement and every delivered project.",
    },
  ];

  const environmentFreelancers = [
    "Geotechnical Engineers",
    "Geotechnical Engineers",
    "Geotechnical Engineers",
    "Geotechnical Engineers",
    "Environmental Consultants",
    "Environmental Consultants",
    "Environmental Consultants",
    "Environmental Consultants",
    "Remote Sensing Specialists",
    "Remote Sensing Specialists",
    "Remote Sensing Specialists",
    "Remote Sensing Specialists",
    "GIS Analysts",
    "GIS Analysts",
    "GIS Analysts",
    "GIS Analysts",
    "Geologists (Field & Lab)",
    "Geologists (Field & Lab)",
    "Geologists (Field & Lab)",
    "Geologists (Field & Lab)",
    "CAD Technicians (Geology & Mining)",
    "CAD Technicians (Geology & Mining)",
    "CAD Technicians (Geology & Mining)",
    "CAD Technicians (Geology & Mining)",
    "Soil Scientists",
    "Soil Scientists",
    "Soil Scientists",
    "Soil Scientists",
  ];

  const geologistFreelancers = [
    "Geotechnical Engineers",
    "Geotechnical Engineers",
    "Geotechnical Engineers",
    "Geotechnical Engineers",
    "Environmental Consultants",
    "Environmental Consultants",
    "Environmental Consultants",
    "Environmental Consultants",
    "Remote Sensing Specialists",
    "Remote Sensing Specialists",
    "Remote Sensing Specialists",
    "Remote Sensing Specialists",
    "GIS Analysts",
    "GIS Analysts",
    "GIS Analysts",
    "GIS Analysts",
    "Geologists (Field & Lab)",
    "Geologists (Field & Lab)",
    "Geologists (Field & Lab)",
    "Geologists (Field & Lab)",
    "CAD Technicians (Geology & Mining)",
    "CAD Technicians (Geology & Mining)",
    "CAD Technicians (Geology & Mining)",
    "CAD Technicians (Geology & Mining)",
    "Soil Scientists",
    "Soil Scientists",
    "Soil Scientists",
    "Soil Scientists",
  ];

  const companies = [
    {
      name: "CNESST",
      logo: "/images/CNESST.svg",
    },
    {
      name: "OGQ",
      logo: "/images/OGQ.svg",
    },
    {
      name: "AEMQ",
      logo: "/images/AEMQ.svg",
    },
    {
      name: "Wallbridge Mining",
      logo: "/images/Wallbridge Mining.svg",
    },
    {
      name: "OGQ",
      logo: "/images/OGQ.svg",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-[url('/images/hero-bg.png')] bg-cover bg-center pt-24 py-16 sm:py-20 lg:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
            Why 5%
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 lg:mb-12">
            Our name "GeoEspace" reflects our commitment to Geoscience
            Excellence — we strive to connect top-tier professionals in geology,
            mining, and environmental fields with meaningful opportunities.
            Through a careful and selective process, we identify skilled
            freelancers who not only have technical expertise but also the
            dedication and professionalism to deliver exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button className="bg-white text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-50 transition-colors duration-200 w-full sm:w-auto">
              Hire Top Talent
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-white hover:text-emerald-600 transition-colors duration-200 w-full sm:w-auto">
              Apply as a Freelancer
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12">
            Trusted By Leading Brands and Start Ups
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-16 sm:h-20 lg:h-24"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              The <span className="text-emerald-600">GeoEspace</span> Screening
              Process
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Each applicant to our network must pass a screening process
              designed to measure subject matter expertise, professionalism, and
              communication skills. The full screening process takes between 3-8
              weeks to complete.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {screeningSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 relative mb-16 sm:mb-20 last:mb-0"
              >
                {index < screeningSteps.length - 1 && (
                  <div className="hidden sm:block absolute left-[52.8px] top-[105.66px] w-0.5 h-16 lg:h-20 bg-emerald-300"></div>
                )}

                <div className="sm:hidden w-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        padding: "15px",
                      }}
                    >
                      {step.icon}
                    </div>
                    <div className="flex flex-col">
                      <div className="text-xs text-[#525252] mb-1">Step</div>
                      <div className="text-2xl font-medium text-[#525252]">
                        {step.step}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-start gap-8 w-full">
                  <div
                    className="rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      width: "105.65px",
                      height: "105.66px",
                      borderRadius: "264.13px",
                      padding: "15px",
                    }}
                  >
                    {step.icon}
                  </div>

                  <div className="flex flex-col items-start pt-4">
                    <div className="text-xs text-[#525252] mb-1">Step</div>
                    <div className="text-3xl lg:text-4xl font-medium text-[#525252] mb-4">
                      {step.step}
                    </div>
                  </div>

                  <div className="flex-1 pt-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
            The Top <span className="text-emerald-600">5%</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 lg:mb-12">
            GeoEspace is an exclusive professional network built for the
            geology, mining, and environmental sectors — a platform unlike any
            other. Our network brings together top-tier freelancers and
            companies who are experts in their fields: field geologists, mining
            engineers, environmental consultants, researchers, innovators, and
            project leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
            <button className="bg-[#0B8468] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-emerald-700 transition-colors duration-200 w-full sm:w-auto">
              Hire Top Talent
            </button>
            <button className="border-2 border-emerald-600 text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#0B8468] hover:text-white transition-colors duration-200 w-full sm:w-auto">
              Apply as a Freelancer
            </button>
          </div>
          <p className="text-xs sm:text-sm text-gray-500">
            The screening process may vary or be changed as needed at the
            company's discretion
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-[#0B8468] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-700"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 1px, transparent 1px),
                             radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            GeoEspace Connects the Top 5% of Freelance
            <br className="hidden sm:block" />
            Talent All Over The World.
          </h2>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              GeoEspace Environment Freelancers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {environmentFreelancers.slice(0, 28).map((freelancer, index) => (
                <div
                  key={index}
                  className="text-sm sm:text-base text-gray-600 py-2"
                >
                  {freelancer}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              GeoEspace Geologists Freelancers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {geologistFreelancers.slice(0, 28).map((freelancer, index) => (
                <div
                  key={index}
                  className="text-sm sm:text-base text-gray-600 py-2"
                >
                  {freelancer}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Top5Page;
