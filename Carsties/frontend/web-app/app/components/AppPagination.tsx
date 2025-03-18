"use client";

// import { Pagination } from "flowbite-react";
import React, { useState } from "react";

type Props = {
  currentPage: number;
  pageCount: number;
  pageChanged: (page: number) => void;
};

export default function AppPagination({
  currentPage,
  pageCount,
  pageChanged,
}: Props) {
  const prevPage = () => currentPage > 1 && pageChanged(currentPage - 1);
  const nextPage = () =>
    currentPage < pageCount && pageChanged(currentPage + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className="px-3 py-1 text-sm border rounded-md cursor-pointer bg-gray-200 disabled:opacity-50 "
      >
        Prev
      </button>

      {Array.from({ length: pageCount }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => pageChanged(i + 1)}
          className={`px-3 py-1 text-sm border rounded-md cursor-pointer ${
            currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={nextPage}
        disabled={currentPage === pageCount}
        className="px-3 py-1 text-sm border rounded-md cursor-pointer bg-gray-200 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
