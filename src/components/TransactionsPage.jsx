import React, { createContext, useState } from "react";
import { cn } from "../utils/clsx";
import Sidebar from "./Sidebar";
import Transactions from "./Transactions";
import Transactionsbar from "./Transactionsbar";
import AddTransactionForm from "./AddTransactionForm";

const TransactionsPage = () => {
  return (
    <div
      style={{ "--background": "240 10% 4%" }}
      className={cn(
        "flex min-h-screen max-h-full bg-neutral-950 text-neutral-50"
      )}
    >
      <Sidebar />

      <div className="flex mx-5 flex-col w-full">
        <Transactions />
      </div>

      <Transactionsbar />

      <AddTransactionForm />
    </div>
  );
};

export default TransactionsPage;
