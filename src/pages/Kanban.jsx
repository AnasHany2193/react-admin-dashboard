import React from "react";
import Header from "../components/Header";
import { kanbanData, kanbanGrid } from "../data/dummy";

import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";

const Kanban = () => {
  return (
    <div className="p-2 m-2 bg-white md:m-9 md:p-9 rounded-3xl">
      <Header title="Kanban" category="App" />
      <KanbanComponent
        id="kanban"
        keyField="Status"
        dataSource={kanbanData}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
