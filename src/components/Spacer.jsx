import React from "react";
import { cn } from "../utils/clsx";

const Spacer = ({ height, width, className }) => {
  return <div className={cn(height, width, className)}></div>;
};

export default Spacer;
