import React from "react";
import { cn } from "../utils/clsx";
import Separator from "./Separator";
import { CiCalendar } from "react-icons/ci";
import { BiHomeAlt } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { NavLink } from "react-router-dom";

const pages = [
  {
    id: 1,
    title: "Dashboard",
    icon: <BiHomeAlt className="size-4" />,
    path: "/",
    isSelected: false,
  },
  {
    id: 2,
    title: "Transactions",
    icon: <CiCalendar className="size-4 stroke-1" />,
    path: "/transactions",
    isSelected: false,
  },
  {
    id: 3,
    title: "About",
    icon: <GoPerson className="size-4 stroke-1" />,
    path: "/about",
    isSelected: false,
  },
];

const Sidebar = () => {
  return (
    <div
      className={cn(
        "bg-[#121216] flex flex-col sticky border-r gap-y-4 border-neutral-800 text-[#f8fafc] px-5 "
      )}
    >
      <h3 className="p-2 flex items-center justify-center text-[#00aeef] font-bold text-2xl">
        FinSight
      </h3>

      <Separator />

      <div className="px-2 flex flex-col gap-y-4 items-center justify-center mx-8">
        <div className="rounded-full flex bg-white border-2 size-20">
          {/* <img src="" alt="" /> */}
        </div>

        <span className="fond-semibold text-lg">Ali Ahmed</span>

        <div className="rounded-2xl bg-[#00B0F0]/10 gap-x-2 flex px-3 py-1 text-[#00B0F0] ">
          <span>Balance</span>
          <span className="font-medium">$5,240</span>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col gap-y-0.5 text-sm font-medium text-[#A1A1AA]">
        {pages.map((page) => (
          <NavLink
            key={page.id}
            to={page.path}
            className={({ isActive }) =>
              cn("sidebar-buttons", {
                "text-white bg-[#27272A]": isActive,
              })
            }
          >
            {page.icon}
            <span>{page.title}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
