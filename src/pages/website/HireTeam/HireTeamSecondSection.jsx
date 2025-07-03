import { useEffect, useState } from "react";
import geoEspaceData from "./../../../api/teamData.json";

export default function HireTeamSecondSection() {
  const teamData = geoEspaceData.teams;
  const hireSteps = geoEspaceData.hiringProcess;
  const subTabsData = geoEspaceData.subTabs;

  const [activeMainTab, setActiveMainTab] = useState("geoEspaceTeam");
  const [activeSubTab, setActiveSubTab] = useState("creative");
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const newMainTabData = teamData[activeMainTab];
    const availableSubTabs = Object.keys(newMainTabData);

    let currentSubTab = activeSubTab;
    if (!availableSubTabs.includes(currentSubTab)) {
      currentSubTab = availableSubTabs[0];
      setActiveSubTab(currentSubTab);
    }

    const newTeam = newMainTabData[currentSubTab] || [];
    setSelectedMember(newTeam.length > 0 ? newTeam[0] : null);
  }, [activeMainTab, activeSubTab]);

  const currentTeam = teamData[activeMainTab]?.[activeSubTab] || [];
  const topRowTeam = currentTeam.slice(0, 3);
  const bottomRowTeam = currentTeam.slice(3, 6);
  const containerBg = { backgroundColor: "#FBFCFB" };

  const availableSubTabsForNav = Object.keys(teamData[activeMainTab]);
  const activeTabLabel =
    subTabsData.find((tab) => tab.id === activeSubTab)?.label || activeSubTab;

  const handleNextTab = () => {
    const currentIndex = availableSubTabsForNav.findIndex(
      (tabKey) => tabKey === activeSubTab
    );
    const nextIndex = (currentIndex + 1) % availableSubTabsForNav.length;
    setActiveSubTab(availableSubTabsForNav[nextIndex]);
  };

  const handlePrevTab = () => {
    const currentIndex = availableSubTabsForNav.findIndex(
      (tabKey) => tabKey === activeSubTab
    );
    const prevIndex =
      (currentIndex - 1 + availableSubTabsForNav.length) %
      availableSubTabsForNav.length;
    setActiveSubTab(availableSubTabsForNav[prevIndex]);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-poppins font-medium text-sm text-emerald-600 mb-2">
            OUR BEST TEAM
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            High Performing Team for Every Business Goal
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-sm font-poppins font-normal text-[#222222] leading-[140%]">
            Our portfolio of services helps you reach your business
            objectives—whether that’s business transformation, accelerating
            growth, or streamlining business operations.
          </p>
        </div>
        <div className="flex justify-center items-center gap-4 mb-10">
          <button
            onClick={() => setActiveMainTab("geoEspaceTeam")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeMainTab === "geoEspaceTeam"
                ? "bg-emerald-600 text-white shadow-lg"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            GeoEspace Team
          </button>
          <button
            onClick={() => setActiveMainTab("geoEspaceAdvanced")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeMainTab === "geoEspaceAdvanced"
                ? "bg-emerald-600 text-white shadow-lg"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            GeoEspace Team Advanced
          </button>
        </div>

        <div
          className="border border-[#8FC6BA] rounded-2xl p-6 md:p-10 shadow-sm"
          style={containerBg}
        >
          <p className="text-center text-gray-600 mb-6 font-medium">
            Explore Example of the creative Environment Team
          </p>

          <div className="hidden md:flex justify-center mb-12">
            <div className="inline-flex items-center rounded-2xl bg-white overflow-hidden border border-gray-200">
              {Object.keys(teamData[activeMainTab]).map((tabKey) => {
                const tabLabel =
                  subTabsData.find((t) => t.id === tabKey)?.label ||
                  tabKey.charAt(0).toUpperCase() + tabKey.slice(1);
                return (
                  <TabButton
                    key={tabKey}
                    label={tabLabel}
                    isActive={activeSubTab === tabKey}
                    onClick={() => setActiveSubTab(tabKey)}
                  />
                );
              })}
            </div>
          </div>
          <div className="md:hidden flex items-center justify-between mb-8 px-2">
            <button
              onClick={handlePrevTab}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              {activeTabLabel}
            </h3>
            <button
              onClick={handleNextTab}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 items-start">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center mb-10">
                <div
                  className="w-[102px] h-[102px] rounded-xl flex items-center justify-center"
                  style={{ border: "2.25px solid #8FC6BA" }}
                >
                  <img
                    src="/images/duo-icons_user.png"
                    alt="Managed by you icon"
                    className="w-12 h-12"
                  />
                </div>
                <div className="mt-3 bg-[#085E4A] text-white text-xs font-semibold px-4 py-2 rounded-lg">
                  Managed by You
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-center gap-x-8 gap-y-8 mb-8">
                  {topRowTeam.map((member) => (
                    <TeamMemberCard
                      key={member.id}
                      member={member}
                      selectedMember={selectedMember}
                      onClick={() => setSelectedMember(member)}
                    />
                  ))}
                </div>
                <div className="flex justify-center gap-x-8 gap-y-8">
                  {bottomRowTeam.map((member) => (
                    <TeamMemberCard
                      key={member.id}
                      member={member}
                      selectedMember={selectedMember}
                      onClick={() => setSelectedMember(member)}
                    />
                  ))}
                </div>
              </div>
              <p className="text-center text-gray-500 mt-12 text-sm">
                Explore Example of the creative Environment Team
              </p>
            </div>
            {selectedMember ? (
              <div
                className="bg-white rounded-2xl border border-[#088468] overflow-hidden flex flex-col"
                style={{ width: "600px", height: "665px" }}
              >
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full object-cover"
                  style={{ height: "337px" }}
                />
                <div className="p-10 text-left flex-grow flex flex-col">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {selectedMember.name}
                    </h3>
                    <div className="flex items-center flex-wrap gap-x-5 gap-y-2 mt-3 text-sm text-[#21DC1E] font-medium">
                      <span className="flex items-center gap-1.5">
                        <img
                          src="/public/images/verified.png"
                          alt="Check"
                          className="w-5 h-5"
                        />{" "}
                        {selectedMember.verified}
                      </span>
                    </div>
                    <div className="flex items-center flex-wrap gap-x-5 gap-y-2 mt-3 text-sm text-[#2D2D2D] font-medium">
                      <span className="flex items-center gap-3">
                        <img
                          src="/public/images/clock.png"
                          alt="Clock"
                          className="w-4 h-4"
                        />{" "}
                        {selectedMember.experience}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src={
                          i < selectedMember.rating
                            ? "/svg/star-active.svg"
                            : "/svg/star-inactive.svg"
                        }
                        alt="Star rating"
                        className="h-5 w-5"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed mt-4 flex-grow">
                    {selectedMember.description}
                  </p>
                  <div className="flex gap-4 mt-4">
                    <SocialIcon iconPath="/svg/facebook-icon.svg" href="#" />
                    <SocialIcon iconPath="/svg/github-icon.svg" href="#" />
                    <SocialIcon iconPath="/svg/linkedin-icon.svg" href="#" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center bg-white rounded-2xl border border-dashed h-full">
                <p>No team members in this category.</p>
              </div>
            )}
          </div>
          <div className="mt-24">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-16">
                How Hire{" "}
                <span className="text-emerald-600">GeoEspace Team?</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                {hireSteps.map((item) => (
                  <div
                    key={item.step}
                    className="flex flex-col items-center text-center"
                  >
                    <p className="text-sm text-gray-500 mb-2">Step</p>
                    <div className="flex items-center justify-center w-20 h-20 bg-[#F0FDF4] rounded-full mb-4">
                      <span className="text-2xl font-bold text-emerald-500">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 max-w-xs">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TabButton = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-8 py-4 text-base font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50 ${
      isActive
        ? "bg-[#089778] text-white"
        : "bg-white text-gray-800 hover:bg-gray-50"
    }`}
  >
    {label}
  </button>
);

const TeamMemberCard = ({ member, selectedMember, onClick }) => (
  <div
    className={`w-[110px] rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
      selectedMember?.id === member.id
        ? "border-emerald-500"
        : "border-transparent"
    }`}
    onClick={onClick}
  >
    <img
      src={member.image}
      alt={member.name}
      className="w-full h-[120px] object-cover"
    />
    <div
      className={`p-2 text-center transition-colors duration-300 ${
        selectedMember?.id === member.id
          ? "bg-emerald-600 text-white"
          : "bg-[#f0f0f0] text-gray-800"
      }`}
    >
      <p className="text-xs font-semibold truncate">{member.name}</p>
    </div>
  </div>
);

const SocialIcon = ({ href, iconPath }) => (
  <a
    href={href}
    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
  >
    <img src={iconPath} alt="Social icon" className="w-4 h-4" />
  </a>
);
