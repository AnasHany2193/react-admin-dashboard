import React from "react";

import { Header, LineChart } from "../../components";

const Line = () => {
  return (
    <div className="p-10 m-4 mt-16 bg-white shadow-xl md:m-10 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Inflation Rate" />

      <LineChart />
    </div>
  );
};

export default Line;
