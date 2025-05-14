import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AddTransactionProvider } from "./contexts/AddTransaction.context.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <AddTransactionProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AddTransactionProvider>
  // </StrictMode>
);
