"use client";

import { Auction } from "@/types";

type Props = {
  auction: Auction;
};
export default function DetailedSpecs({ auction }: Props) {
  return (
    <table className="w-full text-sm text-left text-gray-500 border border-gray-200 rounded-lg overflow-hidden">
      <tbody className="divide-y divide-gray-200">
        <tr className="bg-white">
          <th className="px-6 py-4 font-medium text-gray-900">Seller</th>
          <td className="px-6 py-4">{auction.seller}</td>
        </tr>
        <tr className="bg-gray-50">
          <th className="px-6 py-4 font-medium text-gray-900">Make</th>
          <td className="px-6 py-4">{auction.make}</td>
        </tr>
        <tr className="bg-white">
          <th className="px-6 py-4 font-medium text-gray-900">Model</th>
          <td className="px-6 py-4">{auction.model}</td>
        </tr>
        <tr className="bg-gray-50">
          <th className="px-6 py-4 font-medium text-gray-900">
            Year manufactured
          </th>
          <td className="px-6 py-4">{auction.year}</td>
        </tr>
        <tr className="bg-white">
          <th className="px-6 py-4 font-medium text-gray-900">Mileage</th>
          <td className="px-6 py-4">{auction.mileage}</td>
        </tr>
        <tr className="bg-gray-50">
          <th className="px-6 py-4 font-medium text-gray-900">
            Has reserve price?
          </th>
          <td className="px-6 py-4">
            {auction.reservePrice > 0 ? "Yes" : "No"}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
