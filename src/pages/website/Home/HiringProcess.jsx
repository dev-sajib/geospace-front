import { FaUsers } from "react-icons/fa";

const ProcessCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white max-w-[462px] rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start space-x-3 sm:space-x-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className="g-title text-gray-900 mb-1 sm:mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed g-15">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const HiringProcess = () => {
  const steps = [
    {
      icon: <img src="/images/Vector.svg" alt="Business Team" />,
      title: "Talk to One of Our Industry Experts",
      description:
        "An expert on our team will work with you to understand your goals, technical needs, and team dynamics.",
    },
    {
      icon: <img src="/images/Artboard41.svg" alt="Business Team" />,
      title: "Work with Hand-Selected Talent",
      description:
        "Within days, we'll introduce you to the right talent for your project. Average time to match is under 24 hours.",
    },
    {
      icon: <img src="/images/Artboard41.svg" alt="Business Team" />,
      title: "The Right Fit, Guaranteed",
      description:
        "Work with your new team member on a trial basis (pay only if satisfied), ensuring you hire the right people for the job.",
    },
  ];

  return (
    <section className="mt-[140px] py-12 sm:py-16 lg:py-20 bg-[#0B8468]">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="g-h2 font-bold text-white mb-3 sm:mb-4">
            Hiring Made Easy
          </h2>
        </div>

        <div className="flex  items-center">
          <div className="space-y-4 max-w-[462px]  sm:space-y-6 w-full">
            {steps.map((step, index) => (
              <ProcessCard key={index} {...step} />
            ))}
          </div>

          <div style={{paddingLeft:'calc(0.0625rem + ((1vw - 4.2px) * 9.9333))'}} className="flex justify-center mt-8 lg:mt-0 w-full ">
            <img
                  src="/images/hiring-success.png"
                  alt="Business Team"
                  className="w-full h-full"
                />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;
