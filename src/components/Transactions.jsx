import { DataTable } from "./DataTable";
import MobileNavbar from "./MobileNavbar";

const Transactions = () => {
  return (
    <div className="flex flex-col mx-auto container w-full h-full">
      <MobileNavbar showFilters={true} />
      {/* <h2 className="font-medium text-sm mt-5 flex md:hidden px-5">
        All Transactions
      </h2> */}

      <div className="bg-[#121216] flex flex-col md:py-5 py-2 mx-3 md:mx-5 gap-y-4 my-5 rounded-lg border border-neutral-800">
        <h2 className="md:font-semibold md:text-xl text-md font-medium px-5">
          All Transactions
        </h2>
        {/* <div className="h-px w-full bg-neutral-800"></div> */}

        <DataTable />
      </div>
    </div>
  );
};

export default Transactions;
