
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialCard = ({ quote, author, position, company, rating }) => {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 h-full">
      <div className="text-4xl sm:text-5xl lg:text-6xl text-emerald-400 font-serif mb-3 sm:mb-4">
        <img src="/SVG/quotation.svg" alt=""  className="h-[32px]"/>
      </div>

      <span className="text-gray-700 text-[18px]  pb-[24px] block">
        {quote}
      </span>

      <div className="flex items-center mb-3 sm:mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`w-3 h-3 sm:w-4 sm:h-4 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="border-t border-gray-200 pt-3 sm:pt-4">
        <p className="font-semibold text-gray-900 text-xs sm:text-sm">
          {author}
        </p>
        <p className="text-gray-600 text-xs sm:text-sm">{position}</p>
        <div className="mt-1 sm:mt-2">
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
            {company}
          </p>
        </div>
      </div>
    </div>
  );
};

const ClientSatisfaction = ({
  title = "Our Clients' Satisfaction is Our Top Priority",
  subtitle = "We have a reputation for helping clients around the world find success on their most important projects",
  bgColor = "bg-white",
}) => {
  const testimonials = [
    {
      quote:
        "I have been working with Geoespace for several years now, partnering with their talented miners and geologists. The professionals they provide are exceptionally skilled, highly reliable, and truly committed to the success of our projects. They seamlessly integrate into our teams, bringing both technical expertise and excellent communication to the table. Geoespace’s dedication to delivering top-tier talent has made them an invaluable partner, and their level of professionalism makes collaboration effortless and efficient.",
      author: "Ian Stokes-Rees",
      position: "Partner",
      company: "Teck",
      rating: 4,
    },
    {
      quote:
        "I have been working with Geoespace for several years now, partnering with their talented miners and geologists. The professionals they provide are exceptionally skilled, highly reliable, and truly committed to the success of our projects. They seamlessly integrate into our teams, bringing both technical expertise and excellent communication to the table. Geoespace's dedication to delivering top-tier talent has made them an invaluable partner, and their level of professionalism makes collaboration effortless and efficient.",
      author: "Tess Caputo",
      position: "Chief Operations Officer",
      company: "Forbes",
      rating: 4,
    },
    {
      quote:
        "I have been working with Geoespace for several years now, partnering with their talented miners and geologists. The professionals they provide are exceptionally skilled, highly reliable, and truly committed to the success of our projects. They seamlessly integrate into our teams, bringing both technical expertise and excellent communication to the table. Geoespace's dedication to delivering top-tier talent has made them an invaluable partner, and their level of professionalism makes collaboration effortless and efficient.",
      author: "Tess Caputo",
      position: "Chief Operations Officer",
      company: "Forbes",
      rating: 5,
    },
    {
      quote:
        "I have been working with Geoespace for several years now, partnering with their talented miners and geologists. The professionals they provide are exceptionally skilled, highly reliable, and truly committed to the success of our projects. They seamlessly integrate into our teams, bringing both technical expertise and excellent communication to the table. Geoespace's dedication to delivering top-tier talent has made them an invaluable partner, and their level of professionalism makes collaboration effortless and efficient.",
      author: "Tess Caputo",
      position: "Chief Operations Officer",
      company: "Forbes",
      rating: 5,
    },
  ];

  return (
    <section className={` g-pb-140 g-pt-140 ${bgColor}`}>
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="g-h2 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            {title.includes("Satisfaction") ? (
              <>
                Our Clients'{" "}
                <span className="text-emerald-600">Satisfaction</span> is Our
                Top Priority
              </>
            ) : (
              <>
                Hear From <span className="text-emerald-600">Our Clients</span>
              </>
            )}
          </h2>
          <p className="g-p2 text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-[20px] lg:rounded-[20px] p-8 lg:p-[40px] relative overflow-hidden">
          
        <div className="relative" >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            speed={600}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white border border-emerald-600 hover:text-white hover:bg-emerald-600 rounded-full items-center justify-center  transition-all duration-200 shadow-sm">
            <FaChevronLeft className="" />
          </button>

          <button className="swiper-button-next-custom hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white border border-emerald-600 hover:bg-emerald-600 rounded-full items-center justify-center hover:text-white transition-all duration-200 shadow-sm">
            <FaChevronRight className="" />
          </button>

          {/* Mobile Navigation */}
          <div className="flex justify-center space-x-4 mt-6 sm:hidden">
            <button className="swiper-button-prev-custom flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-full transition-all duration-200 shadow-sm hover:bg-gray-50">
              <FaChevronLeft className="w-4 h-4 text-emerald-600" />
            </button>
            <button className="swiper-button-next-custom flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-full transition-all duration-200 shadow-sm hover:bg-gray-50">
              <FaChevronRight className="w-4 h-4 text-emerald-600" />
            </button>
          </div>
        </div>
        </div>

      </div>

      <style jsx>{`
        .testimonial-swiper {
          padding: 0 60px;
        }
        
        @media (max-width: 640px) {
          .testimonial-swiper {
            padding: 0;
          }
        }

        .testimonial-swiper .swiper-pagination {
          position: static;
          margin-top: 2rem;
        }

        .swiper-pagination-bullet-custom {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          border-radius: 50%;
          opacity: 1;
          margin: 0 4px;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .swiper-pagination-bullet-active-custom {
          background: #0B8468;
          transform: scale(1.2);
        }

        @media (min-width: 640px) {
          .testimonial-swiper .swiper-pagination {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientSatisfaction;
