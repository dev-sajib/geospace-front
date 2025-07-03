import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import partnershipSlides from "../../../api/patrnership.json";
const PartnerLogo = ({name, logo}) => {
    return (
        <div className="partner-card flex flex-col rounded-[20px]">
            {/* Fixed the responsive height classes with !important */}
            <div className="partner-logo-container bg-white rounded-lg flex items-center justify-start mb-2 sm:mb-3 lg:mb-4  transition-colors duration-200 ">
                <img
                    src={logo}
                    alt={name}
                    className="max-h-[200px]   transition-all duration-300"
                />
            </div>

            <div className="text-center sm:text-left">
                <h3 className="g-medium-24 text-gray-900 mb-1 line-clamp-2">
                    {name}
                </h3>
                {/*<p className="text-xs text-gray-500 line-clamp-2">{subtitle}</p>*/}
            </div>
        </div>
    );
};

const Partnerships = () => {


    return (
        <>
            <style jsx>{`
                .custom-pagination {
                    position: static !important;
                    margin-top: 2rem;
                }
                
                .custom-pagination .swiper-pagination-bullet {
                    width: 12px !important;
                    height: 12px !important;
                    background: #E9E9E9 !important;
                    opacity: 1 !important;
                    border-radius: 50% !important;
                    margin: 0 4px !important;
                    transition: all 0.3s ease !important;
                }
                
                .custom-pagination .swiper-pagination-bullet:hover {
                    background: #0B8468 !important;
                }
                
                .custom-pagination .swiper-pagination-bullet-active {
                    width: 60px !important;
                    height: 12px !important;
                    background: #0B8468 !important;
                    border-radius: 6px !important;
                }
                
                /* Tailwind v4 compatible approach */
                .partner-card {
                    min-width: 120px;
                    padding: 40px;
                }
                
                .partner-logo-container {
                    height: 100px; /* Mobile: 100px */
                }
                
                @media (min-width: 640px) {
                    .partner-card {
                        min-width: 160px;
                    }
                }
                
                @media (min-width: 768px) {
                    .partner-card {
                        min-width: 200px;
                    }
                    .partner-logo-container {
                        height: 150px; /* Tablet: 150px */
                    }
                }
                
                @media (min-width: 1024px) {
                    .partner-card {
                        min-width: 260px;
                    }
                    .partner-logo-container {
                        height: 200px; /* Desktop: 200px */
                    }
                }
                
                @media (max-width: 640px) {
                    .custom-pagination {
                        margin-top: 1.5rem;
                    }
                }
            `}</style>

            <section className="p-12 sm:p-16 lg:p-20 bg-white">
                <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="g-h2  text-gray-900 mb-4 sm:mb-6">
                            <span className="text-emerald-600">Collaborations</span> With
                            Leading Brands
                        </h2>
                        <p className="g-p2  text-gray-600 max-w-3xl mx-auto">
                            We collaborate with a number of top-tier companies on imagining the
                            future of work. Have a look.
                        </p>
                    </div>

                    <div className="relative">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={40}
                            slidesPerView={1}
                            loop={false}
                            speed={600}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                el: '.custom-pagination',
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
                                    slidesPerView: 3,
                                },
                            }}
                            className="partnerships-swiper"
                        >
                            {partnershipSlides.map((slide, slideIndex) => (
                                <SwiperSlide key={slideIndex} className="shadow-[2px_5px_45px_rgba(0,0,0,0.03)] mt-[30px] mb-[30px]">
                                    <PartnerLogo {...slide} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="custom-pagination flex justify-center"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Partnerships;
