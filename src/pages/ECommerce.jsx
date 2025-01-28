import { useEffect, useState } from "react";

import { GoDotFill } from "react-icons/go";

import Hero from "../data/hero-pattern.png";
import { Button, Stacked, SparkLine } from "../components";
import { earningData, SparklineAreaData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const ECommerce = () => {
  const { currentColor } = useStateContext();
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setKey((prev) => prev + 1); // Increment key to force re-render
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col gap-10 p-6">
      {/* Earnings Section */}
      <div className="flex flex-wrap justify-center lg:flex-nowrap">
        {/* Earnings */}
        <div className="flex justify-around w-full p-3 mx-8 bg-white shadow-xl lg:mx-32 dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl">
          <div className="flex flex-col items-center justify-center gap-4">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>

            <div>
              <Button
                color="white"
                bgColor={currentColor}
                text="Download"
                borderRadius="10px"
                size="base"
              />
            </div>
          </div>

          <img
            src={Hero}
            alt="hero-pattern"
            className="object-cover overflow-hidden rounded-xl"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
        {/* Earings Data */}
        <div className="flex flex-wrap items-center gap-6 justify-evenly">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="relative flex flex-col items-center justify-center p-10 overflow-hidden bg-white shadow-xl dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl group"
            >
              {/* Hover Background */}
              <div
                className="absolute inset-0 w-3 h-12 transition-all duration-300 ease-in-out bg-green-400 bg-opacity-75 rounded-br-xl group-hover:w-full group-hover:h-full group-hover:rounded-2xl"
                style={{ backgroundColor: item.iconBg }}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <button
                  type="button"
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg,
                  }}
                  className="hover:drop-shadow-xl  text-2xl opacity-0.8 rounded-full p-4"
                >
                  {item.icon}
                </button>

                {/* Amount */}
                <p className="mt-3">
                  <span className="text-lg font-semibold">{item.amount}</span>
                  <span
                    className={`text-sm ${
                      parseInt(item.percentage) < 0
                        ? "text-red-600"
                        : "text-green-600"
                    } ml-2`}
                  >
                    {item.percentage}
                  </span>
                </p>

                {/* Title */}
                <p className="mt-1 text-sm text-gray-400">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Revenue Updates */}
        <div className="grid w-full bg-white rounded-lg shadow-xl dark:text-gray-200 dark:bg-secondary-dark-bg">
          {/* Revenue Updates */}
          <div className="flex justify-between w-full p-4">
            <p className="text-xl font-semibold">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          {/* Budget & Expense & SparkLine & Chart */}
          <div className="flex flex-wrap gap-10 justify-evenly">
            {/* Budget & Expense & SparkLine */}
            <div className="m-4">
              {/* Budget */}
              <div>
                <p className="flex items-center">
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 ml-3 text-xs text-white bg-green-400 rounded-full cursor-pointer hover:drop-shadow-xl">
                    23%
                  </span>
                </p>
                <p className="mt-1 text-green-500">Budget</p>
              </div>

              {/* Expense */}
              <div className="mt-8">
                <p className="flex items-center">
                  <span className="text-3xl font-semibold">$48,438</span>
                </p>
                <p className="mt-1 text-green-500">Expense</p>
              </div>

              {/* Spark Line Component */}
              <div style={{ width: "100%", height: "auto" }}>
                <SparkLine
                  key={key}
                  id="sparkline"
                  type="Line"
                  height="80px"
                  width="100%" // Let it adjust to container
                  data={SparklineAreaData}
                  color={currentColor}
                  currentColor={currentColor}
                />
              </div>

              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>

            {/* Chart Component */}
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECommerce;
