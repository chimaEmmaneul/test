import React, { useState } from "react";
import Menu from "@/assets/Menu.svg";
import Image from "next/image";
import useApiCall from "@/utils/makeApiCalls";
import { BASE_URL } from "@/utils/constants";

type Props = {};
type StatsDetailsProps = {
  id: number;
  name: string;
  value: string;
  percent: string;
  bcgColor?: boolean;
}[];

const Stats = (props: Props) => {
  let arrayData;
  const { data, error, isLoading } = useApiCall(
    `${BASE_URL}/api/business-metrics`
  );

  if (data) {
    const { visitors, contacts, attributableDeals, revenue } = data;
    arrayData = [
      { ...visitors, title: "visitors" },
      { ...contacts, title: " contacts" },
      { ...attributableDeals, title: "attrubutableDeals" },
      { ...revenue, title: "revenue" },
    ];
  }

  // const StatsDetails: StatsDetailsProps = [
  //   {
  //     id: 1,
  //     name: "Visitors",
  //     value: "$30794",
  //     percent: "%22",
  //     bcgColor: true,
  //   },
  //   { id: 2, name: "Contacts", value: "$30794", percent: "%22" },
  //   { id: 3, name: "Atributable Deals", value: "$30794", percent: "%34.5" },
  //   { id: 4, name: "Revenues", value: "$30794", percent: "%15.2" },
  // ];

  return (
    <section className="border border-solid border-gray-100 h-full">
      {isLoading ? (
        <div className="h-24 flex items-center justify-center">
          <h2 className="scaling-element">Please wait</h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {arrayData?.map((item) => {
            return (
              <div
                key={item.id}
                className={`border border-solid border-gray-100 px-2 py-2 ${
                  item.title === "visitors" && "bg-[#defec0]"
                }`}
              >
                <div className="flex justify-between">
                  <p className="my-2 text-xl capitalize">{item.title}</p>
                  <Image src={Menu} alt={item.name} />
                </div>
                <p className="font-bold text-2xl my-2">{`$${item.count}`}</p>
                <p
                  className={` rounded-xl w-fit p-1 text-[10px] ${
                    item.title === "visitors" ? "bg-white" : "bg-[#e5fdc2]"
                  }`}
                >
                  {`$${item.changePercentage}`}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Stats;
