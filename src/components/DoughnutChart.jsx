import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useChart } from "../contexts/Chart.context";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const {
    categoryLabel,
    categoriesPercentages,
    backgroundColors,
    totalExpense,
  } = useChart();

  const data = {
    labels: categoryLabel,
    datasets: [
      {
        label: "Total Expenses",
        data: categoriesPercentages,
        backgroundColor: backgroundColors,
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
          color: "white",
        },
        position: "right",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) =>
            `${tooltipItem.label}: ${tooltipItem.raw?.toFixed(2)}%`,
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
        {totalExpense === 0 ? (
          <div className="text-zinc-400">No expenses to display.</div>
        ) : (
          <Doughnut options={options} data={data} />
        )}
      </div>
    </div>
  );
};

export default DoughnutChart;
