"use client";

import { deleteAuction } from "@/app/actions/auctionActions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

type Props = {
  id: string;
};

export default function DeleteButton({ id }: Props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function doDelete() {
    setLoading(true);
    deleteAuction(id)
      .then((res) => {
        if (res.error) throw res.error;
        router.push("/");
      })
      .catch((error) => {
        toast.error(error.status + " " + error.message);
      })
      .finally(() => setLoading(false));
  }

  return (
    <button
      onClick={doDelete}
      disabled={loading}
      className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed transition cursor-pointer"
    >
      Delete Auction
    </button>
  );
}
