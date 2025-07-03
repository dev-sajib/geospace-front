import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { LogoCarousel } from "./LogoCarousel.jsx";
import { FreelancerCard } from "./FreelancerCard.jsx";

export default function DynamicHireTopSection({
  title,
  singularTitle,
  description,
  freelancers,
}) {
  const card1 = freelancers[0];
  const card2 = freelancers[1];

  return (
    <>
      <section
        className="bg-[#e7f3f0] bg-no-repeat bg-right-top pt-[165px] min-h-[707px] bg-contain"
        style={{
          backgroundImage: "url('/images/HireGeologistTop.png')",
        }}
      >
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
            <div className="text-center lg:text-left">
              <h1 className="font-poppins font-semibold text-4xl sm:text-5xl lg:text-[60px] text-[#0D0D0D] leading-[1.3] mb-6">
                Hire the Top 5% of
                <br />
                {title}
              </h1>
              <p className="font-poppins font-normal text-base text-[#1F1F1F] leading-6 mb-8 max-w-xl mx-auto lg:mx-0">
                {description}
              </p>
              <button className="bg-[#368468] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-transform transform hover:scale-105 shadow-lg">
                Hire a Top {singularTitle}
              </button>
            </div>

            <div className="hidden lg:block h-full relative">
              <div className="absolute -top-30 right-16 w-64">
                <FreelancerCard {...card2} />
              </div>
              <div className="absolute w-64">
                <FreelancerCard {...card1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#FBFCFB]">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-gray-600 mb-12 text-center">
            Trusted By Leading Brands and Start Ups
          </p>
          <LogoCarousel />
        </div>
      </section>
    </>
  );
}
