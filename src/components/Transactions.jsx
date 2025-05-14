import React from "react";
import { DataTable } from "./DataTable";

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
