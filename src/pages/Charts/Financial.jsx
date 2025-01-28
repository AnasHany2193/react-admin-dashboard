import React from "react";

import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair,
} from "@syncfusion/ej2-react-charts";
import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../../data/dummy";

const returnValue = financialChartData.filter((value) =>
  value.x >= new Date("2017, 1, 1") ? (value.x, value.high, value.low) : null
);

const Financial = () => {
  const { currentMode, currentColor } = useStateContext();

  return (
    <div className="p-10 m-4 mt-16 bg-white shadow-xl md:m-10 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Financial" title="APPLE Historical" />

      <ChartComponent
        id="charts"
        height="420px"
        primaryXAxis={{
          ...FinancialPrimaryXAxis,
          labelStyle: {
            color: currentColor, // X-axis text color
          },
        }}
        primaryYAxis={{
          ...FinancialPrimaryYAxis,
          labelStyle: {
            color: currentColor, // Y-axis text color
          },
        }}
        chartArea={{ border: { width: 0 } }}
        tooltip={{
          enable: true,
          shared: true,
          textStyle: {
            color: currentColor, // Tooltip text color
          },
        }}
        crosshair={{
          enable: true,
          lineType: "Horizontal",
          line: { width: 0 },
        }}
        background={currentMode === "Dark" ? "#33373E" : "#FFF"}
        legendSettings={{
          visible: true,
          textStyle: {
            color: currentColor, // Legend text color
          },
        }}
      >
        <Inject
          services={[
            HiloSeries,
            Tooltip,
            DateTime,
            Logarithmic,
            Crosshair,
            Zoom,
          ]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={returnValue}
            xName="x"
            yName="low"
            name="Apple Inc"
            type="Hilo"
            low="low"
            high="high"
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Financial;
