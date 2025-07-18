import React, { useCallback, useState } from "react";
import { BiDollar } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";
import DatePicker from "./DatePicker";
import RadioTransictionType from "./RadioTransictionType";
import { Input } from "@/components/ui/input";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import SelectCategory from "./SelectCategory";
import RadioPaymentMode from "./RadioPaymentMode";
import dayjs from "dayjs";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { useForm } from "react-hook-form";
import { useTransaction } from "../contexts/Transaction.context";

export const TransactionForm = ({ setIsAddTransaction }) => {
  const { handleAddTransaction, transactions } = useTransaction();

  const [submissions, setSubmissions] = useState(transactions);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      date: dayjs().format("YYYY-MM-DD"),
      category: "",
      paymentMode: "cash",
      description: "",
      transactionType: "expense",
      amount: "",
      time: dayjs().format("HH:mm"),
    },
  });

  const onSubmit = (data) => {
    handleAddTransaction(data);
    setSubmissions((prev) => [...prev, data]);
    setIsAddTransaction(false);
    console.log(data.time);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#121216] text-white/70 flex flex-col "
    >
      <div className="flex items-center px-5">
        <h3 className="font-bold text-xl text-white/85 capitalize mt-1">
          new <span className="text-[#0ea5e9]">transaction</span>
        </h3>
      </div>

      <div className="h-px bg-neutral-800 w-full my-3 mt-5"></div>

      <div className="flex flex-col gap-y-6 px-5">
        <div className="flex items-center gap-x-6">
          <RadioTransictionType
            name="transactionType"
            control={control}
            label="Income"
            value="income"
            color="#0ea5e9"
          />
          <RadioTransictionType
            name="transactionType"
            control={control}
            label="Expense"
            value="expense"
            color="#dc2626"
          />
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-6 items-center justify-center">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="date-picker" className="transaction-labels">
              Choose a Date
            </label>
            <DatePicker control={control} name="date" id="date-picker" />
          </div>

          <div className="flex flex-col gap-y-2">
            <label htmlFor="time" className="transaction-labels">
              Choose a Time
            </label>

            <div className="flex items-center transition relative duration-100 cursor-text border bg-white/5 hover:bg-white/10 border-neutral-700 hover:border-neutral-600 rounded-md">
              <Input
                type="time"
                {...register("time", { required: true })}
                className="outline-none border-none p-0 cursor-text px-2 h-full py-1.5"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <label htmlFor="select-category" className="transaction-labels">
              Select a Category
              {errors.category && (
                <span className="text-red-500 text-xs font-light italic">
                  Select Category.
                </span>
              )}
            </label>
            <SelectCategory
              name="category"
              control={control}
              isEdit={false}
              id="select-category"
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <label htmlFor="amount" className="transaction-labels">
              Enter an Amount
              {errors.amount && (
                <span className="text-red-500 text-xs font-light italic">
                  Amount must be at least 2.
                </span>
              )}
            </label>
            <div className="flex items-center relative border text-sm font-medium bg-white/5 border-neutral-700 rounded-sm p-1 py-1.5">
              <BiDollar className="text-neutral-400 size-5" />
              <div>
                <input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  {...register("amount", { required: true, min: 10 })}
                  className="outline-none w-full text-white/80"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="description" className="transaction-labels">
            Description
            {errors.description && (
              <span className="text-red-500 text-xs font-light italic">
                Fill the description.
              </span>
            )}
          </label>

          <input
            id="description"
            placeholder="Add details about this transaction"
            {...register("description", { required: true })}
            className="flex items-center text-sm tracking-wider font-light p-2 resize-none text-neutral-200 border outline-none duration-100 transition bg-white/5 border-neutral-700 hover:border-neutral-600 rounded-sm"
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <span>Payment Mode</span>
          <div className="flex items-center gap-x-6">
            <RadioPaymentMode
              label="Cash"
              value="cash"
              name="paymentMode"
              control={control}
            />
            <RadioPaymentMode
              label="Debit Card"
              value="debit card"
              name="paymentMode"
              control={control}
            />
            <RadioPaymentMode
              label="Credit Card"
              value="credit card"
              name="paymentMode"
              control={control}
            />
          </div>
        </div>

        <div className="flex justify-end w-full gap-x-2">
          <DialogPrimitive.Close className="bg-white/10 text-neutral-400 hover:bg-white/10 border-neutral-700 hover:text-white border transition duration-200 font-bold p-2 px-3.5 uppercase rounded-sm cursor-pointer">
            <button className="cursor-pointer" type="reset">
              cancel
            </button>
          </DialogPrimitive.Close>

          <button
            className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 transition duration-200 text-white p-2.5 px-4 text-xs font-bold uppercase rounded-sm cursor-pointer"
            type="submit"
          >
            add
          </button>
        </div>
      </div>
    </form>
  );
};
