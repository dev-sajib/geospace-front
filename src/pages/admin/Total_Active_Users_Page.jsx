import React from "react";
import System_Overview from "../../components/dashboard/System_Overview";
import Data_Table from "../../components/dashboard/Data_Table";
import Status_Badge from "../../components/ui/Status_Badge";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";

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
        <div className="flex gap-0">
          <Tooltip title="View">
            <IconButton size="small">
              <VisibilityIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton size="small">
              <EditIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Tooltip>
        </div>
      ),
    },
  ];

  const data = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: i % 3 === 0 ? "Company Ltd." : "Lela Medhurst",
    type: i % 3 === 0 ? "Company" : "Freelancer",
    email: i % 3 === 0 ? "company@gmail.com" : "lelamedhurst@gmail.com",
    status: i % 4 === 0 ? "Inactive" : "Active",
    joinedDate: "10/10/2025",
    lastActive: "10/10/2025",
  }));

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <System_Overview pageTitle="Active User">
          <Data_Table columns={columns} data={data} />
        </System_Overview>
      </div>
    </div>
  );
};

export default Total_Active_Users_Page;
