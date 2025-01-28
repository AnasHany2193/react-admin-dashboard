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

import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Stacked = ({ width, height }) => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={{
        ...stackedPrimaryXAxis,
        labelStyle: {
          color: currentColor,
        },
      }}
      primaryYAxis={{
        ...stackedPrimaryYAxis,
        labelStyle: {
          color: currentColor,
        },
      }}
      chartArea={{ border: { width: 0 } }}
      tooltip={{
        enable: true,
        textStyle: {
          color: currentColor, // Tooltip text color
        },
      }}
      legendSettings={{
        // background: currentMode === "Dark" ? "#33373E" : "#FFF",
        textStyle: {
          color: currentColor, // Legend text color
        },
      }}
      background={currentMode === "Dark" ? "#33373E" : "#FFF"}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, i) => (
          <SeriesDirective key={i} {...item}></SeriesDirective>
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
