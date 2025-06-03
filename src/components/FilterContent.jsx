import React, { useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { BsCurrencyDollar } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";
import MainCheckbox from "./MainCheckbox";
import { DateRangePicker } from "./DateRangePicker";
import { cn } from "../utils/clsx";
import { useFilter } from "../contexts/Filter.context";

const categoryOptions = [
  { value: "food", label: "Food" },
  { value: "transportation", label: "Transportation" },
  { value: "rent", label: "Rent" },
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

const style = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "#18181b",
    borderColor: state.isFocused ? "#818cf8" : "#3f3f46",
    borderRadius: "0.375rem",
    boxShadow: state.isFocused ? "0 0 0 1px #818cf8" : "none",
    padding: "2px 4px",
    "&:hover": {
      borderColor: "#818cf8",
    },
    transition: "all 0.2s ease",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#18181b",
    borderRadius: "0.375rem",
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    zIndex: 10,
  }),
  menuList: (base) => ({
    ...base,
    padding: "4px",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused
      ? "#27272a"
      : state.isSelected
      ? "#4f46e5"
      : "#18181b",
    color: state.isSelected ? "white" : "#d4d4d8",
    cursor: "pointer",
    borderRadius: "0.25rem",
    margin: "2px 0",
    fontSize: "0.875rem", // Smaller font size (14px)
    padding: "4px 8px", // Reduced padding
    transition: "all 0.15s ease",
    "&:active": {
      backgroundColor: "#4338ca",
    },
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "#27272a",
    border: "1px solid #3f3f46",
    borderRadius: "0.25rem",
    margin: "0 6px 2px 0",
    display: "flex",
    alignItems: "center",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "#e4e4e7",
    padding: "2px 6px",
    fontSize: "0.875rem",
  }),
  multiValueRemove: (base) => ({
    ...base,
    width: "20px",
    color: "#a1a1aa",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "2px",
    paddingRight: "2px",
    borderLeft: "1px solid #3f3f46",
    borderRadius: "0 0.25rem 0.25rem 0",

    "& svg": {
      "&:hover": {
        cursor: "pointer",
      },
    },

    "&:hover": {
      backgroundColor: "#3f3f46",
      color: "#f4f4f5",
    },
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    // color: "#a1a1aa",
    // padding: "0 8px",
    transition: "transform 0.2s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "none",
    // "&:hover": {
    //   color: "#818cf8",
    // },
    "& svg": {
      width: "16px",
      height: "16px",
      color: "#737379",
    },
  }),
  clearIndicator: (base) => ({
    ...base,
    color: "#a1a1aa ",
    padding: "3px",
    display: "flex",
    borderRadius: "50%",

    "& svg": {
      width: "16px",
      height: "16px",
      color: "#a1a1aa",
      "&:hover": {
        color: "white",
      },
    },
    "&:hover": {
      cursor: "pointer",
      color: "white",
      backgroundColor: "#3f3f46",
    },
  }),
  input: (base) => ({
    ...base,
    color: "white",
    margin: "0",
    padding: "0",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#71717a",
  }),
  singleValue: (base) => ({
    ...base,
    color: "white",
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "2px 6px",
    flexWrap: "wrap",
  }),
  indicatorsContainer: (base) => ({
    ...base,
    alignItems: "center",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

const animatedComponents = makeAnimated();
export const FilterContent = ({ className }) => {
  const {
    maxAmount,
    setMinAmount,
    setMaxAmount,
    minAmount,
    selectedCategories,
    setSelectedCategories,
    handleFilter,
  } = useFilter();

  const handleLimitation = (e) => {
    if (e.target.value.length > 8) {
      e.target.value = e.target.value.slice(0, 12);
    }
  };
  useEffect(() => {
    handleFilter();
  }, [minAmount, handleFilter, maxAmount, selectedCategories]);

  // useEffect(() => {
  //   minAmount > maxAmount ? setMinAmount(maxAmount) : null;
  // }, [minAmount, maxAmount, setMinAmount]);

  // useEffect(() => {
  //   maxAmount > minAmount ? setMinAmount(minAmount) : null;
  // }, [maxAmount, minAmount, setMinAmount]);

  return (
    <div
      className={cn(
        "lg:flex flex-col hidden border border-neutral-800 min-h-screen max-h-full lg:w-[440px] bg-[#121216]",
        className
      )}
    >
      <div className="flex items-center md:m-4 mx-4 my-2.5 justify-between">
        <h3 className="md:text-xl text-md font-semibold">Filters</h3>
        <GiSettingsKnobs className="size-5 rotate-90 stroke-2 stroke-gray-400" />
      </div>

      <div className="h-px w-full bg-neutral-800"></div>

      <div className="flex flex-col gap-y-8 p-4">
        <div className="flex flex-col gap-2">
          <span className="text-white/60 text-sm">Select a range</span>
          <DateRangePicker />
        </div>

        <div>
          <label className="text-white/60 text-sm mb-0.5 flex">Category</label>

          <Select
            isMulti
            name="categories"
            value={selectedCategories}
            options={categoryOptions}
            onChange={(e) => {
              setSelectedCategories(e);
              handleFilter();
            }}
            components={animatedComponents}
            className="category-multi-select"
            classNamePrefix="category-select"
            placeholder="Select categories..."
            styles={style}
          />
        </div>

        <div>
          <span className="text-neutral-300 text-sm mb-2 flex font-semibold">
            Cashflow
          </span>

          <div className="grid grid-cols-2 items-center">
            <MainCheckbox label={"income"} />
            <MainCheckbox label={"expense"} />
          </div>
        </div>

        <div>
          <span className="text-white/60 text-sm mb-2 flex font-semibold">
            Payment Mode
          </span>
          <div className="flex flex-col gap-y-1.5">
            <MainCheckbox label={"cash"} />
            <MainCheckbox label={"debit card"} />
            <MainCheckbox label={"credit card"} />
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
                    value={minAmount}
                    onInput={(e) => handleLimitation(e)}
                    onChange={(e) => setMinAmount(e.target.value)}
                    className="outline-none w-full font-semibold"
                  />
                </div>
              </div>
            </div>

            <div>
              <span className="text-[#6b6b70] text-xs">Max Amount</span>
              <div className="flex border rounded-md gap-x-1 bg-[#1b1b21] w-full border-neutral-800 p-2 px-2">
                <div className="flex items-center gap-x-2">
                  <BsCurrencyDollar className="text-xl text-neutral-400" />

                  <input
                    type="number"
                    value={maxAmount}
                    onInput={(e) => handleLimitation(e)}
                    onChange={(e) => setMaxAmount(e.target.value)}
                    className="outline-none w-full font-semibold"
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

export default FilterContent;
