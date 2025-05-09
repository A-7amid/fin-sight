import React, { createContext, useState } from "react";
import { X } from "lucide-react";
import DatePicker from "./DatePicker";
import RadioItem from "./RadioItem";

export const SelectedType = createContext();

const AddTransactionForm = () => {
  const [selectedType, setSelectedType] = useState("expense");

  return (
    <SelectedType.Provider value={{ selectedType, setSelectedType }}>
      <div className="bg-black/40 flex items-center justify-center w-screen h-full absolute top-0 left-0">
        <div className="bg-[#121216] text-white/70 flex flex-col py-4 border border-neutral-800 rounded-md w-[27%] h-2/3">
          <div className="flex justify-between items-center px-5">
            <h3 className="font-bold text-xl text-white/85">
              New <span className="text-[#0ea5e9]">Transaction</span>
            </h3>
            <X className="size-6 cursor-pointer stroke-zinc-400 hover:stroke-zinc-100 hover:bg-neutral-800 rounded-sm p-1 transition duration-200" />
          </div>

          <div className="h-px bg-neutral-800 w-full my-3 mt-5"></div>

          <div className="flex flex-col gap-y-6">
            <div className="flex items-center px-5 gap-x-6">
              <RadioItem label="Income" color="#0ea5e9" />
              <RadioItem label="Expense" color="#dc2626" />
            </div>

            <div className="grid grid-cols-2 gap-x-5 px-5">
              <div className="flex flex-col gap-y-2">
                <span className="text-sm font-medium">Choose a Date</span>
                <DatePicker />
              </div>

              {/* <div className="flex flex-col gap-2">
              <span>Choose a Date</span>
              <DatePicker />
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </SelectedType.Provider>
  );
};

export default AddTransactionForm;
