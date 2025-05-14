import React from "react";
import { DateRangePicker } from "./DateRangePicker";

const Header = () => {
  // flex md:justify-between flex-col md:items-center
  return (
    <div className="md:flex md:justify-between md:items-center md:mb-6">
      <h3 className="md:font-semibold md:text-xl text-sm font-medium mb-1.5 md:mb-0">
        Dashboard
      </h3>

      <DateRangePicker />
    </div>
  );
};

export default Header;
