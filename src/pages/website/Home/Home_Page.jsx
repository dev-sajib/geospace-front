import FreelancerCarousel from "../../../components/common/FreelancerCarousel";
import ClientSatisfaction from "./ClientSatisfaction";
import FreelancerFilter from "./FreelancerFilter";
import HeroSection from "./HeroSection";
import HiringProcess from "./HiringProcess";
import OnDemandTeams from "./OnDemandTeams";
import Partnerships from "./Partnerships";
import Testimonial from "./Testimonial";
import ValueProposition from "./ValueProposition";
import WhyChoose from "./WhyChoose";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FreelancerCarousel />
      <ValueProposition />
      <OnDemandTeams />
      <FreelancerFilter />
      <HiringProcess />
      <WhyChoose />
      <Partnerships />
      <Testimonial />
      <ClientSatisfaction />
    </>
  );
};

export default HomePage;
