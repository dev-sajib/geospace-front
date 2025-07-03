import { useState } from "react";
import HeroSection from "./HeroSection.jsx";
import FreelancerCarousel from "../../../components/common/FreelancerCarousel.jsx";
import ValueProposition from "./ValueProposition.jsx";
import OnDemandTeams from "./OnDemandTeams.jsx";
import FreelancerFilter from "./FreelancerFilter.jsx";
import HiringProcess from "./HiringProcess.jsx";
import WhyChoose from "./WhyChoose.jsx";
import Partnerships from "./Partnerships.jsx";
import Testimonial from "./Testimonial.jsx";
import ClientSatisfaction from "./ClientSatisfaction.jsx";



const HomePage = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    return (<>
        <HeroSection activeSlideIndex={activeSlideIndex}/>
        <FreelancerCarousel activeSlideIndex={activeSlideIndex}
                            setActiveSlideIndex={setActiveSlideIndex}/>
        <ValueProposition/>
        <OnDemandTeams/>
        <FreelancerFilter/>
        <HiringProcess/>
        <WhyChoose/>
        <Partnerships/>
        <Testimonial/>
        <ClientSatisfaction/>
    </>);
};

export default HomePage;
