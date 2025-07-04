import React from "react";
import Stat_Card from "../ui/Stat_Card";

const System_Overview = ({ pageTitle, children }) => {
  const statsData = [
    {
      title: "Total Active Users",
      value: "03",
      icon: "/images/Active_Users.png",
      gradient: "linear-gradient(107.28deg, #D5EFE9 7.58%, #FFFFFF 93.84%)",
      borderColor: "#B3D9D0",
    },
    {
      title: "Contracts in Progress",
      value: "1092$",
      icon: "/images/Contracts_In_Progress.png",
      gradient: "linear-gradient(107.23deg, #FFF6DA 5.61%, #FFFFFF 95.68%)",
      borderColor: "#FBE38C",
    },
    {
      title: "Pending Timesheets",
      value: "10",
      icon: "/images/Pending_Timesheets.png",
      gradient: "linear-gradient(107.13deg, #E4E4FF 3.4%, #FFFFFF 95.48%)",
      borderColor: "#CCCCFF",
    },
    {
      title: "Dispute Tickets",
      value: "10",
      icon: "/images/Dispute_Tickets.png",
      gradient: "linear-gradient(108.03deg, #DAFFDD 15.09%, #FFFFFF 87.93%)",
      borderColor: "#97FFAD",
    },
    {
      title: "Platform Metrics",
      value: "10",
      icon: "/images/Platform_Metrics.png",
      gradient: "linear-gradient(108.03deg, #D3ECFF 15.09%, #FFFFFF 87.93%)",
      borderColor: "#AADBFF",
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        System Overview
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
        {statsData.map((stat) => (
          <Stat_Card key={stat.title} {...stat} />
        ))}
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {pageTitle}
        </h2>
        {children}
      </div>
    </>
  );
};

export default System_Overview;
