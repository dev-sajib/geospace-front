import { useParams } from "react-router-dom";

import talentData from "./../../../api/talentData.json";
import DynamicHireTopSection from "../../../components/common/DynamicHireTopSection.jsx";
import HireGeologistLowerSection from "../HireGeologist/HireGeologistLowerSection.jsx";

export default function HireTalentPage() {
  const { role } = useParams();
  const pageData = talentData[role];

  if (!pageData) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Talent Not Found</h1>
        <p className="mt-4">The requested talent category does not exist.</p>
      </div>
    );
  }

  return (
    <>
      <DynamicHireTopSection
        title={pageData.title}
        singularTitle={pageData.singularTitle}
        description={pageData.description}
        freelancers={pageData.topFreelancers}
      />
      <HireGeologistLowerSection />
    </>
  );
}
