const ProcessCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start space-x-3 sm:space-x-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
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
      icon: <img src="/svg/Vector.svg" alt="Business Team" />,
      title: "Talk to One of Our Industry Experts",
      description:
        "An expert on our team will work with you to understand your goals, technical needs, and team dynamics.",
    },
    {
      icon: <img src="/svg/Artboard41.svg" alt="Business Team" />,
      title: "Work with Hand-Selected Talent",
      description:
        "Within days, we'll introduce you to the right talent for your project. Average time to match is under 24 hours.",
    },
    {
      icon: <img src="/svg/Artboard41.svg" alt="Business Team" />,
      title: "The Right Fit, Guaranteed",
      description:
        "Work with your new team member on a trial basis (pay only if satisfied), ensuring you hire the right people for the job.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#0B8468] mt-16">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Hiring Made Easy
          </h2>
          <p className="text-emerald-100 text-base sm:text-lg max-w-2xl mx-auto">
            Three simple steps to connect with top geological talent
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-4 sm:space-y-6">
            {steps.map((step, index) => (
              <ProcessCard key={index} {...step} />
            ))}
          </div>

          <div className="flex justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-white rounded-full flex items-center justify-center overflow-hidden mx-auto shadow-xl">
                <img
                  src="/images/hiring1.jpg"
                  alt="Business Team"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="absolute top-6 -left-2 sm:top-8 sm:left-4 lg:top-12 lg:left-8 bg-white rounded-xl p-2 sm:p-3 lg:p-4 shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-200">
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-emerald-600 mb-1">
                    500+
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">Companies</p>
                </div>
              </div>

              <div className="absolute bottom-8 -right-2 sm:bottom-12 sm:right-4 lg:bottom-16 lg:right-8 bg-white rounded-xl p-2 sm:p-3 lg:p-4 shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-200">
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-emerald-600 mb-1">
                    300+
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">Job Posted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;
