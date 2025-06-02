import { cn } from "../utils/clsx";
import Sidebar from "../components/Sidebar";
import Transactions from "../components/Transactions";
import Filtersbar from "../components/Filtersbar";

const TransactionsPage = () => {
  return (
    <div
      className={cn(
        "flex min-h-screen max-h-full bg-neutral-950 text-neutral-50"
      )}
    >
      <Sidebar />

      <div className="flex flex-col w-full">
        <Transactions />
      </div>

      <Filtersbar />
    </div>
  );
};

export default TransactionsPage;
