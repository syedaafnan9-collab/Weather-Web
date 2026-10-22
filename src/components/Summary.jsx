import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import React from "react";

function Summary() {
  const data = [
    { day: "Mon", temp: 24 },
    { day: "Tue", temp: 27 },
    { day: "Wed", temp: 22 },
    { day: "Thu", temp: 29 },
    { day: "Fri", temp: 31 },
    { day: "Sat", temp: 28 },
    { day: "Sun", temp: 26 },
  ];

  return (
    <>
      <div className="h-[450px] w-[930px] rounded-3xl border border-white/40 bg-black/10 p-5">
        <h2 className="text-3xl font-light text-white text-center mb-6">
          Weekly Summary
        </h2>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <XAxis
              dataKey="day"
              stroke="rgba(255,255,255,0.7)"
              tick={{ fill: "#fff" }}
            />

            <YAxis stroke="rgba(255,255,255,0.7)" tick={{ fill: "#fff" }} />

            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "10px",
                color: "#fff",
              }}
              labelStyle={{ color: "#fff" }}
            />

            <Line
              type="monotone"
              dataKey="temp"
              stroke="#ffffff"
              strokeWidth={3}
              dot={{
                fill: "#ffffff",
                stroke: "#ffffff",
                r: 4,
              }}
              activeDot={{
                r: 7,
                fill: "#ffffff",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default Summary;
