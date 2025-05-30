import React, { useEffect } from "react";
import { BiDollar } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";
import DatePicker from "./DatePicker";
import RadioTransictionType from "./RadioTransictionType";
import { Input } from "@/components/ui/input";
import SelectCategory from "./SelectCategory";
import RadioPaymentMode from "./RadioPaymentMode";
import dayjs from "dayjs";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { useForm } from "react-hook-form";
import { useTransaction } from "../contexts/Transaction.context";

const AddTransactionForm = () => {
  const { showForm, setShowForm, handleAddTransaction } = useTransaction();
  const {
    handleSubmit,
    register,
    control,
    formState,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      time: dayjs().format("HH:mm"),
      date: dayjs().format("YYYY-MM-DD"),
      description: "",
      amount: "",
      category: "",
      paymentMode: "cash",
      transactionType: "expense",
    },
  });

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

  const handleReset = () => {
    reset({
      time: dayjs().format("HH:mm"),
      date: dayjs().format("YYYY-MM-DD"),
      paymentMode: "cash",
      transactionType: "expense",
    });
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      handleReset();
    }
  }, [formState, reset]);

  const onSubmit = (data) => {
    handleAddTransaction(data);
  };

  return (
    <>
      {showForm && (
        <div className="bg-black/70 flex items-center justify-center w-screen h-full absolute top-0 left-0">
          <form
            data-aos="zoom-in-up"
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[#121216] text-white/70 flex flex-col py-4 border border-neutral-800 rounded-sm md:w-[27%]"
          >
            <div className="flex items-center px-5">
              <h3 className="font-bold text-xl text-white/85">
                New <span className="text-[#0ea5e9]">Transaction</span>
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
                    {/* <Clock className="size-4 " /> */}
                    <Input
                      type="time"
                      {...register("time", { required: true })}
                      className="outline-none border-none p-0 cursor-text px-2 h-full py-1.5"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-y-2">
                  <label
                    htmlFor="select-category"
                    className="transaction-labels"
                  >
                    Select a Category
                    {errors.category && (
                      <span className="text-red-500 text-xs font-light italic">
                        Select a category.
                      </span>
                    )}
                  </label>
                  <SelectCategory
                    name="category"
                    control={control}
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
                <button
                  type="reset"
                  onClick={() => {
                    handleReset();
                    setShowForm(false);
                  }}
                  className="bg-white/10 text-neutral-400 hover:bg-white/10 border-neutral-700 hover:text-white border transition duration-200 text-xs font-bold p-2.5 px-4 uppercase rounded-sm cursor-pointer"
                >
                  cancel
                </button>
                <button
                  type="submit"
                  className=" bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 transition duration-200 text-white p-2.5 px-4 text-xs font-bold uppercase rounded-sm cursor-pointer"
                >
                  add
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AddTransactionForm;
