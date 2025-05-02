import React, { useState } from "react";
import { cn } from "../utils/clsx";
import { IoCheckmark } from "react-icons/io5";

const Checkbox = ({ className, title }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label
      onClick={() => setIsChecked((prev) => !prev)}
      className="flex items-center space-x-2 w-fit transition duration-200 ease-out"
    >
      <div
        className={cn(
          "border-blue-300 border-2 p-[1px] size-[18px] duration-100 transition rounded-sm text-[#121216] cursor-pointer flex items-center justify-center",
          className,
          {
            "bg-blue-300": isChecked,
          }
        )}
      >
        <IoCheckmark />
      </div>

      <span
        id={title}
        className="font-semibold text-md text-neutral-300 cursor-pointer hover:text-white transition duration-75"
      >
        {title}
      </span>
    </label>
  );
};

export default Checkbox;
