import React from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import "../index.css";

import { cn } from "../utils/clsx";

function Home() {
  return (
    <div
      className={cn(
        "flex min-h-screen max-h-full bg-neutral-950 text-neutral-50 font-inter"
      )}
    >
      <Sidebar />

      <Dashboard />
    </div>
  );
}

export default Home;
