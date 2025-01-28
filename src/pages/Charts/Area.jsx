import React from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";

import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";

import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const Area = () => {
  const { currentMode, currentColor } = useStateContext();

  return (
    <div className="p-10 m-4 mt-16 bg-white shadow-xl md:m-10 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Area" title="Inflation Rate in Percentage" />

      <ChartComponent
        id="areaChart"
        height="420px"
        primaryXAxis={{
          ...areaPrimaryXAxis,
          labelStyle: {
            color: currentColor, // X-axis text color
          },
        }}
        primaryYAxis={{
          ...areaPrimaryYAxis,
          labelStyle: {
            color: currentColor, // Y-axis text color
          },
        }}
        chartArea={{ border: { width: 0 } }}
        tooltip={{
          enable: true,
          textStyle: {
            color: currentColor, // Tooltip text color
          },
        }}
        background={currentMode === "Dark" ? "#33373E" : "#FFF"}
        legendSettings={{
          visible: true,
          textStyle: {
            color: currentColor, // Legend text color
          },
        }}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, i) => (
            <SeriesDirective key={i} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Area;
