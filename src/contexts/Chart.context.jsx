import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useTransaction } from "./Transaction.context";
import { categoryColors } from "../components/DoughnutChart";

const ChartContext = createContext();

export const useChart = () => {
  const context = useContext(ChartContext);
  if (!context) throw new Error("useChart must be used within ChartProvider");
  return context;
};

export const ChartProvider = ({ children }) => {
  const { transactions } = useTransaction();
  const [expenses, setExpenses] = useState(
    transactions.filter((tr) => tr.transactionType === "expense")
  );

  useEffect(() => {
    setExpenses(transactions.filter((tr) => tr.transactionType === "expense"));
  }, [transactions]);

  const categoryTotals = expenses.reduce((acc, tr) => {
    const category = tr.category;
    const amount = Number(tr.amount);
    acc[category] = (acc[category] || 0) + amount;
    return acc;
  }, {});

  const totalExpense = Object.values(categoryTotals).reduce((sum, amount) => {
    return sum + amount;
  });

  const categories = Object.keys(categoryTotals);
  const percentages = categories.map((category) => {
    const amount = categoryTotals[category];
    return totalExpense === 0 ? 0 : (amount / totalExpense) * 100;
  });

  const backgroundColors = categories.map((category) => {
    const colorObj = categoryColors.find((c) =>
      c.value === category.toLowerCase().replace(" ", "_") ? c.color : ""
    );
    return colorObj ? colorObj.color : "#AAAAAA";
  });

  const values = useMemo(
    () => ({ categories, percentages, backgroundColors, totalExpense }),
    [categories, percentages, backgroundColors, totalExpense]
  );

  return (
    <ChartContext.Provider value={values}>{children}</ChartContext.Provider>
  );
};
