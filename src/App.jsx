import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import PageNotFound from "./routes/PageNotFound";
import TransactionsPage from "./routes/TransactionsPage";
import About from "./routes/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transactions" element={<TransactionsPage />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
