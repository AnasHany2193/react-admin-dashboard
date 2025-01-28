import React from "react";

import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationSelection,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";
import { PyramidData } from "../../data/dummy";

const Pyramid = () => {
  const { currentMode, currentColor } = useStateContext();

  return (
    <div className="p-10 m-4 mt-16 bg-white shadow-xl md:m-10 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Pyramid" title="Food Comparison Chart" />

      <AccumulationChartComponent
        id="pyramid-chart"
        legendSettings={{
          background: currentMode === "Dark" ? "#33373E" : "#fff",
          textStyle: {
            color: currentColor, // Legend text color
          },
        }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <Inject
          services={[
            AccumulationDataLabel,
            AccumulationTooltip,
            PyramidSeries,
            AccumulationLegend,
            AccumulationSelection,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            name="Food"
            dataSource={PyramidData}
            xName="x"
            yName="y"
            type="Pyramid"
            width="45%"
            height="80%"
            neckWidth="15%"
            gapRatio={0.03}
            explode
            emptyPointSettings={{ mode: "Drop", fill: "red" }}
            dataLabel={{
              visible: true,
              position: "Inside",
              name: "text",
            }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pyramid;
