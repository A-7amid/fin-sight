import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { dummyTransactions } from "../transactions";

/* eslint-disable-next-line react-refresh/only-export-components */
export const TransactionContext = createContext();

/* eslint-disable-next-line react-refresh/only-export-components */
export const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (!context)
    throw new Error("useTransaction must be used within a TransactionProvider");
  return context;
};

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(dummyTransactions);
  const [showForm, setShowForm] = useState(false);
  const [selectedType, setSelectedType] = useState("expense");
  const [selectedPayment, setSelectedPayment] = useState("cash");
  const [income, setIncome] = useState(
    transactions
      .filter((tr) => tr.transactionType === "income")
      .reduce((acc, tr) => acc + Number(tr.amount), 0)
  );
  const [expenses, setExpenses] = useState(
    transactions
      .filter((tr) => tr.transactionType === "expense")
      .reduce((acc, tr) => acc + Number(tr.amount), 0)
  );
  const [balance, setBalance] = useState(income - expenses);

  useEffect(() => {
    setIncome(
      transactions
        .filter((tr) => tr.transactionType === "income")
        .reduce((acc, tr) => acc + Number(tr.amount), 0)
    );
    setExpenses(
      transactions
        .filter((tr) => tr.transactionType === "expense")
        .reduce((acc, tr) => acc + Number(tr.amount), 0)
    );
  }, [transactions]);

  useEffect(() => {
    setBalance(income - expenses);
  }, [income, expenses]);

  const handleAddTransaction = useCallback(
    (newTransaction) => {
      setTransactions((prev) => [
        {
          ...newTransaction,
          category: newTransaction.category.replace("_", " "),
          selectedType: selectedType,
        },
        ...prev,
      ]);
      setShowForm(false);
    },
    [selectedType]
  );

  const handleDeleteTransaction = useCallback(
    (transactionId) => {
      setTransactions(
        transactions.filter((_, i) => i !== transactions.indexOf(transactionId))
      );
      console.log(transactions);
    },
    [transactions, setTransactions]
  );

  const values = useMemo(
    () => ({
      showForm,
      setShowForm,
      transactions,
      income,
      setIncome,
      setTransactions,
      selectedType,
      setSelectedType,
      selectedPayment,
      setSelectedPayment,
      handleAddTransaction,
      handleDeleteTransaction,
      expenses,
      setExpenses,
      balance,
      setBalance,
    }),
    [
      transactions,
      showForm,
      selectedType,
      income,
      selectedPayment,
      handleAddTransaction,
      handleDeleteTransaction,
      expenses,
      balance,
    ]
  );

  return (
    <TransactionContext.Provider value={values}>
      {children}
    </TransactionContext.Provider>
  );
};
