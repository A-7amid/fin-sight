import React from "react";
import SidebarContent from "./SidebarContent";

const MobileSidebar = () => {
  return (
    <div className="md:hidden w-[40%] h-full bg-[#121216]">
      <SidebarContent />
    </div>
  );
};

export default MobileSidebar;
