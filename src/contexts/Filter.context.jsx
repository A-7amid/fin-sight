import dayjs from "dayjs";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { dummyTransactions } from "../transactions";

/* eslint-disable-next-line react-refresh/only-export-components */
export const FilterContext = createContext();

/* eslint-disable-next-line react-refresh/only-export-components */
export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error("useFilter must be used within a FilterProvider");
  return context;
};

export const FilterProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(dummyTransactions);

  const [filteredTrs, setFilteredTrs] = useState();
  const [isFilter, setIsFilter] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minAmount, setMinAmount] = useState(2);
  const [maxAmount, setMaxAmount] = useState(6000);
  const [isIncome, setIsIncome] = useState(true);
  const [isExpense, setIsExpense] = useState(true);
  const [paymentMode, setPaymentMode] = useState({
    cash: true,
    creditCard: true,
    debitCard: true,
  });
  const [date, setDate] = useState({
    from: dayjs().format("HH:mm"),
    to: dayjs().format("HH:mm"),
  });

  const handleFilter = useCallback(() => {
    setIsFilter(true);
    setFilteredTrs(
      transactions.filter((tr) => {
        const amountInRange =
          Number(tr.amount) >= minAmount && Number(tr.amount) <= maxAmount;

        const categoryMatch =
          selectedCategories.length === 0 ||
          selectedCategories.some(
            (cat) => cat.label.toLowerCase() === tr.category.toLowerCase()
          );

        let transactionTypeMatch = false;
        if (isIncome && isExpense) {
          transactionTypeMatch =
            tr.transactionType === "income" || tr.transactionType === "expense";
        } else if (isIncome) {
          transactionTypeMatch = tr.transactionType === "income";
        } else if (isExpense) {
          transactionTypeMatch = tr.transactionType === "expense";
        }

        let paymentModeMatch = false;
        if (
          paymentMode.cash &&
          paymentMode.creditCard &&
          paymentMode.debitCard
        ) {
          paymentModeMatch =
            tr.paymentMode.toLowerCase() == "cash" ||
            tr.paymentMode.toLowerCase() == "debit card" ||
            tr.paymentMode.toLowerCase() == "credit card";
        } else if (paymentMode.cash && paymentMode.creditCard) {
          paymentModeMatch =
            tr.paymentMode.toLowerCase() == "cash" ||
            tr.paymentMode.toLowerCase() == "credit card";
        } else if (paymentMode.debitCard && paymentMode.creditCard) {
          paymentModeMatch =
            tr.paymentMode.toLowerCase() == "debit card" ||
            tr.paymentMode.toLowerCase() == "credit card";
        } else if (paymentMode.cash && paymentMode.debitCard) {
          paymentModeMatch =
            tr.paymentMode.toLowerCase() == "cash" ||
            tr.paymentMode.toLowerCase() == "debit card";
        } else if (paymentMode.cash)
          paymentModeMatch = tr.paymentMode.toLowerCase() == "cash";
        else if (paymentMode.debitCard)
          paymentModeMatch = tr.paymentMode.toLowerCase() == "debit card";
        else if (paymentMode.creditCard)
          paymentModeMatch = tr.paymentMode.toLowerCase() == "credit card";

        return (
          amountInRange &&
          categoryMatch &&
          transactionTypeMatch &&
          paymentModeMatch
        );
      })
    );
  }, [
    transactions,
    paymentMode,
    selectedCategories,
    minAmount,
    maxAmount,
    isExpense,
    isIncome,
    setFilteredTrs,
  ]);

  const values = useMemo(
    () => ({
      selectedCategories,
      date,
      setSelectedCategories,
      setDate,
      minAmount,
      isIncome,
      setIsIncome,
      isFilter,
      isExpense,
      setIsExpense,
      transactions,
      setTransactions,
      setIsFilter,
      paymentMode,
      setPaymentMode,
      handleFilter,
      setMinAmount,
      filteredTrs,
      setFilteredTrs,
      maxAmount,
      setMaxAmount,
    }),
    [
      selectedCategories,
      minAmount,
      maxAmount,
      isFilter,
      transactions,
      filteredTrs,
      isIncome,
      paymentMode,
      handleFilter,
      isExpense,
      date,
    ]
  );

  return (
    <FilterContext.Provider value={values}>{children}</FilterContext.Provider>
  );
};
