import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { dummyTransactions } from "../transactions";

const AddTransactionContext = createContext();

export const useAddTransaction = () => {
  const context = useContext(AddTransactionContext);
  if (!context)
    throw new Error(
      "useAddTransaction must be used within a AddTransactionProvider"
    );
  return context;
};

export const AddTransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(dummyTransactions);
  const [showForm, setShowForm] = useState(false);
  const [selectedType, setSelectedType] = useState("expense");
  const [selectedPayment, setSelectedPayment] = useState("cash");

  const handleAddTransaction = useCallback((newTransaction) => {
    setTransactions((prev) => [
      {
        ...newTransaction,
        category: newTransaction.category.replace("_", " "),
        selectedType: selectedType,
      },
      ...prev,
    ]);
    setShowForm(false);
  }, []);

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
    }),
    [
      transactions,
      showForm,
      selectedType,
      selectedPayment,
      handleAddTransaction,
    ]
  );

  return (
    <AddTransactionContext.Provider value={values}>
      {children}
    </AddTransactionContext.Provider>
  );
};
