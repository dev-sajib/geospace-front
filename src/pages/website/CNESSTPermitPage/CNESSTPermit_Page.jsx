import PageHero from "../components/PageHero";

const CNESSTPermitPage = () => {
  return (
    <>
      <PageHero
        title="CNESST Permit Authorization"
        description="Geoespacec is fully compliant with the regulations of the Commission des normes, de l'équité, de la santé et de la sécurité du travail (CNESST). Below is our official CNESST permit confirming our authorization and legal compliance for operating in Quebec, Canada."
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-4xl">
                <img
                  src="/images/image-cnest.png"
                  alt="CNESST Permit - Agence de Placement de Personnel - Geoespacec Corporation - Permit Number: AP-2403995"
                  className="w-full h-auto rounded-lg shadow-md border border-gray-200"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">!</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-amber-800 text-sm leading-relaxed">
                        We have a reputation for helping clients around the
                        world find success on their most important projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CNESSTPermitPage;
