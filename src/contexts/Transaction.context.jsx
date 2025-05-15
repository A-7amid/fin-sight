import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { dummyTransactions } from "../transactions";

/* eslint-disable-next-line react-refresh/only-export-components */
export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(dummyTransactions);
  const [showForm, setShowForm] = useState(false);
  const [selectedType, setSelectedType] = useState("expense");
  const [selectedPayment, setSelectedPayment] = useState("cash");

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
      transactions,
      setTransactions,
      showForm,
      setShowForm,
      selectedType,
      setSelectedType,
      selectedPayment,
      setSelectedPayment,
      handleAddTransaction,
      handleDeleteTransaction,
    }),
    [
      transactions,
      showForm,
      selectedType,
      selectedPayment,
      handleAddTransaction,
      handleDeleteTransaction,
    ]
  );

  return (
    <TransactionContext.Provider value={values}>
      {children}
    </TransactionContext.Provider>
  );
};

/* eslint-disable-next-line react-refresh/only-export-components */
export const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (!context)
    throw new Error(
      "useAddTransaction must be used within a AddTransactionProvider"
    );
  return context;
};
