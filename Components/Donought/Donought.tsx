import React from "react";
import ReactECharts from "echarts-for-react";
import { PieChartOption } from "@/types/type";

type DonoughtChartProp = {
  data?: { name: string; value: any }[] | undefined;
};

const DonoughtChart = ({ data = [] }: DonoughtChartProp) => {
  // console.log("data", data);

  const option: PieChartOption = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Top Revenue",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          // borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
          formatter: "{c}%",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data,
      },
    ],
  };

  return (
    <div className="h-full w-full max-w-[15rem] min-w-full overflow-auto text-center">
      <h2 className="text-center font-bold text-2xl mt-2">Top Revenues</h2>
      {data && <ReactECharts option={option} />}
    </div>
  );
};

export default DonoughtChart;
