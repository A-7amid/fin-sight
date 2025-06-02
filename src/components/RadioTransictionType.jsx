import { cn } from "../utils/clsx";
import { Controller } from "react-hook-form";

const RadioTransictionType = ({ label, color, control, name, value }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <label
          className={cn("flex items-center gap-x-2 cursor-pointer")}
          onClick={() => {
            field.onChange(value);
          }}
        >
          <div
            style={{ borderColor: color }}
            className={cn(
              "border rounded-full p-[3px] size-4 flex items-center justify-center"
            )}
          >
            {field.value === value && (
              <span
                style={{ backgroundColor: color }}
                className={cn("size-2 rounded-full")}
              ></span>
            )}
          </div>
          <span
            style={{ color: field.value === value ? color : undefined }}
            className={cn(`text-white/60 font-medium text-sm`)}
          >
            {label}
          </span>
        </label>
      )}
    />
  );
};

export default RadioTransictionType;
