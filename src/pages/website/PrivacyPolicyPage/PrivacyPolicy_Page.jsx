import PageHero from "../components/PageHero";
import PrivacyPolicyContent from "../components/PrivacyPolicyContent";

const PrivacyPolicyPage = () => {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="Learn how we collect, use, and protect your personal information when you use our services."
      />

      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <PrivacyPolicyContent />
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
