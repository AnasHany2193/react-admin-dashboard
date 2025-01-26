import React from "react";

import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

import { Button, Stacked, Pie, SparkLine } from "../components";

import {
  earningData,
  ecomPieChartData,
  SparklineAreaData,
} from "../data/dummy";

import Hero from "../data/hero-pattern.png";

import { useStateContext } from "../contexts/ContextProvider";

const ECommerce = () => {
  return (
    <div className="mt-12">
      {/* Earnings Section */}
      <div className="flex flex-wrap justify-center lg:flex-nowrap">
        {/* Earnings */}
        <div className="flex justify-around w-full p-3 mx-8 bg-white shadow-md lg:mx-32 dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl">
          <div className="flex flex-col items-center justify-center gap-4">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>

            <div>
              <Button
                color="white"
                bgColor="blue"
                text="Download"
                borderRadius="10px"
                size="base"
              />
            </div>
          </div>

          <img
            src={Hero}
            alt="hero-pattern"
            className="object-cover overflow-hidden rounded-r-xl"
          />
        </div>
      </div>

      {/* Earings Data */}
      <div className="flex flex-wrap items-center justify-center gap-1 m-3">
        {earningData.map((item) => (
          <div
            key={item.title}
            className="p-4 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 pt-9 rounded-2xl"
          >
            {/* Icon */}
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="hover:drop-shadow-xl text-2xl opacity-0.8 rounded-full p-4"
            >
              {item.icon}
            </button>

            {/* Amount */}
            <p className="mt-3">
              <span className="text-lg font-semibold">{item.amount}</span>
              <span className={`text-sm text-${item.pcColor} ml-2`}>
                {item.percentage}
              </span>
            </p>

            {/*  */}
            <p className="mt-1 text-sm text-gray-400">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ECommerce;
