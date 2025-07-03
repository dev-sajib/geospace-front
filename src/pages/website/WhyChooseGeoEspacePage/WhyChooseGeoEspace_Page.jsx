import PageHero from "../components/PageHero";
import {
  FaGlobe,
  FaStar,
  FaCertificate,
  FaComments,
  FaShieldAlt,
  FaHandshake,
  FaDigitalTachograph,
} from "react-icons/fa";

const FeatureCard = ({
  icon,
  title,
  description,
  listItems,
  className = "",
}) => {
  return (
    <div
      className={`bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}
    >
      <div className="flex items-start space-x-3 sm:space-x-4">
        <div className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600 flex-shrink-0 mt-1">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
            {description}
          </p>
          {listItems && listItems.length > 0 && (
            <ul className="space-y-1 sm:space-y-2">
              {listItems.map((item, index) => (
                <li
                  key={index}
                  className="text-xs sm:text-sm text-gray-600 flex items-start"
                >
                  <span className="text-emerald-600 mr-2 mt-1 text-xs">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const WhyChooseGeoEspacePage = () => {
  const features = [
    {
      icon: <FaGlobe className="w-full h-full" />,
      title: "Specialization in Geosciences",
      description:
        "GeoEspace is laser-focused on geology, mining, environmental sciences, and petroleum. Unlike general platforms, we solve the unique challenges and technical demands of these sectors better than generalist placement agencies.",
    },
    {
      icon: <FaStar className="w-full h-full" />,
      title: "Top 5% Talent Guarantee",
      description:
        "Unlike traditional agencies that often focus on volume, GeoEspace only recruits the top 5% of experts. This ensures clients get highly qualified and vetted professionals.",
    },
    {
      icon: <FaCertificate className="w-full h-full" />,
      title: "Skills Verification & Certification",
      description:
        "GeoEspace freelancers undergo rigorous multi-step testing and certification, including:",
      listItems: [
        "Language proficiency",
        "Technical knowledge",
        "Best practices",
        "Real-world simulations",
      ],
    },
    {
      icon: <FaShieldAlt className="w-full h-full" />,
      title: "Risk-Free Trial Period",
      description:
        "GeoEspace offers a 1-week trial with every freelancer hire. If the company is not satisfied, they pay nothing or can replace the freelancer without penalty. This risk-reversal approach is uncommon among traditional firms.",
    },
    {
      icon: <FaComments className="w-full h-full" />,
      title: "Transparent Reviews & Ratings",
      description:
        "Each freelancer is reviewed by previous employers across key performance areas (reliability, work quality, speed, respect). This creates accountability, and agencies can't provide.",
    },
    {
      icon: <FaHandshake className="w-full h-full" />,
      title: "Flexible Engagement Models",
      description:
        "GeoEspace supports contract or hourly-based work, remote or onsite, which is ideal for exploration and short-term and long-term projects. Traditional agencies often prefer full-time, longer-term, fixed placements.",
    },
    {
      icon: <FaDigitalTachograph className="w-full h-full" />,
      title: "Scalable and Digital Platform",
      description: "GeoEspace is built as a modern platform, enabling:",
      listItems: [
        "Easy matching via AI (AWS Personalize Integration)",
        "Fast onboarding",
        "Seamless payments and freelancer management",
      ],
    },
  ];

  return (
    <>
      <PageHero
        title="Why Choose GeoEspace"
        description="Connecting You with the Top 5% of Geoscience Freelancers – Trusted, Vetted, and Ready to Deliver."
        bgColor="bg-[#0B8468]"
      />

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="block lg:hidden space-y-6 sm:space-y-8">
            <div className="flex justify-center py-4">
              <img
                src="/images/high-five.png"
                alt="High Five Illustration - GeoEspace Success"
                className="w-full max-w-sm h-auto"
              />
            </div>
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12">
            <div className="space-y-6 xl:space-y-8">
              <FeatureCard {...features[0]} />
              <FeatureCard {...features[1]} />
              <FeatureCard {...features[2]} />
              <FeatureCard {...features[3]} />
            </div>

            <div className="space-y-6 xl:space-y-8">
              <div className="flex justify-center py-4">
                <img
                  src="/images/high-five.png"
                  alt="High Five Illustration - GeoEspace Success"
                  className="w-full max-w-sm xl:max-w-md h-auto"
                />
              </div>

              <FeatureCard {...features[4]} />
              <FeatureCard {...features[5]} />
              <FeatureCard {...features[6]} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseGeoEspacePage;
