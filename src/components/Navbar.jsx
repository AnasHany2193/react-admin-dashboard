import React, { useEffect } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { useStateContext } from "../contexts/ContextProvider";

const NavBar = () => {
  const { activeMenu, setActiveMenu, screenSize, setScreenSize, currentColor } =
    useStateContext();

  // Catch the current screen size
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  // Toggle the sidebar based on screen size
  useEffect(() => {
    if (screenSize <= 900) setActiveMenu(false);
    else setActiveMenu(true);
  }, [screenSize, setActiveMenu]);

  return (
    <div className="relative flex justify-between p-2 md:mx-6">
      {/* Toggle Sidebar Button */}
      <TooltipComponent content="Menu" position="BottomCenter">
        <button
          type="button"
          onClick={() => {
            setActiveMenu((active) => !active);
          }}
          style={{ currentColor }}
          className={`transition-all-custom relative p-3 text-xl rounded-full dark:text-gray-300 hover:bg-light-gray ${
            activeMenu && "rotate-[810deg]"
          }`}
        >
          <AiOutlineMenu />
        </button>
      </TooltipComponent>
    </div>
  );
};

export default NavBar;
