import * as React from "react";
import Stack from "@mui/material/Stack";
import pub from "./assets/pub.json";
import { LineChart } from "@mui/x-charts/LineChart";

const data = [
  15650496, 1565136, 15652224, 15653088, 15653952, 1565568, 15656544, 15657408,
  15658272,
];
const xData = [
  "0.0152077",
  "0153183",
  "0.0152919",
  "0.0153575",
  "0.0153234",
  "0.015304",
  "0.0152791",
  "0.0154032",
  "0.0151321",
];

export default function BasicLineChart() {
  async function getData(url) {
    try {
      const response = await fetch(url);
      let data = [];
      if (response.status == 200) {
        data = await response.json();
      }

      return data;
    } catch (err) {
      console.log(err);
    }
  }
  getData(pub);
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
