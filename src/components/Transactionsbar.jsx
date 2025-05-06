import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { BsCurrencyDollar } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";

import MainCheckbox from "./MainCheckbox";
const options = [
  { value: "food", label: "Food" },
  { value: "transportation", label: "Transportation" },
  { value: "mortgage_rent", label: "Mortgage / Rent" },
  { value: "salary", label: "Salary" },
  { value: "shopping", label: "Shopping" },
  { value: "housing", label: "Housing" },
  { value: "utilities", label: "Utilities" },
  { value: "bills", label: "Bills" },
  { value: "personal_care", label: "Personal Care" },
  { value: "extra_income", label: "Extra income" },
  { value: "clothing", label: "Clothing" },
  { value: "insurance", label: "Insurance" },
  { value: "business", label: "Business" },
  { value: "interests", label: "Interests" },
  { value: "health_care", label: "Health Care" },
  { value: "miscellaneous", label: "Miscellaneous" },
  { value: "tax", label: "Tax" },
  { value: "education", label: "Education" },
];

const animatedComponents = makeAnimated();

const Transactionsbar = () => {
  return (
    <div className="flex flex-col border border-neutral-800 h-screen w-[440px] bg-[#121216]">
      <div className="flex items-center m-4 gap-x-4">
        <GiSettingsKnobs className="size-5 rotate-90 stroke-2 stroke-gray-400" />
        <h3 className="text-xl font-semibold">Filters</h3>
      </div>

      <div className="h-px w-full bg-neutral-800"></div>

      <div className="flex flex-col gap-y-8 p-4 mt-4">
        <div className="flex flex-col gap-2">
          <span className="text-white/60 text-sm">Select a range</span>
          <input type="date" />
        </div>

        <div>
          <span className="text-white/60 text-sm mb-0.5 flex">Category</span>
          <Select
            isMulti
            defaultValue={[options[3], options[4]]}
            name="categories"
            className="basic-multi-select"
            classNamePrefix="select"
            components={animatedComponents}
            options={options}
            styles={{
              control: (base, state) => ({
                ...base,
                backgroundColor: "#1f1f23", // matches a dark panel
                borderColor: state.isFocused ? "#6366f1" : "#3f3f46", // indigo-500 or zinc-700
                boxShadow: state.isFocused ? "0 0 0 1px #6366f1" : "none",
                "&:hover": {
                  borderColor: "#6366f1",
                },
                color: "#fff",
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: "#1f1f23", // dropdown panel
                color: "#fff",
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused
                  ? "#27272a" // zinc-800
                  : state.isSelected
                  ? "#4f46e5" // indigo-600
                  : "#1f1f23",
                color: state.isSelected ? "white" : "#d4d4d8", // zinc-300
                cursor: "pointer",
              }),
              multiValue: (base) => ({
                ...base,
                backgroundColor: "#374151", // gray-700
              }),
              multiValueLabel: (base) => ({
                ...base,
                color: "white",
              }),
              multiValueRemove: (base) => ({
                ...base,
                color: "#f87171", // red-400
                ":hover": {
                  backgroundColor: "#b91c1c", // red-700
                  color: "white",
                },
              }),
              input: (base) => ({
                ...base,
                color: "white",
              }),
              placeholder: (base) => ({
                ...base,
                color: "#9ca3af", // gray-400
              }),
              singleValue: (base) => ({
                ...base,
                color: "white",
              }),
            }}
          />
        </div>

        <div>
          <span className="text-neutral-300 text-sm mb-2 flex font-semibold">
            Cashflow
          </span>

          <div className="grid grid-cols-2 items-center">
            <MainCheckbox title={"Income"} />
            <MainCheckbox title={"Expense"} />
          </div>
        </div>

        <div>
          <span className="text-white/60 text-sm mb-2 flex font-semibold">
            Payment Mode
          </span>
          <div className="flex flex-col gap-y-1.5">
            <MainCheckbox title={"Cash"} />
            <MainCheckbox title={"Debit Card"} />
            <MainCheckbox title={"Credit Card"} />
          </div>
        </div>

        <div className="text-sm ">
          <span className="text-sm mb-2 flex font-semibold">Amount Range</span>

          <div className="flex items-center gap-x-4">
            <div>
              <span className="text-[#6b6b70] text-xs">Min Amount</span>
              <div className="flex border items-center gap-x-1 rounded-md bg-[#1b1b21] w-full border-neutral-800 p-2 px-2">
                <div className="flex items-center gap-x-2">
                  <BsCurrencyDollar className="text-xl text-neutral-400" />

                  <input
                    type="number"
                    className="outline-none w-full font-semibold"
                    onInput={(e) => {
                      if (e.target.value.length > 8) {
                        e.target.value = e.target.value.slice(0, 8);
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            {/* <div className="h-px bg-blue-400 w-2.5"></div> */}

            <div>
              <span className="text-[#6b6b70] text-xs">Max Amount</span>
              <div className="flex border rounded-md gap-x-1 bg-[#1b1b21] w-full border-neutral-800 p-2 px-2">
                <div className="flex items-center gap-x-2">
                  <BsCurrencyDollar className="text-xl text-neutral-400" />

                  <input
                    type="number"
                    className="outline-none w-full font-semibold"
                    onInput={(e) => {
                      if (e.target.value.length > 8) {
                        e.target.value = e.target.value.slice(0, 8);
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactionsbar;
