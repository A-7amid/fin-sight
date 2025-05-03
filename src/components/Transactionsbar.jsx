import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { CiFilter } from "react-icons/ci";

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
    <div className="flex flex-col border border-neutral-800 p-4 h-screen w-[410px] bg-[#121216] text-neutral-50">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Filters</h3>
        <CiFilter className="size-6 stroke-1 stroke-gray-400" />
      </div>

      <div className="flex flex-col gap-y-4 mt-4">
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
          <span className="text-white/60 text-sm">Cashflow</span>
          <MainCheckbox title={"Income"} />
          <MainCheckbox title={"Expense"} />
        </div>

        <div>
          <span className="text-white/60 text-sm">Payment Mode</span>
          <MainCheckbox title={"Cash"} />
          <MainCheckbox title={"Debit Card"} />
          <MainCheckbox title={"Credit Card"} />
        </div>

        <div className="text-sm f">
          <span className="text-white/60 text-sm mb-1">Amount</span>

          <div className="flex items-center gap-x-2">
            <div className="flex border items-center rounded-md border-neutral-800 p-2">
              <span className="text-white/60">Min :</span>
              <input
                type="number"
                className="outline-none w-16 font-semibold"
              />
            </div>

            <div className="h-px bg-blue-400 w-2.5"></div>

            <div className="flex flex-row border rounded-md border-neutral-800 p-2">
              <span className="text-white/60">Max :</span>
              <input
                type="number"
                className="outline-none w-16 font-semibold"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactionsbar;
