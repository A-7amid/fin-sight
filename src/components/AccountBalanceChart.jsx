import React from "react";
import { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AccountBalanceChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const balanceData = [
      { month: "Jun", balance: 300 },
      { month: "Jul", balance: 600 },
      { month: "Aug", balance: 500 },
      { month: "Sep", balance: 800 },
      { month: "Oct", balance: 200 },
      { month: "Nov", balance: 100 },
    ];

    setData(balanceData);
  }, []);

  return (
    // <div>
    //   <h2 className="text-xl font-semibold flex flex-col">Account - Balance</h2>

    //   <ResponsiveContainer width={600} height={380}>
    //     <AreaChart
    //       width={500}
    //       height={400}
    //       data={data}
    //       margin={{
    //         top: 10,
    //         right: 30,
    //         left: 0,
    //         bottom: 0,
    //       }}
    //     >
    //       <CartesianGrid />
    //       <XAxis dataKey="month" />
    //       <YAxis />
    //       <Tooltip />
    //       <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    //     </AreaChart>
    //   </ResponsiveContainer>
    // </div>

    <div className="size-[400px] text-xs rounded-lg gap-4 flex flex-col border border-neutral-800 px-5 py-5 bg-[#121216] w-full">
      <div className="font-bold text-lg mb-4">Account - Balance</div>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#35A2EB" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#35A2EB" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            tick={{ color: "#595c5e" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            dataKey="balance"
            tick={{ color: "#595c5e" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="rgba(255, 255, 255, 0.1)"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1F2937",
              border: "none",
              borderRadius: "4px",
              color: "white",
            }}
            formatter={(value) => [`$${value}`, "Balance"]}
          />
          <Area
            type="monotone"
            dataKey="balance"
            stroke="#35A2EB"
            fillOpacity={1}
            fill="url(#colorBalance)"
            strokeWidth={2}
            dot={{ stroke: "#35A2EB", strokeWidth: 2, r: 4, fill: "white" }}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
