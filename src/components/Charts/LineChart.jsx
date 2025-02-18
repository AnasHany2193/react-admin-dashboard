import React from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  LineSeries,
} from "@syncfusion/ej2-react-charts";

import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const LineChart = () => {
  const { currentMode, currentColor } = useStateContext();

  return (
    <ChartComponent
      id="lineChart"
      height="420px"
      primaryXAxis={{
        ...LinePrimaryXAxis,
        labelStyle: {
          color: currentColor, // X-axis text color
        },
      }}
      primaryYAxis={{
        ...LinePrimaryYAxis,
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
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, i) => (
          <SeriesDirective key={i} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
