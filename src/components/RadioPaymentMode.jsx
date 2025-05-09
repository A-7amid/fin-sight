import React from "react";
import { cn } from "../utils/clsx";
import { useSelectedType } from "../contexts/AddTransaction.context";

const RadioPaymentMode = ({ label }) => {
  const { selectedPayment, setSelectedPayment } = useSelectedType();

  return (
    <label
      onClick={() => setSelectedPayment(label.toLowerCase())}
      className={cn("flex items-center gap-x-2 cursor-pointer")}
    >
      <div
        className={cn(
          "border border-neutral-700 rounded-full p-[3px] size-4 flex items-center justify-center"
        )}
      >
        {selectedPayment === label.toLowerCase() && (
          <span className={cn("size-2 rounded-full bg-[#0ea5e9]")}></span>
        )}
      </div>
      <span className={cn("font-medium text-sm")}>{label}</span>
    </label>
  );
};

export default RadioPaymentMode;
