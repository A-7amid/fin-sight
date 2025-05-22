import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useChart } from "../contexts/Chart.context";

ChartJS.register(ArcElement, Tooltip, Legend);

export const categoryColors = [
  { value: "food", color: "#D14141" }, // Red
  { value: "transportation", color: "#3385D6" }, // Medium blue
  { value: "rent", color: "#D47B00" }, // Orange
  { value: "salary", color: "#1A9A8E" }, // Turquoise
  { value: "shopping", color: "#C1242F" }, // Cherry red
  { value: "housing", color: "#2E5978" }, // Steel blue
  { value: "utilities", color: "#4344AD" }, // Purple-blue
  { value: "bills", color: "#C56500" }, // Dark orange
  { value: "personal_care", color: "#5E8AB4" }, // Slate blue (replaced pink)
  { value: "extra_income", color: "#05A77C" }, // Green
  { value: "clothing", color: "#0D678B" }, // Navy blue
  { value: "insurance", color: "#1F4287" }, // Royal blue (replaced dark navy)
  { value: "business", color: "#48522A" }, // Olive green
  { value: "interests", color: "#D99C28" }, // Gold
  { value: "health_care", color: "#4682B4" }, // Steel blue (replaced light blue)
  { value: "miscellaneous", color: "#787878" }, // Gray
  { value: "tax", color: "#554994" }, // Indigo (replaced violet)
  { value: "education", color: "#2D6B8E" }, // Teal blue (replaced magenta)
];

const DoughnutChart = () => {
  const { categories, percentages, backgroundColors, totalExpense } =
    useChart();

  const data = {
    labels: categories,
    datasets: [
      {
        label: "Total Expenses",
        data: percentages,
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
