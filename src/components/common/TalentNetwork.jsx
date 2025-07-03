import { useState } from "react";
import {FreelancerCard} from "./FreelancerCard.jsx";
import services from "./../api/services.json"

const DiscoveryCard = () => {
  return (
    <div className="bg-[#0B8468] text-white rounded-xl p-6 sm:p-8 flex flex-col justify-center h-full min-h-[280px]">
      <div className="text-center">
        <img
          src="/images/bulb 1.svg"
          alt="Lightbulb"
          className="w-[200px] h-[200px] object-contain mx-auto mb-6"
          style={{ borderRadius: "131px" }}
        />

        <div
          className="w-[224px] h-[144px] mx-auto"
          style={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "150%",
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          <h3 className="font-bold mb-2">Discover 50,000+</h3>
          <h4 className="font-semibold mb-1">More Talent</h4>
          <p>in the GeoEspace Network</p>
        </div>
      </div>
    </div>
  );
};

const TalentNetwork = () => {
  const [activeTab, setActiveTab] = useState("Electrician");

    const tabs = [
        {
            name: "Electrician",
            icon: (
                <img
                    src="/images/electrician.svg"
                    alt="Electrician"
                    className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
                />
            ),
        },
        {
            name: "Environment Specialist",
            icon: (
                <img
                    src="/images/env-sp.svg"
                    alt="Environment Specialist"
                    className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
                />
            ),
        },
        {
            name: "Petroleum Expert",
            icon: (
                <img
                    src="/images/petroleum.svg"
                    alt="Petroleum Expert"
                    className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
                />
            ),
        },
        {
            name: "Technician",
            icon: (
                <img
                    src="/images/technician.svg"
                    alt="Technician"
                    className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
                />
            ),
        },
        {
            name: "Miner",
            icon: (
                <img
                    src="/images/miner.svg"
                    alt="Miner"
                    className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
                />
            ),
        },
        {
            name: "Engineer",
            icon: (
                <img
                    src="/images/engineer.svg"
                    alt="Engineer"
                    className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
                />
            ),
        },
        {
            name: "Geologist",
            icon: (
                <img
                    src="/images/geologist.svg"
                    alt="Geologist"
                    className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
                />
            ),
        },
    ];


  const talentDataByCategory = {
    Electrician: [
      {
        name: "James Wilson",
        role: "Senior Electrician",
        serviceCategory: "Electrical",
        previousCompany: "Hydro-Québec",
        companyName: "Hydro-Québec Corporation",
        image: "/images/team3.jpg",
      },
      {
        name: "Sarah Thompson",
        role: "Industrial Electrician",
        serviceCategory: "Industrial",
        previousCompany: "ABB",
        companyName: "ABB Power Systems",
        image: "/images/team4.jpg",
      },
      {
        name: "Mike Davis",
        role: "Power Systems Specialist",
        serviceCategory: "Power",
        previousCompany: "Schneider",
        companyName: "Schneider Electric",
        image: "/images/team5.jpg",
      },
    ],
    "Environment Specialist": [
      {
        name: "Maria Rodriguez",
        role: "Environmental Specialist",
        serviceCategory: "Environmental",
        previousCompany: "Barrick",
        companyName: "Barrick Gold Corporation",
        image: "/images/team4.jpg",
      },
      {
        name: "David Green",
        role: "Water Quality Analyst",
        serviceCategory: "Water",
        previousCompany: "Environment Canada",
        companyName: "Environment and Climate Change",
        image: "/images/team3.jpg",
      },
      {
        name: "Lisa Park",
        role: "Soil Contamination Expert",
        serviceCategory: "Soil",
        previousCompany: "Golder",
        companyName: "Golder Associates",
        image: "/images/team5.jpg",
      },
    ],
    "Petroleum Expert": [
      {
        name: "Robert Chen",
        role: "Petroleum Engineer",
        serviceCategory: "Petroleum",
        previousCompany: "Suncor",
        companyName: "Suncor Energy",
        image: "/images/team5.jpg",
      },
      {
        name: "Amanda Foster",
        role: "Reservoir Engineer",
        serviceCategory: "Reservoir",
        previousCompany: "Imperial Oil",
        companyName: "Imperial Oil Limited",
        image: "/images/team3.jpg",
      },
      {
        name: "Kevin Smith",
        role: "Drilling Engineer",
        serviceCategory: "Drilling",
        previousCompany: "Husky",
        companyName: "Husky Energy",
        image: "/images/team4.jpg",
      },
    ],
    Technician: [
      {
        name: "Carlos Martinez",
        role: "Mining Technician",
        serviceCategory: "Technical",
        previousCompany: "Agnico Eagle",
        companyName: "Agnico Eagle Mines",
        image: "/images/team4.jpg",
      },
      {
        name: "Jennifer Lee",
        role: "Laboratory Technician",
        serviceCategory: "Lab",
        previousCompany: "ALS",
        companyName: "ALS Laboratory Group",
        image: "/images/team5.jpg",
      },
      {
        name: "Paul Anderson",
        role: "Equipment Technician",
        serviceCategory: "Equipment",
        previousCompany: "Caterpillar",
        companyName: "Caterpillar Inc.",
        image: "/images/team3.jpg",
      },
    ],
    Miner: [
      {
        name: "Ric Saltzman",
        role: "Coal Miner",
        serviceCategory: "Mining",
        previousCompany: "Teck",
        companyName: "Teck Resources Limited",
        image: "/images/team3.jpg",
      },
      {
        name: "John Murphy",
        role: "Underground Miner",
        serviceCategory: "Underground",
        previousCompany: "Vale",
        companyName: "Vale S.A.",
        image: "/images/team4.jpg",
      },
      {
        name: "Steve Johnson",
        role: "Surface Miner",
        serviceCategory: "Surface",
        previousCompany: "Goldcorp",
        companyName: "Goldcorp Inc.",
        image: "/images/team5.jpg",
      },
    ],
    Engineer: [
      {
        name: "Henery Marcel",
        role: "Mining Engineer",
        serviceCategory: "Engineering",
        previousCompany: "Vale",
        companyName: "Vale S.A.",
        image: "/images/team5.jpg",
      },
      {
        name: "Rachel Kim",
        role: "Civil Engineer",
        serviceCategory: "Civil",
        previousCompany: "SNC-Lavalin",
        companyName: "SNC-Lavalin Group",
        image: "/images/team3.jpg",
      },
      {
        name: "Tom Brown",
        role: "Mechanical Engineer",
        serviceCategory: "Mechanical",
        previousCompany: "Bombardier",
        companyName: "Bombardier Inc.",
        image: "/images/team4.jpg",
      },
    ],
    Geologist: [
      {
        name: "Dr. Emily Watson",
        role: "Senior Geologist",
        serviceCategory: "Geology",
        previousCompany: "Barrick",
        companyName: "Barrick Gold Corporation",
        image: "/images/team4.jpg",
      },
      {
        name: "Michael Stone",
        role: "Exploration Geologist",
        serviceCategory: "Exploration",
        previousCompany: "Newmont",
        companyName: "Newmont Corporation",
        image: "/images/team5.jpg",
      },
      {
        name: "Sandra Hill",
        role: "Structural Geologist",
        serviceCategory: "Structural",
        previousCompany: "Rio Tinto",
        companyName: "Rio Tinto Group",
        image: "/images/team3.jpg",
      },
    ],
  };

  const currentTalentData =
    talentDataByCategory[activeTab] || talentDataByCategory["Electrician"];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="g-h2 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            <span className="text-emerald-600">Meet Talent</span> in Our Network
          </h2>
        </div>

        <div className="mb-8 sm:mb-12">
          <div className="w-[1400px] h-[80px] justify-between border-t border-b border-gray-100 pt-4 pb-4 flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide mx-auto max-w-full">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center space-x-1 sm:space-x-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                  activeTab === tab.name
                    ? "bg-[#0B8468] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.name}</span>
                <span className="sm:hidden">
                  {tab.name.includes(" ") ? tab.name.split(" ")[0] : tab.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {currentTalentData.map((talent, index) => (
            <FreelancerCard key={index} {...talent} />
          ))}

          <DiscoveryCard />
        </div>
      </div>
    </section>
  );
};

export default TalentNetwork;
