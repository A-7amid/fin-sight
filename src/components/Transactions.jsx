import React from "react";
import { DataTable } from "./DataTable";

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
    <div className="flex flex-col mx-auto container my-5 w-full h-full">
      <div className="bg-[#121216] flex flex-col py-5 gap-y-4 rounded-lg w-full border border-neutral-800">
        <h2 className="font-semibold text-xl px-5">All Transactions</h2>
        {/* <div className="h-px w-full bg-neutral-800"></div> */}

        <DataTable />
      </div>
    </div>
  );
};

export default Transactions;
