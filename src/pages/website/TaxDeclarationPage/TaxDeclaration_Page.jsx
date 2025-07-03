import PageHero from "../components/PageHero";

const TaxDeclarationPage = () => {
  return (
    <div className="min-h-screen">
      <PageHero
        title="GeoEspace | Professional Tax Declaration Service for Freelancers"
        description="Streamline your tax obligations with confidence. GeoEspace is proud to introduce a comprehensive Tax Declaration Service designed specifically for freelance professionals in geology, mining, and the environmental sectors."
      />

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              About the Service
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              As part of our ongoing mission to support the success and
              compliance of our freelance community, GeoEspace now offers a
              dedicated tax declaration service to assist freelancers in
              preparing and filing their annual income tax returns with Revenu
              Québec and the Canada Revenue Agency (CRA). This service is
              tailored to the unique needs of self-employed professionals
              working in specialized industries. It helps ensure full compliance
              with applicable tax regulations while optimizing potential
              deductions.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Who Is This Service For?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              This service is available to all freelancers registered on the
              GeoEspace platform, including those operating as:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Sole proprietors</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Incorporated individuals</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Self-employed professionals with occasional or consistent
                  contracts
                </span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 mt-6">
              Whether you're new to freelancing or have years of experience, our
              service provides peace of mind and professional support.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Service Features
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Preparation and filing of federal and provincial tax returns
                  (CRA & Revenu Québec)
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Generation of a full income summary report from your GeoEspace
                  earnings
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <span className="text-gray-700">Assistance with:</span>
                  <ul className="mt-2 ml-4 space-y-2">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">
                        Business registration numbers (BN)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">
                        GST/HST and QST registration, where applicable
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">
                        Identification of eligible deductions (e.g., travel,
                        equipment, insurance, training)
                      </span>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Support with bookkeeping and document organization
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Optional follow-up with tax authorities in case of reviews or
                  questions
                </span>
              </li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Service Packages
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">
                      Package
                    </th>
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">
                      Features
                    </th>
                    <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">
                      Price (CAD)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">
                      Basic
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">
                      Annual tax filing (Federal + Provincial), Income summary,
                      Digital document upload
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-900 font-semibold">
                      $120/year
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">
                      Premium
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">
                      Includes Basic features plus: Personalized consultation,
                      Expense optimization, CRA/Revenu Québec follow-up support
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-900 font-semibold">
                      $250/year
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Benefits of Choosing GeoEspace's Tax Service
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Sector-specific expertise in geology and mining freelance work
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Compliance assurance with Canadian and Québec tax laws
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Time-saving support so you can focus on your contracts
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Confidential and secure handling of your financial information
                </span>
              </li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              How to Access the Service
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Go to the Geoespace.ca page, at the bottom of the page search Tax
              Declaration Service, and then contact us by email at:
              Tax@geoespace.ca or by Telephone at (514) 971-8238. From there,
              you can:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Schedule a consultation with a certified tax specialist
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Upload your documents securely
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Track the status of your declaration
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ensure Your Professional Obligations Are Met
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Let GeoEspace help you maintain your compliance and peace of mind.
              Our Tax Declaration Service is one more way we empower freelance
              geologists and mining professionals to succeed—both on the field
              and off.
            </p>
            <p className="text-lg font-semibold text-emerald-600">
              <span className="text-emerald-600">GeoEspace</span> — From
              Exploration to Administration, We've Got You Covered.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaxDeclarationPage;
