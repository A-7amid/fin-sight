import React from "react";
import { cn } from "../utils/clsx";
import Sidebar from "./Sidebar";
import Transactions from "./Transactions";
import AddTransactionForm from "./AddTransactionForm";
import Filtersbar from "./Filtersbar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TransactionsPage = () => {
  return (
    <div
      className={cn(
        "flex min-h-screen max-h-full bg-neutral-950 text-neutral-50"
      )}
    >
      <Sidebar />

      <div className="flex flex-col w-full">
        <Transactions />
      </div>

      <Filtersbar />

      <AddTransactionForm />
    </div>
  );
};

export default TransactionsPage;
