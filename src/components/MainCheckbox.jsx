import React, { useCallback, useState } from "react";
import { cn } from "../utils/clsx";
import { IoCheckmark } from "react-icons/io5";
import { useFilter } from "../contexts/Filter.context";

const MainCheckbox = ({ className, label }) => {
  const { setIsIncome, setIsExpense, setPaymentMode, paymentMode } =
    useFilter();
  const [isChecked, setIsChecked] = useState(true);

  const handleOnClick = useCallback(() => {
    if (label === "income") setIsIncome((prev) => !prev);
    else if (label === "expense") setIsExpense((prev) => !prev);

    if (label === "cash") {
      setPaymentMode({ ...paymentMode, cash: !isChecked });
    }
    if (label === "debit card") {
      setPaymentMode({ ...paymentMode, debitCard: !isChecked });
    }
    if (label === "credit card") {
      setPaymentMode({ ...paymentMode, creditCard: !isChecked });
    }
  }, [
    label,
    setIsIncome,
    setIsExpense,
    isChecked,
    paymentMode,
    setPaymentMode,
  ]);

  return (
    <label
      onClick={() => {
        setIsChecked((prev) => !prev);
        handleOnClick();
      }}
      className="flex items-center capitalize space-x-2 w-fit transition duration-200 ease-out"
    >
      <div
        className={cn(
          "border-blue-300 text-[#121216] border-2 p-[1px] md:size-[18px] size-4 duration-100 transition rounded-sm cursor-pointer flex items-center justify-center",
          className,
          {
            "bg-blue-300": isChecked,
          }
        )}
      >
        <IoCheckmark />
      </div>

      <span id={label} className="md:font-medium cursor-pointer text-sm">
        {label}
      </span>
    </label>
  );
};

export default MainCheckbox;
