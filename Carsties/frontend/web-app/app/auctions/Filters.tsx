import React from "react";

type Props = {
  pageSize: number;
  setPageSize: (size: number) => void;
};

const pageSizeButtons = [4, 8, 12];

export default function Filters({ pageSize, setPageSize }: Props) {
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <span className="uppercase text-sm text-gray-500 mr-2">Page size</span>
        <div className="inline-flex border rounded-md overflow-hidden">
          {pageSizeButtons.map((value, i) => (
            <button
              key={i}
              onClick={() => setPageSize(value)}
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
