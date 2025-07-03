import { useState } from "react";
import PageHero from "../../../components/layout/Page_Hero.jsx";
import {TeamMemberCard} from "../../../components/common/TeamMemberCard.jsx";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("Executive Team");

  const tabs = [
    "Executive Team",
    "Business Leaders",
    "Stats and Figures",
    "Impact Initiatives",
  ];

  const teamMembers = [
    {
      image: "/images/team1.jpg",
      name: "Zane Sorell",
      title: "CEO",
      description:
        "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
    },
    {
      image: "/images/team2.png",
      name: "Zane Sorell",
      title: "CEO",
      description:
        "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
    },
    {
      image: "/images/team1.jpg",
      name: "Zane Sorell",
      title: "CEO",
      description:
        "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
    },
    {
      image: "/images/team2.png",
      name: "Zane Sorell",
      title: "CEO",
      description:
        "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
    },
    {
      image: "/images/team1.jpg",
      name: "Zane Sorell",
      title: "CEO",
      description:
        "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
    },
    {
      image: "/images/team2.png",
      name: "Zane Sorell",
      title: "CEO",
      description:
        "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
    },
  ];

  const businessLeaders = [
    {
      image: "/images/team1.jpg",
      name: "Zane Sorell",
      title: "CEO",
      description:
        "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
    },
    {
      image: "/images/team2.png",
      name: "Zane Sorell",
      title: "CTO",
      description:
        "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
    },
    {
      image: "/images/team1.jpg",
      name: "Zane Sorell",
      title: "CEO",
      description:
        "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
    },
    {
      image: "/images/team2.png",
      name: "Zane Sorell",
      title: "CEO",
      description:
        "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
    },
    {
      image: "/images/team1.jpg",
      name: "Zane Sorell",
      title: "CEO",
      description:
        "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
    },
    {
      image: "/images/team2.png",
      name: "Zane Sorell",
      title: "CEO",
      description:
        "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Executive Team":
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Meet our <span className="text-emerald-600">Executive Team</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>
          </div>
        );
      case "Business Leaders":
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Business <span className="text-emerald-600">Leaders</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessLeaders.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>
          </div>
        );
      case "Stats and Figures":
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Stats and <span className="text-emerald-600">Figures</span>
            </h2>
            <StatsChart />
          </div>
        );
      case "Impact Initiatives":
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Impact <span className="text-emerald-600">Initiatives</span>
            </h2>
            <ImpactInitiatives />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <PageHero
        title="About GeoEspace"
        description="At GeoEspace, we connect top-tier professionals with industry leaders to drive innovation, sustainability, and success in exploration, mining, and environmental sciences."
      />

      <section className="bg-gray-50 py-4">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center space-x-0 sm:space-x-8 space-y-2 sm:space-y-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium text-sm sm:text-base transition-colors duration-200 border-b-2 ${
                  activeTab === tab
                    ? "text-emerald-600 border-emerald-600"
                    : "text-gray-600 border-transparent hover:text-emerald-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          {renderTabContent()}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
