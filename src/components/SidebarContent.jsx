import React from "react";
import { CiCalendar } from "react-icons/ci";
import { BiHomeAlt } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { cn } from "../utils/clsx";
import Separator from "./Separator";
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

const SidebarContent = () => {
  return (
    <div className="gap-y-4 flex flex-col">
      <div className="flex flex-col gap-y-4 items-center justify-center mx-8 px-7">
        <div className="rounded-full flex strok-1 size-20 bg-white"></div>
        <span className="fond-semibold text-lg">Ali Ahmed</span>

        <div className="rounded-2xl gap-x-2 flex px-3 py-1 items-center">
          <span className="text-sm font-semibold text-[#94939b]">Balance</span>
          <span className="md:font-bold md:text-xl font-medium text-md bg-gradient-to-r from-cyan-400 to-indigo-400 text-transparent bg-clip-text">
            $5,240
          </span>
        </div>
      </div>
      <Separator border="bg-neutral-700" />
      <div className="flex flex-col gap-y-0.5 text-sm font-medium text-[#A1A1AA] px-5">
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

      <div className="w-full bg-gradient-to-r h-px my-3 from-transparent via-neutral-700 to-transparent px-3"></div>
    </div>
  );
};

export default SidebarContent;
