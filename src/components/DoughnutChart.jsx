import React from "react";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { BsBorderWidth } from "react-icons/bs";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: [
      "Mortgage / Rent",
      "Food",
      "Utilities",
      "Bills",
      "Shopping",
      "Transportation",
      "Insurance",
      "Health Care",
      "Clothing",
      "Others",
    ],
    datasets: [
      {
        label: "Total Expenses",
        data: [6.52, 20, 35, 15, 23.48, 10, 12, 8, 5, 4],
        backgroundColor: [
          "#10b981",
          "#eab308",
          "#f97316",
          "#ef4444",
          "#3b82f6",
          "#f472b6",
          "#a855f7",
          "#6366f1",
          "#4f46e5",
          "#06b6d4",
        ],
        borderColor: "#121216",
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "65%",

    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          boxWidth: 14,
          textColor: "white",
        },

        position: "right",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div className="size-[400px] rounded-lg flex flex-col border border-neutral-800 px-5 py-5 bg-[#121216] w-full">
      <div className="flex flex-col">
        <h2 className="font-semibold md:text-xl text-md">Total Expenses</h2>
        <span className="text-xs text-zinc-400 font-medium">
          May 31 - Nov 30
        </span>
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <Doughnut options={options} data={data} />
      </div>
    </div>
  );
};

export default DoughnutChart;
