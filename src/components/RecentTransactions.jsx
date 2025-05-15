import React from "react";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "./ui/table";
import { cn } from "../utils/clsx";
import { dummyTransactions } from "../transactions";

const recentTransactions = dummyTransactions.slice(0, 5);

// const a = "hello";
// console.log(a[0].toLocaleUpperCase() + a.slice(1));

const transactionsHeaders = [
  "Date",
  "Category",
  "Payment Mode",
  "Description",
  "Amount",
];

const RecentTransactions = () => {
  return (
    <div className="rounded-lg flex flex-col border border-neutral-800 pt-5 mb-3 bg-[#121216] w-full">
      <h2 className="font-semibold text-xl px-5 mb-4">Recent Transactions</h2>

      <div className="h-px bg-neutral-800 w-full"></div>

      <Table>
        <TableHeader className="gap-5">
          <TableRow>
            {transactionsHeaders.map((head, i) => (
              <TableHead
                className={cn(
                  { "text-end": head.toLowerCase() === "amount" },
                  {
                    "hidden md:flex translate-y-2.5":
                      head.toLowerCase() === "description",
                  }
                )}
                key={i}
              >
                {head}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {recentTransactions.map((transaction, i) => (
            <TableRow className="hover:bg-[#24242a]" key={i}>
              <TableCell className="font-light text-neutral-400">
                {transaction.date}
              </TableCell>

              <TableCell
                style={{
                  backgroundColor: `${transaction.categoryColor}20`,
                  border: `1px solid ${transaction.categoryColor}50`,
                  color: transaction.categoryColor,
                }}
                className={cn(
                  "rounded-full recent-transactions-cell translate-x-3 mt-2 transition duration-200 w-fit flex text-xs py-0.5 px-2.5 font-medium items-center"
                )}
              >
                {transaction.category}
              </TableCell>
              <div className="py-1"></div>
              <TableCell className="text-neutral-300">
                {transaction.paymentMode}
              </TableCell>
              <TableCell className="hidden md:block">
                {transaction.description}
              </TableCell>
              <TableCell
                className={cn("text-end font-mono text-green-500", {
                  "text-red-500": transaction.transactionType === "expense",
                })}
              >
                ${transaction.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentTransactions;
