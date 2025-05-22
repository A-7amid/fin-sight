import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { TransactionProvider } from "./contexts/Transaction.context.jsx";
import { FilterProvider } from "./contexts/Filter.context.jsx";

createRoot(document.getElementById("root")).render(
  <TransactionProvider>
    <FilterProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FilterProvider>
  </TransactionProvider>
);
