import PageHero from "../../../components/layout/Page_Hero.jsx";
import ClientVideoCard from "../../../components/common/ClientVideoCard.jsx";
import ClientLogos from "../../../components/common/ClientLogos.jsx";
import ClientSatisfaction from "../Home/ClientSatisfaction.jsx";

const ClientsPage = () => {
  const versityClients = [
    {
      title: "UQAM Case Study",
      companyName: "UQAM",
      imageSrc:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=225&fit=crop",
    },
    {
      title: "McGill Case Study",
      companyName: "McGill",
      imageSrc:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=225&fit=crop",
    },
  ];

  const allClients = [
    {
      title: "UQAM Project",
      companyName: "UQAM",
      imageSrc:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=225&fit=crop",
    },
    {
      title: "AEIQ Partnership",
      companyName: "AEIQ",
      imageSrc:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=225&fit=crop",
    },
    {
      title: "CNESST Collaboration",
      companyName: "CNESST",
      imageSrc:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=225&fit=crop",
    },
    {
      title: "AEIQ Project 2",
      companyName: "AEIQ",
      imageSrc:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=225&fit=crop",
    },
    {
      title: "UQAM Research",
      companyName: "UQAM",
      imageSrc:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=225&fit=crop",
    },
    {
      title: "CNESST Study",
      companyName: "CNESST",
      imageSrc:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=225&fit=crop",
    },
  ];

  const enterpriseClients = [
    {
      title: "McGill Enterprise",
      companyName: "McGill",
      imageSrc:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=225&fit=crop",
    },
    {
      title: "UQAM Enterprise",
      companyName: "UQAM",
      imageSrc:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=225&fit=crop",
    },
  ];

  return (
    <>
      <PageHero
        title="Our Clients"
        description="GeoEspace connects top-tier digital talent from the mining industry — from fast-growing startups to grocery recognized enterprises. We empower mining professionals and help projects that drive innovation and discovery."
      />

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured</h2>
            <h3 className="text-2xl font-semibold text-emerald-600">
              Versity Clients
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {versityClients.map((client, index) => (
              <ClientVideoCard
                key={index}
                title={client.title}
                imageSrc={client.imageSrc}
                companyName={client.companyName}
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {allClients.map((client, index) => (
              <ClientVideoCard
                key={index}
                title={client.title}
                imageSrc={client.imageSrc}
                companyName={client.companyName}
              />
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured</h2>
            <h3 className="text-2xl font-semibold text-emerald-600">
              Enterprise Clients
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {enterpriseClients.map((client, index) => (
              <ClientVideoCard
                key={index}
                title={client.title}
                imageSrc={client.imageSrc}
                companyName={client.companyName}
              />
            ))}
          </div>
        </div>
      </section>

      <ClientLogos />
      <ClientSatisfaction
        title="Hear From Our Clients"
        subtitle="Real stories from brands and freelancers who've grown with us."
        bgColor="bg-gray-50"
      />
    </>
  );
};

export default ClientsPage;
