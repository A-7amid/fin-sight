import React from "react";
import { cn } from "../utils/clsx";

const Separator = ({ h = "h-px", className }) => {
  return <div className={cn("bg-neutral-800", h, className)}></div>;
};

export default Separator;
