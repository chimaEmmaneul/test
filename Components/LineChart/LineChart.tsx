import React from "react";
import ReactECharts from "echarts-for-react";

type DualYAxisLineChartProps = {
  data: any;
};
const DualYAxisLineChart = ({ data }: DualYAxisLineChartProps) => {
  const { xAxis, lya, rya } = data;

  const option = {
    title: {
      text: "Deals & Revenue",
      left: "center",
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: xAxis,
    },
    yAxis: [
      {
        type: "value",
        name: "Left Y-Axis",
        position: "left",
      },
      {
        type: "value",
        name: "Right Y-Axis",
        position: "right",
      },
    ],
    series: [
      {
        name: "Line 1",
        type: "line",
        yAxisIndex: 0, // Use the left y-axis
        data: lya,
      },
      {
        name: "Line 2",
        type: "line",
        yAxisIndex: 1, // Use the right y-axis
        data: rya,
      },
    ],
  };

  return (
    <div className="h-full w-full max-w-[15rem] min-w-full overflow-auto text-center">
      {/* <h1>helo</h1> */}
      <ReactECharts
        option={option}
        style={{
          maxHeight: "300px !important",
          //   marginLeft: "1rem",
          maxWidth: "400px",
          minWidth: "100%",
          overflow: "auto",
        }}
      />
    </div>
  );
};

export default DualYAxisLineChart;
