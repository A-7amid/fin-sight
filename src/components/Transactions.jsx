import React from "react";
import { CiSearch } from "react-icons/ci";
import { Button } from "./ui/button";
// import { DataTable } from "./payments/DataTable";

// const transactions = [
//   {
//     id: 1,
//     category: "Food",
//     date: "2023/10/01",
//     paymentMode: "Cash",
//     description: "Grocery shopping",
//     amount: 50,
//   },
//   {
//     id: 2,
//     category: "Transport",
//     date: "2023/10/02",
//     paymentMode: "Card",
//     description: "Bus ticket",
//     amount: 15,
//   },
//   {
//     id: 3,
//     category: "Entertainment",
//     date: "2023/10/03",
//     paymentMode: "Cash",
//     description: "Movie night",
//     amount: 30,
//   },
//   {
//     id: 4,
//     category: "Utilities",
//     date: "2023/10/04",
//     paymentMode: "Online",
//     description: "Electricity bill",
//     amount: 100,
//   },
//   {
//     id: 5,
//     category: "Health",
//     date: "2023/10/05",
//     paymentMode: "Card",
//     description: "Pharmacy purchase",
//     amount: 25,
//   },
// ];

const Transactions = () => {
  return (
    <div className="flex flex-col p-5 w-full">
      <h2 className="font-semibold text-2xl">All Transactions</h2>

      <div className="bg-[#121216] flex flex-col p-4 px-5 rounded-lg mt-4 h-full w-full border border-neutral-800">
        <div className="flex items-center mb-3 gap-x-4 justify-center">
          <div className="flex items-center p-1.5 px-3 gap-x-2.5 border-neutral-800 border rounded-sm focus-within:border-blue-500 transition duration-75">
            <CiSearch />
            <input
              type="text"
              placeholder="Search"
              className="outline-none group-focus-within:border-blue-500"
            />
          </div>

          <button className="px-4 py-1.5 flex bg-blue-500 hover:bg-blue-600 transition duration-200 cursor-pointer uppercase font-medium text-sm rounded-sm">
            add transaction
          </button>
        </div>

        <div>{/* <DataTable /> */}</div>
      </div>
    </div>
  );
};

export default Transactions;
