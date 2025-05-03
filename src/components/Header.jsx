import React from "react";
import { DateRangePicker } from "./DateRangePicker";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h3 id="dashboard-title" className="font-semibold text-xl">
        Dashboard
      </h3>

      <div>
        <DateRangePicker />
      </div>
    </div>
  );
};

export default Header;
