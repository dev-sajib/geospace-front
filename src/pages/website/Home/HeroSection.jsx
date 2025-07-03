import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import freelancers from "./../../../api/team.json";
import {LogoCarousel} from "../../../components/common/LogoCarousel.jsx";

const HeroSection = ({activeSlideIndex}) => {
    const activeFreelancer = freelancers[activeSlideIndex] || freelancers[0];
    console.log(activeFreelancer)

    return (
        <>
            <section className="" style={{backgroundColor: "#e7f3f0"}}>
                <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end min-h-[500px] lg:min-h-[600px]">
                        <div
                            className="py-12 sm:py-16 lg:py-20 text-center lg:text-left order-2 lg:order-1 max-w-[634px]">
                            <h1 className="g-h1 sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 leading-tight mb-4 sm:mb-6">
                                Hire the Top 5% of Freelance Experts in the field
                            </h1>
                            <p className="g-16 text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                GeoEspace is the exclusive No. 1 workspace for the top freelance
                                geologists and miners in the world. Leading companies in geology
                                and mining hire GeoEspace professionals for their most critical
                                projects. GeoEspace recruits only the top 5% of elite
                                professionals, ensuring that companies have access to the best
                                talent for their exploration, mining, and environmental needs.
                            </p>
                            <button
                                className="g-title bg-[#0B8468] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#085E4A] transition-all duration-200 transform  shadow-lg hover:shadow-xl">
                                Hire Freelancer
                            </button>
                        </div>

                        <div
                            className=" hidden lg:block h-full pt-12 pt-12 sm:pt-16 lg:pt-20  w-full max-w-full justify-end items-end flex order-1 lg:order-2 py-8 lg:py-0">
                            <div className="relative h-full flex items-end ">
                                <div
                                    className="relative flex justify-center items-end h-full"
                                >
                                    <img
                                        src={activeFreelancer.image}
                                        alt="Professional Miner"
                                        className=" "
                                    />
                                </div>
                                <div className="absolute bottom-48 right-4 sm:bottom-56 sm:right-6  lg:right-8 top-0">
                                    <div
                                        className="rounded-xl p-[20px]  pb-[23px] pt-[23px] w-[319px] h-[273px] transform hover:scale-105 transition-transform duration-200"
                                        style={{
                                            background: 'url("/images/Vector12.svg")',
                                            backgroundSize: "contain",
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                        }}
                                    >
                                        <img
                                            src="/images/map.png"
                                            className="w-full pb-[8px]"
                                        />
                                        <div className="pb-[6px]">
                                            <h3 className="g-title text-emerald-600">
                                                {activeFreelancer.name}
                                            </h3>
                                            <p className="text-[#808080] g-15">
                                                {activeFreelancer.role}
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            <div
                                                className="flex items-center bg-[#E9FCE9] pt-[2px] pb-[2px] pl-[4px] pr-[4px] rounded-[4px]">
                                                <img src="/images/image 6.svg" alt={'mining'}/>
                                                <div
                                                    className="g-15 font-poppins font-normal leading-none tracking-normal"
                                                    style={{color: "#21DC1E"}}
                                                >
                                                    Verified Expert in {activeFreelancer.serviceCategory.split(' ')[0]}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 sm:py-12" style={{backgroundColor: "#f4f4f4"}}>
                <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="g-24 text-gray-600 mb-8 sm:mb-12 text-center">
                        Trusted By Leading Brands and Start Ups
                    </p>

                    <div className="relative group">
                        <LogoCarousel/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
