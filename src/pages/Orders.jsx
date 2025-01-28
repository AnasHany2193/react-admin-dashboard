import React from "react";

import Header from "./../components/Header";
import { ordersData, ordersGrid } from "./../data/dummy";

import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Resize,
  Sort,
  Filter,
  ContextMenu,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

const Orders = () => {
  return (
    <div className="p-2 m-2 bg-white md:m-9 md:p-9 rounded-3xl">
      <Header title="Orders" category="Page" />
      <GridComponent allowPaging allowSorting dataSource={ordersData}>
        <ColumnsDirective>
          {ordersGrid.map((order, i) => (
            <ColumnDirective key={i} {...order}></ColumnDirective>
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            Page,
            ContextMenu,
            Filter,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
