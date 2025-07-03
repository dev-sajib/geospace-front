import React from "react";
import HireTeamStructure from "./HireTeamStructure";
import {LogoCarousel} from "../../../components/common/LogoCarousel.jsx";

export default function HireTeamTopSection() {
  return (
    <>
      <section className="bg-[url('/images/hero-bg.png')] bg-cover bg-center pt-10">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Hire World-class
                <br />
                Team from Industry
              </h1>
              <p className="text-lg text-white/90 mb-6 leading-relaxed text-justify">
                GeoEspace empowers companies in the natural resources sector
                with top-tier freelance talent and full-spectrum support. From
                geological consulting and environmental assessments to mining
                operations and exploration project management, GeoEspace
                provides specialized experts to solve your most complex
                challenges.
              </p>
              <button className="bg-white text-emerald-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Get a Free Consultation Now
              </button>
            </div>

            <div className="relative">
              <HireTeamStructure />
            </div>
          </div>
        </div>

        <div className="max-w-container mx-auto pt-[40px] sm:pt-[60px] pb-[50px] sm:pb-[100px]">
          <p className="text-white/80 mb-8 border-t border-t-[rgba(255,255,255,0.5)] pt-[16px]">
            Trusted By Leading Brands and Start Ups
          </p>
          <div className="carousel-wrapper" style={{ filter: "invert(1)" }}>
            <LogoCarousel />
          </div>
        </div>
      </section>
    </>
  );
}
