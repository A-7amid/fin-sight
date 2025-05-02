import React from "react";
import { cn } from "../utils/clsx";

const StatCard = ({ statName, money, className }) => {
  return (
    <div
      className={cn(
        "rounded-lg flex flex-col border border-neutral-800 gap-y-2 border-l-4 px-5 py-5 bg-[#121216] w-full h-28",
        className
      )}
    >
      <span className="text-[#A1A1AA] font-medium text-sm">{statName}</span>

      <span className="text-2xl font-bold">{money}</span>
    </div>
  );
};

export default StatCard;
