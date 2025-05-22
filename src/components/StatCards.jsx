import React from "react";
import StatCard from "./StatCard";
import { useTransaction } from "../contexts/Transaction.context";

const StatCards = () => {
  const { transactions, income, expenses, balance } = useTransaction();

  const formattedIncome = new Intl.NumberFormat("en-US").format(income);
  const formattedExpenses = new Intl.NumberFormat("en-US").format(expenses);
  const formattedBalance = new Intl.NumberFormat("en-US").format(balance);
  const statCards = [
    {
      statName: "Income",
      number: formattedIncome,
      className: "text-blue-500 border-l-blue-500",
    },
    {
      statName: "Expenses",
      number: formattedExpenses,
      className: "text-red-500 border-l-red-400",
    },
    {
      statName: "Balance",
      number: formattedBalance,
      className: "text-green-500 border-l-green-500",
    },
    {
      statName: "Transactions",
      number: transactions.length,
      className: "text-blue-300 border-l-blue-300",
    },
  ];
  return (
    <div className="md:flex md:gap-x-6 grid grid-cols-2 gap-4">
      {statCards.map((statCard, i) => (
        <StatCard
          key={i}
          statName={statCard.statName}
          number={statCard.number}
          className={statCard.className}
        />
      ))}
    </div>
  );
};

export default StatCards;
