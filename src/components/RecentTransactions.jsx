import React from "react";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "./ui/table";

const recentTransactions = [
  {
    id: 1,
    date: "11/30/2017",
    category: "Food",
    paymentMode: "Debit Card",
    description: "Lunch at a restaurant",
    amount: "$ 200",
  },
  {
    id: 2,
    date: "12/01/2017",
    category: "Transport",
    paymentMode: "Cash",
    description: "Taxi fare",
    amount: "$ 50",
  },
  {
    id: 3,
    date: "12/02/2017",
    category: "Shopping",
    paymentMode: "Credit Card",
    description: "Clothes shopping",
    amount: "$ 300",
  },
];

const RecentTransactions = () => {
  return (
    <div className="size-[400px] rounded-lg flex flex-col border border-neutral-800 py-5 bg-[#121216] w-full">
      <h2 className="font-semibold text-xl px-5">Recent Transactions</h2>

      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Payment Mode</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Amout</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {recentTransactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.category}</TableCell>
              <TableCell>{transaction.paymentMode}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell>
                <div className="flex float-right px-1 font-medim text-red-500">
                  {transaction.amount}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentTransactions;
