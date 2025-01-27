import React from "react";

import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, height, width, type, data, color, currentColor }) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    // Fallback for empty data
    return null; // Return null to render nothing if data is invalid
  }

  return (
    <SparklineComponent
      id={id}
      width={width}
      height={height}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
      tooltipSettings={{
        visible: true,
        // eslint-disable-next-line no-template-curly-in-string
        format: "${x} : data ${yval}",
        trackLineSettings: { visible: true },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
