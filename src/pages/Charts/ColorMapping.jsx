import React from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  RangeColorSettingsDirective,
  RangeColorSettingDirective,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  colorMappingData,
  rangeColorMapping,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
} from "../../data/dummy";

const ColorMapping = () => {
  const { currentMode, currentColor } = useStateContext();

  return (
    <div className="p-10 m-4 mt-16 bg-white shadow-xl md:m-10 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Color Mapping" title="USA CLIMATE - WEATHER BY MONTH" />

      <ChartComponent
        id="charts"
        height="420px"
        primaryXAxis={{
          ...ColorMappingPrimaryXAxis,
          labelStyle: {
            color: currentColor, // X-axis text color
          },
        }}
        primaryYAxis={{
          ...ColorMappingPrimaryYAxis,
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
          mode: "Range",
          textStyle: {
            color: currentColor, // Legend text color
          },
        }}
      >
        <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={colorMappingData[0]}
            name="USA"
            xName="x"
            yName="y"
            type="Column"
            cornerRadius={{
              topLeft: 10,
              topRight: 10,
            }}
          />
        </SeriesCollectionDirective>
        <RangeColorSettingsDirective>
          {rangeColorMapping.map((item, i) => (
            <RangeColorSettingDirective key={i} {...item} />
          ))}
        </RangeColorSettingsDirective>
      </ChartComponent>
    </div>
  );
};

export default ColorMapping;
