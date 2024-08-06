import * as React from "react";
import Stack from "@mui/material/Stack";
import pub from "./assets/pub.json";
import { LineChart } from "@mui/x-charts/LineChart";
const data = [5, 7, 9, 4, 7, 9, 0, 5, 3];
const xData = [7, 4, 8, 3, 9, 3, 6, 7, 3];
// fetch(
//   "https://pub-7be1d45c4a744f86846c80e90df909eb.r2.dev/files/2a2cf2b5-ea1c-473e-8c3b-95d93ae32f73.json"
// )
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// pub.forEach((value, index) => {
//   if (index >= 10) {
//     return;
//   }
//   data.push(value.value);
//   xData.push(value.time % 100000);
// });
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
