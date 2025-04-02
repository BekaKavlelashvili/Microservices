"use client";

import { User } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { AiFillCar, AiFillTrophy, AiOutlineLogout } from "react-icons/ai";
import { HiChevronDown, HiCog, HiUser } from "react-icons/hi";

type Props = {
  user: User;
};

export default function UserActions({ user }: Props) {
  const router = useRouter();
  return (
    <details className="relative inline-block text-left">
      <summary className="px-4 py-2 bg-white hover:bg-gray-100 cursor-pointer list-none flex items-center">
        Welcome {user.name}
        <HiChevronDown className="ml-2" />
      </summary>
      <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
        <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
          <HiUser className="mr-2" />
          <Link href="/">My Auctions</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
          <AiFillTrophy className="mr-2" />
          <Link href="/">Auctions won</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
          <AiFillCar className="mr-2" />
          <Link href="/">Sell my car</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
          <HiCog className="mr-2" />
          <Link href="/session">Session (dev only!)</Link>
        </li>
        <hr />
        <li
          className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          <AiOutlineLogout className="mr-2" />
          Sign out
        </li>
      </ul>
    </details>
  );
}
