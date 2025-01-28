import React from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";

const Bar = () => {
  const { currentMode, currentColor } = useStateContext();

  return (
    <div className="p-10 m-4 mt-16 bg-white shadow-xl md:m-10 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Bar" title="Olympic Medal Counts - RIO" />

      <ChartComponent
        id="charts"
        height="420px"
        primaryXAxis={{
          ...barPrimaryXAxis,
          labelStyle: {
            color: currentColor, // X-axis text color
          },
        }}
        primaryYAxis={{
          ...barPrimaryYAxis,
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
        <Inject
          services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}
        />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, i) => (
            <SeriesDirective key={i} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;
