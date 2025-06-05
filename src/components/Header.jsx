import React from "react";
import { DateRangePicker } from "./DateRangePicker";

const Header = () => {
  // flex sm:justify-between flex-col sm:items-center
  return (
    <div className="sm:flex sm:justify-between gap-x-2 sm:items-center sm:mb-6">
      <h3 className="sm:font-semibold sm:text-xl text-sm font-medium mb-1.5 sm:mb-0">
        Dashboard
      </h3>

      <DateRangePicker className="sm:max-w-3xs md:max-w-xs" />
    </div>
  );
};

export default Header;
