import React from "react";

import Header from "./../components/Header";
import { employeesData, employeesGrid } from "./../data/dummy";

import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Toolbar,
  Page,
  Inject,
  Search,
} from "@syncfusion/ej2-react-grids";

const Employees = () => {
  return (
    <div className="p-2 m-2 bg-white md:m-9 md:p-9 rounded-3xl">
      <Header title="Employees" category="Page" />
      <GridComponent
        allowPaging
        allowSorting
        width="auto"
        toolbar={["Search"]}
        dataSource={employeesData}
      >
        <ColumnsDirective>
          {employeesGrid.map((employee, i) => (
            <ColumnDirective key={i} {...employee}></ColumnDirective>
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
