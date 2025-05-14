import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Aos from "aos";
import "aos/dist/aos.css";
import MobileNavbar from "./MobileNavbar";

import "../index.css";

import { cn } from "../utils/clsx";

function Home() {
  return (
    <div
      className={cn(
        "md:flex min-h-screen max-h-full bg-neutral-950 text-neutral-50"
      )}
    >
      <MobileNavbar />

      <Sidebar />

      <Dashboard />
    </div>
  );
}

export default Home;
