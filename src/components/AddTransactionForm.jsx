import React, { useEffect } from "react";
import { X } from "lucide-react";
import { BiDollar } from "react-icons/bi";
import DatePicker from "./DatePicker";
import RadioItem from "./RadioItem";
import Aos from "aos";
import "aos/dist/aos.css";
import { useShowForm } from "../contexts/AddTransaction.context";
import SelectCategory from "./SelectCategory";

const AddTransactionForm = () => {
  const { showForm, setShowForm } = useShowForm();

  useEffect(() => {
    Aos.init({
      offset: 120,
      delay: 0,
      duration: 100,
      easing: "ease",
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <>
      {showForm && (
        <div className="bg-black/70 flex items-center justify-center w-screen h-full absolute top-0 left-0">
          <div
            data-aos="zoom-in-down"
            className="bg-[#121216] text-white/70 flex flex-col py-4 border border-neutral-800 rounded-sm w-[27%] h-2/3"
          >
            <div className="flex justify-between items-center px-5">
              <h3 className="font-bold text-xl text-white/85">
                New <span className="text-[#0ea5e9]">Transaction</span>
              </h3>
              <X
                onClick={() => setShowForm(false)}
                className="size-6 cursor-pointer stroke-zinc-400 hover:stroke-zinc-100 hover:bg-neutral-800 rounded-sm p-1 transition duration-200"
              />
            </div>

            <div className="h-px bg-neutral-800 w-full my-3 mt-5"></div>

            <div className="flex flex-col gap-y-6">
              <div className="flex items-center px-5 gap-x-6">
                <RadioItem label="Income" color="#0ea5e9" />
                <RadioItem label="Expense" color="#dc2626" />
              </div>

              <div className="grid grid-cols-2 gap-x-5 gap-y-6 px-5 items-center">
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="date-picker" className="transaction-labels">
                    Choose a Date
                  </label>
                  <DatePicker id="date-picker" />
                </div>

                <div className="flex flex-col gap-y-2">
                  <label htmlFor="time" className="transaction-labels">
                    Choose a Date
                  </label>
                  <input
                    className="flex items-center border bg-white/5 hover:bg-white/10 border-neutral-700 hover:border-neutral-600 cursor-pointer rounded-sm p-1"
                    aria-label="Time"
                    type="time"
                    id="time"
                    value="13:30"
                  />
                </div>

                <div className="flex flex-col gap-y-2">
                  <label
                    htmlFor="select-category"
                    className="transaction-labels"
                  >
                    Select a Category
                  </label>
                  <SelectCategory id="select-category" />
                </div>

                <div className="flex flex-col gap-y-2">
                  <label htmlFor="amount" className="transaction-labels">
                    Enter an Amount
                  </label>
                  <div className="flex items-center relative gap-x-2 border text-sm font-medium bg-white/5 border-neutral-700 rounded-sm p-1">
                    <X className="stroke-white " />
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      placeholder="0.00"
                      className="outline-none "
                    />
                  </div>
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTransactionForm;
