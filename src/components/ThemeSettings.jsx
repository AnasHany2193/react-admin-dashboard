import React from "react";

import { BsCheck } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSettings = () => {
  const { setColor, setMode, currentColor, currentMode, setThemeSettings } =
    useStateContext();

  return (
    <div className="fixed top-0 right-0 w-screen bg-half-transparent nav-item">
      <div className="flex flex-col gap-3 p-4 ml-4 float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-60">
        {/* Title and Close Button */}
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="p-3 text-xl hover:drop-shadow-xl hover:bg-dark-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>

        {/* Separator */}
        <div className="mx-4 border-t-1 border-color " />

        {/* Card Theme Options */}
        <div className="flex flex-col gap-3">
          <p className="text-lg font-semibold">Theme Options</p>

          <div className="flex items-center ml-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Light"}
            />
            <label htmlFor="light" className="ml-2 cursor-pointer">
              Light
            </label>
          </div>
          <div className="flex items-center ml-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Dark"}
            />
            <label htmlFor="dark" className="ml-2 cursor-pointer">
              Dark
            </label>
          </div>
        </div>

        {/* Separator */}
        <div className="mx-4 border-t-1 border-color " />

        {/* Card Theme Colors */}
        <div className="flex flex-col gap-3">
          <p className="text-lg font-semibold">Theme Colors</p>

          <div className="grid grid-cols-3 gap-6 mx-auto">
            {themeColors.map((color) => (
              <TooltipComponent
                key={color.name}
                content={color.name}
                position="BottomCenter"
                style={{ borderRadius: "50%" }}
              >
                <button
                  type="button"
                  onClick={() => setColor(color.color)}
                  style={{ backgroundColor: color.color }}
                  className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer"
                >
                  <BsCheck
                    className={`text-2xl text-white ${
                      color.color === currentColor ? "block" : "hidden"
                    }`}
                  />
                </button>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
