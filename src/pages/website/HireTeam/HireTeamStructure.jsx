import {TeamMemberCard} from "../../../components/common/TeamMemberCard.jsx";

export default function HireTeamStructure() {
  const team = [
    {
      image: "/images/TeamMemberOne.png",
      name: "Zane Sorell",
      role: "CEO",
      description: "Enjoys adventurous travel, seeks new.",
      icons: [
        "/images/facebook.png",
        "/images/github.png",
        "/images/linkedin.png",
      ],
    },
    {
      image: "/images/TeamMemberTwo.png",
      name: "Zane Sorell",
      role: "CEO",
      description: "Enjoys adventurous travel, seeks new.",
      icons: [
        "/images/facebook.png",
        "/images/github.png",
        "/images/linkedin.png",
      ],
    },
    {
      image: "/images/TeamMemberTwo.png",
      name: "Zane Sorell",
      role: "CEO",
      description: "Enjoys adventurous travel, seeks new.",
      icons: [
        "/images/facebook.png",
        "/images/github.png",
        "/images/linkedin.png",
      ],
    },
    {
      image: "/images/TeamMemberOne.png",
      name: "Zane Sorell",
      role: "CEO",
      description: "Enjoys adventurous travel, seeks new.",
      icons: [
        "/images/facebook.png",
        "/images/github.png",
        "/images/linkedin.png",
      ],
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center pt-10 pb-6">
      <div className="flex flex-col items-center px-4 py-2 bg-transparent text-white relative z-10">
        <div className="w-[120px] h-[120px] border-2 border-white rounded-[16px] bg-[#3C9D86] flex items-center justify-center p-[24px]">
          <img
            src="/images/userIcon.png"
            alt="Manager"
            className="w-7 h-7 object-contain"
          />
        </div>
        <div className="w-[130px] h-[34px] mt-2 rounded-[8px] border border-white bg-[#085E4A] px-[12px] py-[8px] flex items-center justify-center">
          <p className="text-white font-medium text-[12px] leading-[140%] font-poppins text-center">
            Managed by You
          </p>
        </div>
      </div>

      <div className="absolute top-[175px] left-1/2 -translate-x-1/2 w-px h-[260px] bg-white/60"></div>
      <div className="absolute top-[300px] left-1/2 -translate-x-1/2 w-[180px] h-px bg-white/60"></div>
      <div className="absolute top-[435px] left-1/2 -translate-x-1/2 w-[180px] h-px bg-white/60"></div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 relative z-10">
        {team.map((member, index) => (
          <div key={index} className="flex justify-center">
            <TeamMemberCard {...member} />
          </div>
        ))}
      </div>
    </div>
  );
}
