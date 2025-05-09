import React, { useState } from "react";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import {
  SelectedTypeProvider,
  ShowFormProvider,
} from "./contexts/AddTransaction.context.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <SelectedTypeProvider>
    <ShowFormProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShowFormProvider>
  </SelectedTypeProvider>
  // </StrictMode>
);
