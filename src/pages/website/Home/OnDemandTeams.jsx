import freelancers from "../../../api/team.json";
import { FreelancerCard } from "../../../components/common/FreelancerCard";

const OnDemandTeams = () => {
  return (
    <section className="pt-[140px] bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="g-h2 text-[48px] sm:text-[48px] lg:text-[48px] font-medium text-gray-900 mb-3 sm:mb-4">
            Build <span className="text-emerald-600">Amazing Teams</span>, On
            Demand.
          </h2>
          <p className="g-p2 text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Quickly assemble the teams you need, exactly when you need them.
            Whether you need a few specialists or a full team, we connect you
            with top-tier talent in a flash.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            <div>
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <img src="/svg/Search-Status.svg" alt="Business Team" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-emerald-600 mb-3">
                Hire Quickly
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Hire in under 24 hours—no hassle, no delays. Scale up or down
                with flexibility, choosing from hourly, part-time, or full-time
                engagements. It's fast, simple, and built to adapt to your
                needs.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <img src="/svg/Brifecase Tick.svg" alt="Business Team" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-emerald-600 mb-3">
                The Top 5%
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We handpick only the best. Every applicant to our network
                undergoes rigorous testing and vetting to ensure they meet the
                highest standards. Our selective process leads to a 98%
                trial-to-hire success rate, ensuring you get top-tier
                professionals every time.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <img src="/svg/icon.svg" alt="Business Team" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Leading the Future of Work
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We're preparing you for tomorrow's business challenges.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <img src="/svg/Chart-4.svg" alt="Business Team" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-emerald-600 mb-3">
                A Level Above
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Integrity, professionalism, and communication—these aren't just
                buzzwords; they're a commitment. Every freelancer in our global
                network embodies the highest standards in everything they do, so
                you can be confident in your team's performance and reliability.
              </p>
            </div>
          </div>

          <div className="relative w-full lg:min-h-[400px] xl:min-h-[500px] h-full flex items-center justify-center bg-white">
            <div className="hidden lg:flex relative w-full h-full ">
              <div className="flex items-end">
                <FreelancerCard
                  {...freelancers[0]}
                  enableBorderOnHover={false}
                  enableOverlayOnHover={true}
                />
              </div>
              <div className="flex items-start">
                <FreelancerCard
                  {...freelancers[1]}
                  enableBorderOnHover={false}
                  enableOverlayOnHover={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnDemandTeams;
