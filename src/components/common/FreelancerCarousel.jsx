import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import freelancers from "../../api/team.json";
import { FreelancerCard } from "./FreelancerCard";

export const FreelancerCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="pt-[140px] bg-white freelancer-carousel">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="slider-wrapper relative">
          <div className="w-full flex justify-between space-x-3 mb-4 absolute top-1/2">
            <button
              ref={prevRef}
              className=" hover:text-white text-emerald-600 flex items-center justify-center w-10 h-10  border border-emerald-600 rounded-full transition-all duration-200 shadow-sm hover:bg-emerald-600 cursor-pointer"
            >
              <FaChevronLeft className="w-4 h-4 " />
            </button>
            <button
              ref={nextRef}
              className=" hover:text-white text-emerald-600 flex items-center justify-center w-10 h-10  border border-emerald-600 rounded-full transition-all duration-200 shadow-sm hover:bg-emerald-600 cursor-pointer"
            >
              <FaChevronRight className="w-4 h-4 " />
            </button>
          </div>
          <div style={{ padding: "0 50px" }}>
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              loop={true}
              speed={600}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                480: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
            >
              {freelancers.map((freelancer, index) => (
                <SwiperSlide
                  key={index}
                  className={"pt-[40px] pb-[40px] pl-[10px] pr-[10px]"}
                >
                  <FreelancerCard
                    {...freelancer}
                    isActive={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelancerCarousel;
