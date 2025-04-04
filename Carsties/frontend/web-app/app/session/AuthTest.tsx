"use client";

import React, { useState } from "react";
import { updateActionTest } from "../actions/auctionActions";

export default function AuthTest() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>();

  function doUpdate() {
    setResult(undefined);
    setLoading(true);
    updateActionTest()
      .then((res) => setResult(res))
      .catch((err) => setResult(err))
      .finally(() => setLoading(false));
  }

  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={doUpdate}
        disabled={loading}
        className="border border-gray-300 text-gray-900 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none disabled:opacity-50"
      >
        Test auth
      </button>
      <div>{JSON.stringify(result, null, 2)}</div>
    </div>
  );
}
