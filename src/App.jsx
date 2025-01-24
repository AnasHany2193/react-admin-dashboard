import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  ECommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";

import "./App.css";

const App = () => {
  const activeMenu = true;

  return (
    <div>
      <BrowserRouter>
        <div className="relative flex dark:bg-main-dark-bg">
          {/* Setting Button */}
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="top">
              <button
                type="button"
                style={{ background: "blue" }}
                className="p-3 text-3xl text-white rounded-full hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* Toggle Sidebar */}
          {activeMenu ? (
            <div className="fixed bg-white w-72 dark:bg-secondary-dark-bg sidebar">
              <Sidebar />
            </div>
          ) : (
            <div className="hidden w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          {/* NavBar */}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? " md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed w-full md:static bg-main-bg dark:bg-main-dark-bg navbar">
              <Navbar />
            </div>
          </div>

          {/* Routes */}
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<ECommerce />} />
              <Route path="/eCommerce" element={<ECommerce />} />

              {/* Page */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* Apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* Charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
