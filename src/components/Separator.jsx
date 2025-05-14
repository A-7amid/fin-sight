import React from "react";
import { cn } from "../utils/clsx";

const Separator = ({ h = "h-px", border, className }) => {
  return <div className={cn("md:bg-neutral-800", h, border, className)}></div>;
};

export default Separator;
