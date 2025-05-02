// VerticalBarChart.jsx
import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const VerticalBarChart = () => {
  const labels = ["May", "Jun", "Jul", "Aug", "Sep"];
  const incomeData = [7200, 7000, 6400, 8200, 7500];
  const expenseData = [6800, 6200, 5800, 6600, 6000];

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "Income",
          data: incomeData,
          backgroundColor: "#8b5cf6", // purple
          borderRadius: 4,
        },
        {
          label: "Expense",
          data: expenseData,
          backgroundColor: "#3b82f6", // blue
          borderRadius: 4,
        },
      ],
    }),
    [labels, incomeData, expenseData]
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#595c5e" },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(255,255,255,0.1)",
        },
        ticks: {
          color: "#595c5e",
          callback: (val) => `$${val}`,
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#fff",
          boxWidth: 12,
          padding: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const label = ctx.dataset.label || "";
            const value = ctx.parsed.y;
            return `${label}: $${value.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <div className="size-[400px] rounded-lg gap-4 flex flex-col border border-neutral-800 px-5 py-5 bg-[#121216] w-full">
      <h2 className="font-semibold text-xl">Income - Expense</h2>
      <div className="h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default VerticalBarChart;
