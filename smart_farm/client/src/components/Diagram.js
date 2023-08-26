import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 1000, 200, 650, 1500, 4000];
const xLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const Diagram = () => {
  return (
    <LineChart
      width={500}
      height={300}
      series={[{ data: uData, label: "Traktor", area: true }]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
      sx={{
        ".MuiLineElement-root, .MuiMarkElement-root": {
          display: "none",
        },
      }}
    />
  );
}
