import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const FreelancerCard = ({
  name,
  serviceCategory,
  role,
  previousCompany,
  companyName,
  image,
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {name}
        </h3>

        <div className="flex items-center mb-3">
          <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2 flex-shrink-0"></div>
          <span className="text-xs sm:text-sm text-emerald-600 font-medium line-clamp-2">
            {serviceCategory}
          </span>
        </div>

        <p className="text-gray-600 mb-4 text-sm sm:text-base line-clamp-2 flex-grow">
          {role}
        </p>

        <div className="text-xs sm:text-sm text-gray-500 mt-auto">
          <p className="mb-1 font-medium">PREVIOUSLY AT</p>
          <p className="font-medium text-gray-700 line-clamp-2">
            <strong>{previousCompany}</strong> {companyName}
          </p>
        </div>
      </div>
    </div>
  );
};

const FreelancerGrid = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const [gapSize, setGapSize] = useState(24);

  const freelancers = [
    {
      name: "Ric Saltzman",
      serviceCategory: "Mining",
      role: "Coal Miner",
      previousCompany: "Teck",
      companyName: "Teck Resources Limited",
      image: "/images/team3.jpg",
    },
    {
      name: "Maria Rodriguez",
      serviceCategory: "Geology",
      role: "Senior Geologist",
      previousCompany: "Barrick",
      companyName: "Barrick Gold Corporation",
      image: "/images/team4.jpg",
    },
    {
      name: "Henery Marcel",
      serviceCategory: "Mining",
      role: "Mining Engineer",
      previousCompany: "Vale",
      companyName: "Vale S.A.",
      image: "/images/team5.jpg",
    },
    {
      name: "Sarah Johnson",
      serviceCategory: "Environmental",
      role: "Environmental Specialist",
      previousCompany: "Newmont",
      companyName: "Newmont Corporation",
      image: "/images/team3.jpg",
    },
    {
      name: "David Chen",
      serviceCategory: "Drilling",
      role: "Professional Driller",
      previousCompany: "Rio Tinto",
      companyName: "Rio Tinto Group",
      image: "/images/team4.jpg",
    },
  ];

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
        setGapSize(16);
      } else if (window.innerWidth < 768) {
        setCardsToShow(2);
        setGapSize(20);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(3);
        setGapSize(24);
      } else {
        setCardsToShow(4);
        setGapSize(24);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const maxSlide = Math.max(0, freelancers.length - cardsToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < maxSlide) {
      nextSlide();
    }
    if (isRightSwipe && currentSlide > 0) {
      prevSlide();
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="g-h2 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Top Freelancers in Geoscience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Connect with verified experts in mining, geology, and environmental
            sciences
          </p>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white border border-gray-200 rounded-full items-center justify-center transition-all duration-200 shadow-sm ${
              currentSlide === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50 hover:shadow-md cursor-pointer"
            }`}
          >
            <FaChevronLeft className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-600" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === maxSlide}
            className={`hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white border border-gray-200 rounded-full items-center justify-center transition-all duration-200 shadow-sm ${
              currentSlide === maxSlide
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50 hover:shadow-md cursor-pointer"
            }`}
          >
            <FaChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-600" />
          </button>

          <div className="overflow-hidden mx-0 sm:mx-12 lg:mx-16">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / cardsToShow)
                }%)`,
                gap: `${gapSize}px`,
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {freelancers.map((freelancer, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{
                    width:
                      cardsToShow === 1
                        ? "100%"
                        : `calc((100% - ${
                            (cardsToShow - 1) * gapSize
                          }px) / ${cardsToShow})`,
                  }}
                >
                  <FreelancerCard {...freelancer} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2 sm:hidden">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  currentSlide === index
                    ? "bg-[#0B8468]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <div className="flex justify-center space-x-4 mt-6 sm:hidden">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-full transition-all duration-200 shadow-sm ${
                currentSlide === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-50 cursor-pointer"
              }`}
            >
              <FaChevronLeft className="w-4 h-4 text-emerald-600" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === maxSlide}
              className={`flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-full transition-all duration-200 shadow-sm ${
                currentSlide === maxSlide
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-50 cursor-pointer"
              }`}
            >
              <FaChevronRight className="w-4 h-4 text-emerald-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelancerGrid;
