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

const recentTransactions = [
  {
    id: 1,
    date: "Nov 30, 2017",
    category: "Food",
    categoryColor: "#EF4444",
    paymentMode: "Debit Card",
    description: "Lunch at a restaurant",
    amount: "$ 200",
  },
  {
    id: 2,
    date: "Dec 01, 2017",
    category: "Transport",
    categoryColor: "#34D399",
    paymentMode: "Cash",
    description: "Taxi fare",
    amount: "$ 50",
  },
  {
    id: 3,
    date: "Dec 02, 2017",
    category: "Shopping",
    categoryColor: "#C4B5FD", // red-400 in hex
    paymentMode: "Credit Card",
    description: "Clothes shopping",
    amount: "$ 300",
  },
  // {
  //   id: 4,
  //   date: "Dec 03, 2017",
  //   category: "Entertainment",
  //   textColor: "text-green-400",
  //   bgColor: "bg-green-400",
  //   paymentMode: "Debit Card",
  //   description: "Movie tickets",
  //   amount: "$ 100",
  // },
  // {
  //   id: 5,
  //   date: "Dec 04, 2017",
  //   category: "Health",
  //   textColor: "text-purple-400",
  //   bgColor: "bg-purple-400",
  //   paymentMode: "Cash",
  //   description: "Pharmacy purchase",
  //   amount: "$ 75",
  // },
];

const RecentTransactions = () => {
  return (
    <div className="rounded-lg flex flex-col border border-neutral-800 pt-5 mb-3 bg-[#121216] w-full">
      <h2 className="font-semibold text-xl px-5 mb-4">Recent Transactions</h2>

      <div className="h-px bg-neutral-800 w-full"></div>

      <Table>
        <TableHeader className="gap-5">
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Payment Mode</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-end">Amount</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {recentTransactions.map((transaction) => (
            <TableRow className="" key={transaction.id}>
              <TableCell className="font-light text-neutral-400">
                {transaction.date}
              </TableCell>

              <div className="py-1"></div>

              <TableCell
                style={{
                  backgroundColor: `${transaction.categoryColor}20`,
                  border: `1px solid ${transaction.categoryColor}50`,
                  color: transaction.categoryColor,
                }}
                className={cn(
                  "rounded-full recent-transactions-cell translate-x-3 transition duration-200 w-fit flex text-xs py-0.5 px-2.5 font-medium items-center"
                )}
              >
                {transaction.category}
              </TableCell>
              <div className="py-1"></div>
              <TableCell className="text-neutral-300">
                {transaction.paymentMode}
              </TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell className="text-end text-green-500 font-mono">
                {transaction.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentTransactions;
