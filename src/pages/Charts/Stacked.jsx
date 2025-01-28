import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";

const Stacked = () => {
  const { currentMode, currentColor } = useStateContext();

  return (
    <div className="p-10 m-4 mt-16 bg-white shadow-xl md:m-10 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Stacked" title="Revenue Breakdown" />

      <ChartComponent
        id="charts"
        height="420px"
        primaryXAxis={{
          ...stackedPrimaryXAxis,
          labelStyle: {
            color: currentColor, // X-axis text color
          },
        }}
        primaryYAxis={{
          ...stackedPrimaryYAxis,
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
        <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {stackedCustomSeries.map((item, i) => (
            <SeriesDirective key={i} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Stacked;
