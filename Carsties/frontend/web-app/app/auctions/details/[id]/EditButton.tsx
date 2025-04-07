"use client";

import Link from "next/link";
import React from "react";

type Props = {
  id: string;
};

export default function EditButton({ id }: Props) {
  return (
    <Link
      href={`/auctions/update/${id}`}
      className="inline-block px-4 py-2 border border-gray-700 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200"
    >
      Update Auction
    </Link>
  );
}
