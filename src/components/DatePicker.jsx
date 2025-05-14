import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "../utils/clsx";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Controller } from "react-hook-form";

const DatePicker = ({ id, name, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Popover>
          <PopoverTrigger
            id={id}
            className="flex items-center border bg-white/5 hover:bg-white/10 border-neutral-700 hover:border-neutral-600 cursor-pointer"
            asChild
          >
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !field.value && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="stroke-white/70" />
              {field.value ? (
                format(field.value, "PPP")
              ) : (
                <span className="text-white/70">Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-full p-0 bg-neutral-900 text-white border-neutral-700"
            align="start"
          >
            <Calendar
              mode="single"
              selected={field.value}
              onSelect={field.onChange}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      )}
    ></Controller>
  );
};

export default DatePicker;
