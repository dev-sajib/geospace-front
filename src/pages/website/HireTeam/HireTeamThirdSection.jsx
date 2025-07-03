import React from "react";

const features = [
  { name: "Custom team built by GeoEspace", team: true, advanced: true },
  { name: "Flexible team composition", team: true, advanced: true },
  { name: "Top 5% of the Expert", team: true, advanced: true },
  { name: "Risk-free trial", team: true, advanced: true },
  { name: "Onboarding and team Integration", team: false, advanced: true },
  {
    name: "Budget, timelines, and resource planning",
    team: false,
    advanced: true,
  },
  {
    name: "Day to day team monitor and management",
    team: false,
    advanced: true,
  },
];

export default function HireTeamThirdSection() {
  return (
    <section className="bg-[#0B8468] py-20 sm:py-28">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-semibold text-[40px] text-white leading-[1.4] tracking-[-0.02em]">
            High Performing Team for Every Business Goal
          </h2>
          <p className="font-poppins max-w-3xl mx-auto mt-4 text-sm font-normal text-white/90 leading-[1.4] tracking-normal">
            Our portfolio of services helps you reach your business
            objectives—whether that’s business transformation, accelerating
            growth, or streamlining business operations.
          </p>
        </div>

        <div className="max-w-5xl mx-auto border border-white/30 rounded-xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-[#064939] font-poppins font-semibold text-lg text-white leading-[1.4]">
            <div className="p-4 py-[18px]">What you get</div>
            <div className="p-4 py-[18px] text-center border-x border-white/30">
              GeoEspace Team
            </div>
            <div className="p-4 py-[18px] text-center">
              GeoEspace Team Advanced
            </div>
          </div>

          {/* Table Body */}
          <div className="text-white">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="grid grid-cols-3 items-stretch border-t border-white/30"
              >
                <div className="font-poppins p-4 flex items-center text-sm font-medium leading-[1.4] tracking-normal">
                  {feature.name}
                </div>
                <div className="p-4 text-center border-x border-white/30 flex justify-center items-center">
                  {feature.team && (
                    <img
                      src="/images/check-mark.png"
                      alt="Checkmark"
                      className="inline-block w-6 h-6"
                    />
                  )}
                </div>
                <div className="p-4 text-center  flex justify-center items-center">
                  {feature.advanced && (
                    <img
                      src="/images/check-mark.png"
                      alt="Checkmark"
                      className="inline-block w-6 h-6"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
