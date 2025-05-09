import { createContext, useContext, useMemo, useState } from "react";

const SelectedTypeContext = createContext();

const ShowFormContext = createContext();

export const useSelectedType = () => {
  const context = useContext(SelectedTypeContext);
  if (!context)
    throw new Error(
      "useSelectedType must be used within a SelectedTypeProvider"
    );
  return context;
};

export const useShowForm = () => {
  const context = useContext(ShowFormContext);
  if (!context)
    throw new Error("useShowForm must be used within a ShowFormProvider");
  return context;
};

export const SelectedTypeProvider = ({ children }) => {
  const [selectedType, setSelectedType] = useState("expense");

  const values = useMemo(
    () => ({ selectedType, setSelectedType }),
    [selectedType]
  );

  return (
    <SelectedTypeContext.Provider value={values}>
      {children}
    </SelectedTypeContext.Provider>
  );
};

export const ShowFormProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);

  const values = useMemo(() => ({ showForm, setShowForm }), [showForm]);

  return (
    <ShowFormContext.Provider value={values}>
      {children}
    </ShowFormContext.Provider>
  );
};
