import React from "react";

const TransactionsNav = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <h2 className="font-semibold text-2xl">All Transactions</h2>

      <div>
        <input type="text" />

        <button className="px-4 py-3 flex bg-blue-500 hover:bg-blue-600 transition duration-200 cursor-pointer uppercase font-medium text-sm rounded-sm">
          add transaction
        </button>
      </div>
    </div>
  );
};

export default TransactionsNav;
