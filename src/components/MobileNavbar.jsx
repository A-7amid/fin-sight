import { AlignLeft } from "lucide-react";
import SidebarContent from "./SidebarContent";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiSettingsKnobs } from "react-icons/gi";
import FilterContent from "./FilterContent";

const MobileNavbar = ({ showFilters = false }) => {
  return (
    <div className="w-full md:hidden flex justify-between items-center bg-[#121216] px-3 py-2.5">
      <div className="w-full flex items-center gap-x-2 justify-start">
        <Sheet>
          <SheetTrigger asChild>
            <button className="cursor-pointer rounded-sm px-3 py-2 text-sm flex items-center">
              <AlignLeft className="size-4.5 cursor-pointer" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-52 py-10 bg-[#121216] border-neutral-700 text-white/80"
          >
            <SidebarContent />
          </SheetContent>
        </Sheet>

        <h3
          className="bg-gradient-to-r w-fit from-cyan-400 to-indigo-400 font-bold text-lg inline-block items-center justify-center text-transparent
       bg-clip-text"
        >
          FinSight
        </h3>
      </div>

      {showFilters && (
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <GiSettingsKnobs className="size-5 rotate-90 stroke-2 stroke-gray-400" />
            </button>
          </SheetTrigger>
          <SheetContent className="border-neutral-700 md:w-full w-[70%] text-white/80">
            <FilterContent className="flex" />
          </SheetContent>
        </Sheet>
      )}
    </div>
  );
};

export default MobileNavbar;
