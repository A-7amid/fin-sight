import React from "react";
import { cn } from "../utils/clsx";
import Separator from "./Separator";
import SidebarContent from "./SidebarContent";

const Sidebar = () => {
  return (
    <div
      className={cn(
        "bg-[#121216] hidden md:flex flex-col border-r gap-y-4 border-neutral-800 text-[#f8fafc]"
      )}
    >
      <div className="flex justify-center items-center px-5">
        <h3
          className="bg-gradient-to-r w-fit from-cyan-400 to-indigo-400 font-bold text-2xl inline-block pt-4 items-center justify-center text-transparent
       bg-clip-text"
        >
          FinSight
        </h3>
      </div>
      <Separator />

      <SidebarContent />
    </div>
  );
};

export default Sidebar;
