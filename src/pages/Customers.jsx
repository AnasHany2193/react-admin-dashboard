import React from "react";

import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Toolbar,
  Page,
  Inject,
  Search,
  Selection,
  Filter,
  Sort,
  Edit,
} from "@syncfusion/ej2-react-grids";

import Header from "../components/Header";
import { customersData, customersGrid } from "../data/dummy";

const Customers = () => {
  return (
    <div className="p-2 m-2 bg-white md:m-9 md:p-9 rounded-3xl">
      <Header title="Customers" category="Page" />
      <GridComponent
        allowPaging
        allowSorting
        width="auto"
        toolbar={["Search", "Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        dataSource={customersData}
      >
        <ColumnsDirective>
          {customersGrid.map((employee, i) => (
            <ColumnDirective key={i} {...employee}></ColumnDirective>
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            Search,
            Selection,
            Edit,
            Sort,
            Filter,
            Toolbar,
            Sort,
            Edit,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;
