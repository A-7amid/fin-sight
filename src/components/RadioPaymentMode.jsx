import React from "react";
import { cn } from "../utils/clsx";
import { Controller } from "react-hook-form";

const RadioPaymentMode = ({ label, control, value, name }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <label
          onClick={() => field.onChange(value)}
          className={cn("flex items-center gap-x-2 cursor-pointer")}
        >
          <div
            className={cn(
              "border border-neutral-700 rounded-full p-[3px] size-4 flex items-center justify-center"
            )}
          >
            {field.value === label.toLowerCase() && (
              <span className={cn("size-2 rounded-full bg-[#0ea5e9]")}></span>
            )}
          </div>
          <span className={cn("font-medium text-sm")}>{label}</span>
        </label>
      )}
    ></Controller>
  );
};

export default RadioPaymentMode;
