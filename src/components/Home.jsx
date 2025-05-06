import React from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import "../index.css";

import { cn } from "../utils/clsx";

function Home() {
  return (
    <div
      style={{ "--background": "240 10% 4%" }}
      className={cn("flex min-h-screen max-h-full text-neutral-50 font-inter")}
    >
      <Sidebar />

      <Dashboard />
    </div>
  );
}

export default Home;
