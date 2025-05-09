import React, { useContext } from "react";
import { cn } from "../utils/clsx";
import { SelectedType } from "./AddTransactionForm";

const RadioItem = ({ label, color }) => {
  const { selectedType, setSelectedType } = useContext(SelectedType);

  return (
    <label
      onClick={() => setSelectedType(label.toLowerCase())}
      className={cn("flex items-center gap-x-2 cursor-pointer")}
    >
      <div
        style={{ borderColor: color }}
        className={cn(
          "border rounded-full p-[3px] size-4 flex items-center justify-center"
        )}
      >
        {selectedType === label.toLowerCase() && (
          <span
            style={{ backgroundColor: color }}
            className={cn("size-2 rounded-full")}
          ></span>
        )}
      </div>
      <span
        style={{ color: label.toLowerCase() === selectedType && color }}
        className={cn(`text-white/60 font-medium text-sm`)}
      >
        {label}
      </span>
    </label>
  );
};

export default RadioItem;
