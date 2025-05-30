import React from "react";
import { cn } from "../utils/clsx";

const StatCard = ({ statName, number, className }) => {
  return (
    <div
      className={cn(
        "rounded-lg flex flex-col border border-neutral-800 md:gap-y-2 border-l-4 px-5 md:py-5 py-3 bg-[#121216] w-full md:h-28",
        className
      )}
    >
      <span className="text-[#A1A1AA] font-medium text-sm">{statName}</span>

      <span className="text-2xl font-bold">
        {statName.toLowerCase() !== "transactions" ? "$" : ""}
        {number}
      </span>
    </div>
  );
};

export default StatCard;
