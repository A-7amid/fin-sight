import React from "react";
import StatCard from "./StatCard";

const statCards = [
  {
    statName: "Income",
    money: "$43,300",
    className: "text-blue-500 border-l-blue-500",
  },
  {
    statName: "Expenses",
    money: "$38,060",
    className: "text-red-500 border-l-red-400",
  },
  {
    statName: "Balance",
    money: "$5,240",
    className: "text-green-500 border-l-green-500",
  },
  {
    statName: "Transactions",
    money: "1,284",
    className: "text-blue-300 border-l-blue-300",
  },
];

const StatCards = () => {
  return (
    <div className="flex gap-x-6">
      {statCards.map((statCard, i) => (
        <StatCard
          key={i}
          statName={statCard.statName}
          money={statCard.money}
          className={statCard.className}
        />
      ))}
    </div>
  );
};

export default StatCards;
