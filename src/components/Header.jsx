import { DateRangePicker } from "@heroui/date-picker";
import React from "react";
const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h3 className="font-semibold text-xl">Dashboard</h3>

      <DateRangePicker className="max-w-xs" label="Stay duration" />
    </div>
  );
};

export default Header;
