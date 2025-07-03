import PageHero from "../components/PageHero";
import TermsConditionsContent from "../components/TermsConditionsContent";

const TermsConditionsPage = () => {
  return (
    <>
      <PageHero
        title="GeoEspace Terms and Conditions of Use"
        description="Please read these terms and conditions carefully before using our services. By accessing or using our platform, you agree to be bound by these terms."
      />

      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <TermsConditionsContent />
        </div>
      </section>
    </>
  );
};

export default TermsConditionsPage;
