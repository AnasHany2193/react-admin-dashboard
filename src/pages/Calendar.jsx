import React from "react";

import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

import { scheduleData } from "../data/dummy";
import Header from "./../components/Header";

const Calendar = () => {
  return (
    <div className="p-2 m-2 bg-white md:m-9 md:p-9 rounded-3xl">
      <Header title="Calendar" category="App" />
      <ScheduleComponent
        eventSettings={{ dataSource: scheduleData }}
        currentView="Month"
        height="650px"
        selectedDate={new Date(2025, 0, 10)}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
