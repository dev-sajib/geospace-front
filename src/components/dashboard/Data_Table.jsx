import React, { useState, useMemo, useRef, useEffect } from "react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";

const Data_Table = ({ columns, data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [showFilters, setShowFilters] = useState(false);
  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilters(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm]);

  const totalPages =
    itemsPerPage > 0 ? Math.ceil(filteredData.length / itemsPerPage) : 1;
  const paginatedData = useMemo(() => {
    if (itemsPerPage === -1) return filteredData;
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  const handleExport = () => {};

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <div className="relative w-full md:w-auto">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="w-full md:w-80 bg-[#F4F4F4] pl-12 pr-4 py-2 border border-transparent rounded-full focus:outline-none focus:ring-1 focus:ring-emerald-500 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full hover:bg-gray-50 text-sm font-medium"
          >
            <img src="/images/export.png" alt="Export" className="w-4 h-4" />
            Export
          </button>
          <div className="relative" ref={filterRef}>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full hover:bg-gray-50 text-sm font-medium"
            >
              <Filter size={16} className="text-gray-600" />
              Filters
            </button>
            {showFilters && (
              <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-lg shadow-xl border p-4 z-10">
                <p className="font-semibold mb-4">Filter By</p>
                <div className="space-y-4">
                  <select className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none">
                    <option>Freelancer</option>
                  </select>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none"
                  />
                  <select className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none">
                    <option>Month</option>
                  </select>
                  <select className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none">
                    <option>Year</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-work-sans">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((col) => (
                  <th
                    key={col.accessor}
                    className="p-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                  >
                    {col.Header}
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        </div>
        <div
          className="overflow-auto"
          style={{ height: "calc(100vh - 480px)" }}
        >
          <table className="w-full text-left font-work-sans">
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedData.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-50">
                  {columns.map((col, colIndex) => (
                    <td
                      key={col.accessor}
                      className={`p-3 text-sm text-gray-800 whitespace-nowrap ${
                        colIndex === 0 ? "w-12 text-center" : ""
                      }`}
                    >
                      {col.Cell
                        ? col.Cell({ value: row[col.accessor], rowData: row })
                        : row[col.accessor]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2 text-sm">
          <span>Rows per page:</span>
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="p-1 border rounded-md"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={-1}>All</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </p>
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 border rounded-md disabled:opacity-50 hover:bg-gray-100"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 border rounded-md disabled:opacity-50 hover:bg-gray-100"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Data_Table;
