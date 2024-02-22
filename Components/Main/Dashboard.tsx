"use client";
import React from "react";
import Image from "next/image";
import Search from "@/assets/search.svg";
import Stats from "../Stats/Stats";
import { TableComponent } from "../TableComponents/Table";
import { TAABLE_BASE_URL, payPointCol } from "@/utils/constants";
import useApiCall from "@/utils/makeApiCalls";
import { CampaignData, ExpenseData } from "@/types/type";
import DonoughtChart from "../Donought/Donought";
import DualYAxisLineChart from "../LineChart/LineChart";

const Dashboard = () => {
  let tableData;
  let donoughtChartData;
  let lineChartData;

  const { data, isLoading, error } = useApiCall(
    `${TAABLE_BASE_URL}/api/campaign-performance`
  );

  const { data: chartData, isLoading: Loading } = useApiCall(
    `${TAABLE_BASE_URL}/api/top-revenue-channel`
  );
  const { data: lineChart } = useApiCall(
    `${TAABLE_BASE_URL}/api/deals-and-revenue`
  );

  if (lineChart) {
    const xAxis = lineChart.map((item: any) => item.month);
    const lya = lineChart.map((item: any) => item.deals);
    const rya = lineChart.map((item: any) => item.revenue);
    lineChartData = { xAxis, lya, rya };
  }
  // console.log(lineChaartData);

  if (chartData) {
    const keys = Object.keys(chartData);

    donoughtChartData = keys.map((key) => ({
      name: key,
      value: chartData[key],
    }));
  }

  if (data) {
    tableData = data.map((item: CampaignData, index: number) => ({
      ...item,
      key: index + 1,
      No: index + 1,
    }));
  }

  return (
    <section className="w-full h-full">
      {isLoading ? (
        <h1>loading</h1>
      ) : (
        <main className="w-full h-full px-6">
          <div className="flex justify-between items-center px-6">
            <h1 className="py-6 font-bold text-2xl">Dashboard</h1>
            <div className="flex gap-4 border border-solid border-gray-100 p-1">
              <Image src={Search} alt="Search..." className="" />
              <input
                type="text"
                placeholder="Search..."
                className="outline-none border-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 border border-solid border-gray-100 rounded-lg h-full">
            <div className="h-full">
              <Stats />
            </div>
            <div className="h-full">
              <DualYAxisLineChart data={lineChartData} />
            </div>
          </div>
          <div className="my-4 flex flex-col lg:flex-row gap-4">
            <div className="border border-solid border-gray-100 rounded-lg flex-[3] ">
              <div className="flex justify-between border border-solid border-gray-100 px-6">
                <h1 className="font-bold text-lg py-2">Campaign Performance</h1>
                <div className="flex gap-2 my-2 max-w-[10rem]">
                  <Image
                    src={Search}
                    alt="Search..."
                    className="bg-gray-50 "
                    height={20}
                    width={20}
                  />
                  <input
                    type="text "
                    placeholder="channels"
                    className="bg-gray-50 border-none outline-none inline-block w-full"
                  />
                </div>
              </div>
              <div className=" px-6 ">
                <TableComponent rows={tableData} columns={payPointCol} />
              </div>
            </div>
            <div className="border border-solid border-gray-100 rounded-lg flex-[2] ">
              <DonoughtChart data={donoughtChartData} />
            </div>
          </div>
        </main>
      )}
    </section>
  );
};

export default Dashboard;
