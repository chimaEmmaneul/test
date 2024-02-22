"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dashboard,
  Data,
  Helper,
  Journey,
  Performance,
  Revenue,
  Setting,
} from "../Icons/Icon";
import { usePathname } from "next/navigation";
import Menu from "@/assets/Menu.svg";

const Sidebar = () => {
  const currentRoute = usePathname();

  const sidebarItems = [
    { name: "Dashboard", id: 1, path: "/", icon: Dashboard },
    {
      name: "Revenue Analytics",
      id: 2,
      path: "revenue-analytics",
      icon: Revenue,
    },
    { name: "Journeys", id: 3, path: "/journey", icon: Journey },
    { name: "Performance", id: 4, path: "performance", icon: Performance },
    { name: "Data platform", id: 6, path: "data-performance", icon: Data },
    { name: "Settings", id: 7, path: "settings", icon: Setting },
    { name: "Help", id: 8, path: "help", icon: Helper },
  ];

  return (
    <div className="bg-[#141923] w-56  ">
      <div className="mx-6  min-h-[100vh]  left-0 h-full ">
        <h1 className="text-white font-bold text-2xl  py-6 ">Company</h1>
        <div className="flex item-start gap-16 flex-col h-full ">
          <div className="flex flex-col items-start gap-4">
            {sidebarItems.map((item) => {
              const isActive = currentRoute === item.path;
              return (
                <Link
                  href={item.path}
                  className={`flex gap-2 w-full py-2   ${
                    item.name === "Data platform" &&
                    "border-b border-b-gray-600"
                  }`}
                >
                  <item.icon
                    className={`${isActive ? "text-white" : "text-[#5b5e66]"}`}
                  />
                  <button
                    className={`${isActive ? "text-white" : " text-[#5b5e66]"}`}
                  >
                    {item.name}
                  </button>
                  {/* {item.name === "Data platform" && <hr />} */}
                </Link>
              );
            })}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-center gap-4">
              <Image
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="user"
                width={40}
                height={40}
                className="rounded-[50%] block"
              />
              <h1 className="text-white">Bolu Adebayo</h1>
            </div>
            <Image src={Menu} alt="Menu" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
