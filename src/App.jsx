import React from "react";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";

import { Route, Routes } from "react-router-dom";
import TransactionsPage from "./components/TransactionsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transactions" element={<TransactionsPage />} />
      <Route path="/about" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
