import Stat_Card from "../../components/dashboard/Stat_Card";

const Admin_Dashboard_Page = () => {
  const stats = [
    { title: "Total Active Users", value: "03", icon: <span>👥</span> },
    { title: "Contracts in Progress", value: "1092$", icon: <span>💰</span> },
    { title: "Pending Timesheets", value: "10", icon: <span>🕒</span> },
    { title: "Dispute Tickets", value: "10", icon: <span>🎟️</span> },
    { title: "Platform Metrics", value: "10", icon: <span>📊</span> },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">System Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {stats.map((stat) => (
          <Stat_Card key={stat.title} {...stat} />
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Active User</h2>
        <p>Data table will be here...</p>
      </div>
    </div>
  );
};

export default Admin_Dashboard_Page;
