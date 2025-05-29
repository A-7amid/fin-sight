import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useTransaction } from "./Transaction.context";

const categoryColors = [
  { value: "food", color: "#D14141" }, // Red
  { value: "transportation", color: "#3385D6" }, // Medium blue
  { value: "rent", color: "#D47B00" }, // Orange
  { value: "salary", color: "#1A9A8E" }, // Turquoise
  { value: "shopping", color: "#C1242F" }, // Cherry red
  { value: "housing", color: "#2E5978" }, // Steel blue
  { value: "utilities", color: "#4344AD" }, // Purple-blue
  { value: "bills", color: "#C56500" }, // Dark orange
  { value: "personal_care", color: "#5E8AB4" }, // Slate blue (replaced pink)
  { value: "extra_income", color: "#05A77C" }, // Green
  { value: "clothing", color: "#0D678B" }, // Navy blue
  { value: "insurance", color: "#1F4287" }, // Royal blue (replaced dark navy)
  { value: "business", color: "#48522A" }, // Olive green
  { value: "interests", color: "#D99C28" }, // Gold
  { value: "health_care", color: "#4682B4" }, // Steel blue (replaced light blue)
  { value: "miscellaneous", color: "#787878" }, // Gray
  { value: "tax", color: "#554994" }, // Indigo (replaced violet)
  { value: "education", color: "#2D6B8E" }, // Teal blue (replaced magenta)
];

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
    acc[tr.category.toLowerCase()] =
      (acc[tr.category.toLowerCase()] || 0) + Number(tr.amount);
    return acc;
  }, {});

  const totalExpense = Object.values(categoryTotals).reduce(
    (sum, amount) => sum + amount
  );

  const categories = Object.keys(categoryTotals);
  const categoryLabel = categories.map(
    (cat) => cat.charAt(0).toUpperCase() + cat.slice(1)
  );

  const categoriesPercentages = categories.map((category) => {
    return totalExpense === 0
      ? 0
      : (categoryTotals[category] / totalExpense) * 100;
  });

  const backgroundColors = categories.map((category) => {
    const colorObj = categoryColors.find((c) =>
      c.value === category.toLowerCase().replace(" ", "_") ? c.color : ""
    );
    return colorObj ? colorObj.color : "#AAAAAA";
  });

  const values = useMemo(
    () => ({
      categoryLabel,
      categoriesPercentages,
      backgroundColors,
      totalExpense,
    }),
    [categoryLabel, categoriesPercentages, backgroundColors, totalExpense]
  );

  return (
    <ChartContext.Provider value={values}>{children}</ChartContext.Provider>
  );
};
