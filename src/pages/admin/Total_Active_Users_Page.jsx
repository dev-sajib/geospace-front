import System_Overview from "../../components/dashboard/System_Overview";
import Data_Table from "../../components/dashboard/Data_Table";
import Status_Badge from "../../components/ui/Status_Badge";
import { Eye, Edit } from "lucide-react";

const Total_Active_Users_Page = () => {
  const columns = [
    { Header: "#", accessor: "id" },
    { Header: "Name", accessor: "name" },
    { Header: "Type", accessor: "type" },
    { Header: "Email", accessor: "email" },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ value }) => <Status_Badge status={value} />,
    },
    { Header: "Joined Date", accessor: "joinedDate" },
    { Header: "Last Active", accessor: "lastActive" },
    {
      Header: "Action",
      accessor: "action",
      Cell: () => (
        <div className="flex gap-2">
          <button className="p-1 hover:text-emerald-600">
            <Eye size={18} />
          </button>
          <button className="p-1 hover:text-emerald-600">
            <Edit size={18} />
          </button>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "Lela Medhurst",
      type: "Freelancer",
      email: "lelamedhurst@gmail.com",
      status: "Active",
      joinedDate: "10/10/2025",
      lastActive: "10/10/2025",
    },
    {
      id: 2,
      name: "Company Ltd.",
      type: "Company",
      email: "company@gmail.com",
      status: "Active",
      joinedDate: "10/10/2025",
      lastActive: "10/10/2025",
    },
    {
      id: 3,
      name: "Company Ltd.",
      type: "Company",
      email: "company@gmail.com",
      status: "Active",
      joinedDate: "10/10/2025",
      lastActive: "10/10/2025",
    },
    {
      id: 4,
      name: "Lela Medhurst",
      type: "Freelancer",
      email: "lelamedhurst@gmail.com",
      status: "Inactive",
      joinedDate: "10/10/2025",
      lastActive: "10/10/2025",
    },
    {
      id: 5,
      name: "Lela Medhurst",
      type: "Freelancer",
      email: "lelamedhurst@gmail.com",
      status: "Active",
      joinedDate: "10/10/2025",
      lastActive: "10/10/2025",
    },
    {
      id: 6,
      name: "Lela Medhurst",
      type: "Freelancer",
      email: "lelamedhurst@gmail.com",
      status: "Active",
      joinedDate: "10/10/2025",
      lastActive: "10/10/2025",
    },
  ];

  return (
    <System_Overview pageTitle="Active User">
      <Data_Table columns={columns} data={data} />
    </System_Overview>
  );
};

export default Total_Active_Users_Page;
