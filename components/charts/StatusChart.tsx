"use client";



import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
} from "recharts";

interface ChartData {
  status: string;
  total: number;
}

interface StatusChartProps {
  title: string;
  data: ChartData[];
  color?: string;
}

export default function StatusChart({
  title,
  data,
  color = "#2563EB",
}: StatusChartProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-md">

      {/* Chart Title */}
      <h2
        className="mb-4 text-lg font-semibold"
        style={{ color }}
      >
        {title}
      </h2>

      <ResponsiveContainer
        width="100%"
        height={180}
      >
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: -20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#E5E7EB"
          />

          <XAxis
            dataKey="status"
            tick={{ fontSize: 12 }}
          />

          <YAxis
            tick={{ fontSize: 12 }}
          />

          <Tooltip />

          <Bar
            dataKey="total"
            fill={color}
            radius={[6, 6, 0, 0]}
            maxBarSize={35}
          >
            <LabelList
              dataKey="total"
              position="top"
              fontSize={11}
            />
          </Bar>

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}