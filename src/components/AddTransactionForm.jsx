import React, { useEffect } from "react";
import { X } from "lucide-react";
import { BiDollar } from "react-icons/bi";
import DatePicker from "./DatePicker";
import RadioTransictionType from "./RadioTransictionType";
import Aos from "aos";
import "aos/dist/aos.css";
import { useShowForm } from "../contexts/AddTransaction.context";
import SelectCategory from "./SelectCategory";
import RadioPaymentMode from "./RadioPaymentMode";

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
            className="bg-[#121216] text-white/70 flex flex-col py-4 border border-neutral-800 rounded-sm w-[27%]"
          >
            <div className="flex items-center px-5">
              <h3 className="font-bold text-xl text-white/85">
                New <span className="text-[#0ea5e9]">Transaction</span>
              </h3>
            </div>

            <div className="h-px bg-neutral-800 w-full my-3 mt-5"></div>

            <div className="flex flex-col gap-y-6 px-5">
              <div className="flex items-center gap-x-6">
                <RadioTransictionType label="Income" color="#0ea5e9" />
                <RadioTransictionType label="Expense" color="#dc2626" />
              </div>
              <div className="grid grid-cols-2 gap-x-5 gap-y-6 items-center">
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
                  <div className="flex items-center relative border text-sm font-medium bg-white/5 border-neutral-700 rounded-sm p-1">
                    <BiDollar className="text-neutral-400 size-5" />
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      placeholder="0.00"
                      className="outline-none w-full text-white/80"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <label htmlFor="description">Description</label>

                <textarea
                  id="description"
                  name="description"
                  placeholder="Add details about this transaction"
                  className="flex h-20 items-center text-sm p-2.5 resize-none text-neutral-200 border outline-none duration-100 transition bg-white/5 border-neutral-700 hover:border-neutral-600 rounded-sm"
                />
              </div>

              <div className="flex flex-col gap-y-2">
                <span>Payment Mode</span>
                <div className="flex items-center gap-x-6">
                  <RadioPaymentMode label="Cash" />
                  <RadioPaymentMode label="Debit Card" />
                  <RadioPaymentMode label="Credit Card" />
                </div>
              </div>

              <div className="flex justify-end w-full gap-x-2">
                <button
                  onClick={() => setShowForm(false)}
                  className="bg-white/10 text-neutral-400 hover:bg-white/10 border-neutral-700 hover:text-white border transition duration-200 text-xs font-bold p-2.5 px-4 uppercase rounded-sm cursor-pointer"
                >
                  Cancel
                </button>
                <button className=" bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 transition duration-200 text-white p-2.5 px-4 text-xs font-bold uppercase rounded-sm cursor-pointer">
                  add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTransactionForm;
