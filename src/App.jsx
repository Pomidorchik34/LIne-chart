import * as React from "react";
import Stack from "@mui/material/Stack";
import pub from "./assets/pub.json";
import { LineChart } from "@mui/x-charts/LineChart";
const data = [];
const xData = [];
pub.forEach((value, index) => {
  xData.push(value.time);
  data.push(value.value);
});
export default function BasicLineChart() {
  return (
    <>
      <Stack className="line" sx={{ width: "100%" }}>
        <LineChart
          xAxis={[{ data: xData, scaleType: "point" }]}
          series={[{ data, showMark: false, area: true }]}
          height={200}
          margin={{ top: 10, bottom: 20 }}
        />
        <LineChart
          xAxis={[{ data: xData, scaleType: "point" }]}
          series={[{ data, showMark: false, area: true, connectNulls: true }]}
          height={200}
          margin={{ top: 10, bottom: 20 }}
        />
      </Stack>
      <h1>
        Line chart <br />
      </h1>
      <p className="lorem">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim molestiae
        porro incidunt, quia laborum quo eaque dolorem, quidem officiis
        quibusdam id minus architecto a fuga iure sit. Et omnis, qui atque
        placeat asperiores hic repudiandae deleniti accusamus rem exercitationem
        sapiente ipsum saepe fugiat illum iste ex quasi dolorem aperiam! Iusto?
      </p>
    </>
  );
}
