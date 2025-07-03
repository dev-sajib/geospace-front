import HireTeamTopSection from "./HireTeamTopSection.jsx";
import HireTeamSecondSection from "./HireTeamSecondSection.jsx";
import HireTeamThirdSection from "./HireTeamThirdSection.jsx";
import HireTeamLowerSection from "./HireTeamLowerSection.jsx";


export default function HireTeam() {
  document.title = "Hire a Team | GeoEspace";
  return (
    <>
      <HireTeamTopSection />
      <HireTeamSecondSection />
      <HireTeamThirdSection />
      <HireTeamLowerSection />
    </>
  );
}
