import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";

const categories = [
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

const SelectCategory = ({ id, name, control, selectedCategory, isEdit }) => {
  return (
    <Controller
      control={control}
      rules={{ required: true }}
      name={name}
      render={({ field }) => (
        <Select
          value={isEdit ? selectedCategory.toLowerCase() : field.value}
          onValueChange={field.onChange}
        >
          <SelectTrigger
            id={id}
            className="flex items-center w-full bg-white/5 hover:bg-white/10 border-neutral-700 hover:border-neutral-600 cursor-pointer"
          >
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent
            position="down"
            className="bg-neutral-900 mt-17 border-neutral-600 cursor-pointer text-white"
          >
            <SelectGroup>
              <SelectLabel className="border-b border-neutral-700">
                Categories
              </SelectLabel>
              {categories.map((category) => (
                <SelectItem
                  key={category.value}
                  className="hover:bg-white/40 cursor-pointer"
                  value={category.value}
                >
                  {category.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    ></Controller>
  );
};

export default SelectCategory;
