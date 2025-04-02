import React from "react";

import { useParamsStore } from "@/hooks/useParamsStore";
import { AiOutlineClockCircle, AiOutlineSortAscending } from "react-icons/ai";
import { BsFillStopCircleFill, BsStopwatchFill } from "react-icons/bs";
import { GiFinishLine, GiFlame } from "react-icons/gi";

const pageSizeButtons = [4, 8, 12];

const orderButtons = [
  {
    label: "Alphabetical",
    icon: AiOutlineSortAscending,
    value: "make",
  },
  {
    label: "End date",
    icon: AiOutlineClockCircle,
    value: "endingDate",
  },
  {
    label: "Recently added",
    icon: BsFillStopCircleFill,
    value: "new",
  },
];

const filterButtons = [
  {
    label: "Live Auctions",
    icon: GiFlame,
    value: "live",
  },
  {
    label: "Ending < 6 hours",
    icon: GiFinishLine,
    value: "endingSoon",
  },
  {
    label: "Completed",
    icon: BsStopwatchFill,
    value: "finished",
  },
];

export default function Filters() {
  const pageSize = useParamsStore((state) => state.pageSize);
  const setParams = useParamsStore((state) => state.setParams);
  const orderBy = useParamsStore((state) => state.orderBy);
  const filterBy = useParamsStore((state) => state.filterBy);

  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <span className="uppercase text-sm text-gray-500 mr-2">Filter by</span>
        <div className="inline-flex border rounded-md overflow-hidden">
          {filterButtons.map(({ label, icon: Icon, value }) => (
            <button
              key={value}
              onClick={() => setParams({ filterBy: value })}
              className={`px-4 py-2 flex items-center text-sm font-medium ${
                filterBy === value
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } border-r last:border-r-0`}
            >
              <Icon className="mr-2 h-4 w-4" />
              {label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <span className="uppercase text-sm text-gray-500 mr-2">Order by</span>
        <div className="inline-flex border rounded-md overflow-hidden">
          {orderButtons.map(({ label, icon: Icon, value }) => (
            <button
              key={value}
              onClick={() => setParams({ orderBy: value })}
              className={`px-4 py-2 flex items-center text-sm font-medium ${
                orderBy === value
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } border-r last:border-r-0`}
            >
              <Icon className="mr-2 h-4 w-4" />
              {label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <span className="uppercase text-sm text-gray-500 mr-2">Page size</span>
        <div className="inline-flex border rounded-md overflow-hidden">
          {pageSizeButtons.map((value, i) => (
            <button
              key={i}
              onClick={() => setParams({ pageSize: value })}
              className={`px-3 py-1 text-sm border-r last:border-0 focus:ring-0 ${
                pageSize === value
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              } cursor-pointer`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
