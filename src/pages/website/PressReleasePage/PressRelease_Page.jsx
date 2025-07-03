import PageHero from "../components/PageHero";
import PressReleaseCard from "../components/PressReleaseCard";

const PressReleasePage = () => {
  const pressReleaseData = {
    title:
      "GeoEspace Corporation Officially Launches USA & Canada's First Platform Dedicated to Freelance Geologists and Miners",
    date: "June 5, 2025",
    location: "Toronto, ON",
    content: `GeoEspace Corporation, a new digital platform revolutionizing the way companies connect with top-tier geoscience talent, has officially launched in Canada. Specializing in geology, mining, environmental sciences, and petroleum, GeoEspace is the first platform to exclusively offer a vetted network of the top 5% of freelancers in the industry.

"We saw a large gap in the recruitment process for geoscience professionals," said Kazomo Yves Beringer Anlabh, Founder and CEO of GeoEspace. "Traditional agencies lack the technical depth and efficiency today's exploration and mining companies need. GeoEspace is here to change that."

GeoEspace is launching in Canada and the USA, with plans to expand globally—aiming to become the world leader in freelance geoscience staffing.`,

    keyFeatures: [
      "Pre-vetted experts through a rigorous first-step certification process",
      "Flexible contract or hourly hiring options",
      "A 1-week risk-free trial for every freelancer",
      "Transparent freelancer reviews based on performance metrics",
      "Seamless project management and payment tools",
      "AI-powered job-freelancer matching",
    ],

    aboutSection: `GeoEspace is a Canadian-based recruitment platform that connects mining and exploration companies with elite freelance professionals in geology, mining, and the environment. Focused on quality, transparency, and innovation, GeoEspace is redefining how talent and opportunity meet in the resource sector.`,

    mediaContact: {
      name: "Kazomo Yves Anlabh",
      title: "Founder & CEO",
      company: "GeoEspace Corporation",
      email: "admin@geoespacec.ca",
      phone: "(514) 321-8238",
      website: "www.geoespacec.ca",
    },
  };

  return (
    <>
      <PageHero
        title="Press Releases"
        description="Official announcements, media updates, and important milestones from our platform."
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <PressReleaseCard {...pressReleaseData} />
        </div>
      </section>
    </>
  );
};

export default PressReleasePage;
