import {FreelancerHireCard} from "../../../components/common/FreelancerHireCard.jsx";

export default function HireGeologistLowerSection() {
  const sampleFreelancers = [
    {
      name: "Ric Saltzman",
      role: "Geologist",
      verifiedExpert: "Verified Expert in Mining",
      image: "/images/Frame-112.png",
      hourlyRate: 50,
      rating: 5,
    },
    {
      name: "Ric Saltzman",
      role: "Geologist",
      verifiedExpert: "Verified Expert in Mining",
      image: "/images/Frame-112.png",
      hourlyRate: 50,
      rating: 5,
    },
    {
      name: "Ric Saltzman",
      role: "Geologist",
      verifiedExpert: "Verified Expert in Mining",
      image: "/images/Frame-112.png",
      hourlyRate: 50,
      rating: 5,
    },
    {
      name: "Ric Saltzman",
      role: "Geologist",
      verifiedExpert: "Verified Expert in Mining",
      image: "/images/Frame-112.png",
      hourlyRate: 50,
      rating: 5,
    },
    {
      name: "Ric Saltzman",
      role: "Geologist",
      verifiedExpert: "Verified Expert in Mining",
      image: "/images/Frame-112.png",
      hourlyRate: 50,
      rating: 5,
    },
    {
      name: "Ric Saltzman",
      role: "Geologist",
      verifiedExpert: "Verified Expert in Mining",
      image: "/images/Frame-112.png",
      hourlyRate: 50,
      rating: 5,
    },
    {
      name: "Ric Saltzman",
      role: "Geologist",
      verifiedExpert: "Verified Expert in Mining",
      image: "/images/Frame-112.png",
      hourlyRate: 50,
      rating: 5,
    },
    {
      name: "Ric Saltzman",
      role: "Geologist",
      verifiedExpert: "Verified Expert in Mining",
      image: "/images/Frame-112.png",
      hourlyRate: 50,
      rating: 5,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className=" font-poppins font-semibold text-[32px] sm:text-[36px] md:text-[40px] leading-tight text-gray-900">
            How to hire geologists of Canada
            <br />
            <span className="inline-block mt-2">
              from <span className="text-emerald-600">GeoEspace</span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mb-12">
          {sampleFreelancers.map((freelancer, index) => (
            <FreelancerHireCard
              key={index}
              {...freelancer}
              onMessage={() => console.log("Message", freelancer.name)}
              onHire={() => console.log("Hire", freelancer.name)}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <button
            className="text-white bg-[#0B8468] rounded-[8px] text-base font-semibold"
            style={{
              width: "132px",
              height: "52px",
              padding: "15px 24px",
              gap: "10px",
            }}
            onClick={() => console.log("Load more...")}
          >
            Load More
          </button>
        </div>
      </div>
    </section>
  );
}
