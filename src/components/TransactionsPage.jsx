import React from "react";
import { cn } from "../utils/clsx";
import Sidebar from "./Sidebar";
import Transactions from "./Transactions";
import Transactionsbar from "./Transactionsbar";

const TransactionsPage = () => {
  return (
    <div
      style={{ "--background": "240 10% 4%" }}
      className={cn(
        "flex min-h-screen max-h-full bg-[hsl(var(--background))] text-neutral-50"
      )}
    >
      <Sidebar />

      <Transactions />

      <Transactionsbar />
    </div>
  );
};

export default TransactionsPage;
