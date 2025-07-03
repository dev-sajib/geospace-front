import services from "./../../../api/services.json"
import freelancers from './../../../api/team.json'
import {TabComponent} from "../../../components/common/TabComponent.jsx";
import {FreelancerCard} from "../../../components/common/FreelancerCard.jsx";
const DiscoveryCard = () => {
    return (
        <div className="bg-[#0B8468] text-white rounded-xl p-6 sm:p-8 flex flex-col justify-center h-full min-h-[280px]">
            <div className="text-center">
                <img
                    src="/images/bulb-1.svg"
                    alt="Lightbulb"
                    className="w-[200px] h-[200px] object-contain mx-auto mb-6"
                    style={{ borderRadius: "131px" }}
                />

                <div
                    className="w-[224px] h-[144px] mx-auto"
                    style={{
                        fontFamily: "Poppins",
                        fontWeight: 600,
                        fontSize: "24px",
                        lineHeight: "150%",
                        letterSpacing: "0%",
                        textAlign: "center",
                    }}
                >
                    <h3 className="font-bold mb-2">Discover 50,000+</h3>
                    <h4 className="font-semibold mb-1">More Talent</h4>
                    <p>in the GeoEspace Network</p>
                </div>
            </div>
        </div>
    );
};

const FreelancerFilter = () => {
    const tabsData = services
    // Group freelancers by servicesID
    const groupedFreelancers = freelancers.reduce((acc, freelancer) => {
        if (!acc[freelancer.servicesID]) {
            acc[freelancer.servicesID] = [];
        }
        acc[freelancer.servicesID].push(freelancer);
        return acc;
    }, {});


    return (
        <section className="pt-[240px] bg-white">
            <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="g-h2 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                        <span className="text-emerald-600">Meet Talent</span> in Our Network
                    </h2>
                </div>
                <TabComponent
                    tabs={tabsData}
                    defaultTabClassName={'flex items-center space-x-1 sm:space-x-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg  g-16 leading-[150%] font-normal transition-all duration-200 whitespace-nowrap flex-shrink-0'}
                    inactiveTabClassName={"bg-white"}
                >
                    {/* Generate tab content for each service category */}
                    {Object.entries(groupedFreelancers).map(([serviceId, freelancersList]) => (
                        <div key={serviceId} tab-id={serviceId} className="p-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                                {freelancersList.map((freelancer, index) => (
                                    <FreelancerCard
                                        key={index}
                                        {...freelancer}
                                    />
                                    ))}
                                <DiscoveryCard />
                            </div>
                        </div>
                    ))}
                </TabComponent>

            </div>
        </section>
    );
};

export default FreelancerFilter;
