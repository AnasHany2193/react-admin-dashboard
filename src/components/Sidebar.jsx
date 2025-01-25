import React from "react";

import { Link, NavLink, useLocation } from "react-router-dom";

import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";

import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const location = useLocation();
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const isActive = (link) => location.pathname === `/${link}`;

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) setActiveMenu(false);
  };

  return (
    <div className="h-screen pb-10 ml-3 overflow-auto md:overflow-hidden md:hover:overflow-auto">
      {activeMenu && (
        <>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="flex items-center gap-3 mt-4 ml-3 text-xl font-extrabold tracking-tight dark:text-white text-slate-800"
            >
              <SiShopware /> <span>Shoppy</span>
            </Link>

            {/* Sidebar Close Button */}
            <TooltipComponent content="Close Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu((active) => !active)}
                className="block p-3 mt-4 text-xl rounded-full hover:bg-light-gray md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          {/* Sidebar Links */}
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="m-3 mt-4 text-gray-400 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.name}
                    onClick={handleCloseSidebar}
                    className={`flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-base m-2 ${
                      isActive(link.name)
                        ? "text-white bg-gray-700"
                        : "text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray"
                    }`}
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
