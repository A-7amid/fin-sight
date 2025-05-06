import React from "react";
import Header from "./Header";
import StatCards from "./StatCards";
import DoughnutChart from "./DoughnutChart";
import VerticalBarChart from "./VerticalBarChart";
import AccountBalanceChart from "./AccountBalanceChart";
import RecentTransactions from "./RecentTransactions";

const Dashboard = () => {
  return (
    <div className="mx-auto bg-neutral-950 container px-6 py-3 gap-y-6 flex flex-col">
      <Header />

      <StatCards />

      <DoughnutChart />

      <div className="grid grid-cols-2 gap-x-6">
        <AccountBalanceChart />
        <VerticalBarChart />
      </div>

      <RecentTransactions />
    </div>
  );
};

export default Dashboard;
