"use client";

import React from "react";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button
      className="border border-gray-300 px-4 py-2 bg-white hover:bg-gray-100 cursor-pointer"
      onClick={() =>
        signIn("id-server", { callbackUrl: "/" }, { prompt: "login" })
      }
    >
      Login
    </button>
  );
}
