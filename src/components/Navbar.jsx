import React, { useEffect } from "react";

import { BsChatLeft } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import { useStateContext } from "../contexts/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Cart, Chat, UserProfile, Notification } from ".";

import avatar from "../data/avatar.jpg";

const NavButton = ({
  title,
  customFunc,
  icon,
  color,
  dotColor,
  classStyle = "",
}) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={customFunc}
        style={{ color }}
        className={`relative p-3 text-xl rounded-full hover:bg-light-gray ${classStyle}`}
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex w-2 h-2 rounded-full right-2 top-2"
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};

const NavBar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

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
      <NavButton
        title="Menu"
        color={currentColor}
        icon={<AiOutlineMenu />}
        customFunc={() => {
          setActiveMenu((active) => !active);
        }}
        classStyle={`transition-all-custom ${activeMenu && "rotate-[810deg]"}`}
      />

      {/* Cart, Chat, Notification, and Profile Buttons */}
      <div className="flex">
        <NavButton
          title="Cart"
          color={currentColor}
          icon={<FiShoppingCart />}
          customFunc={() => handleClick("cart")}
        />

        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          color={currentColor}
          icon={<BsChatLeft />}
          customFunc={() => handleClick("chat")}
        />

        <NavButton
          title="Notifications"
          dotColor="#03C9D7"
          color={currentColor}
          icon={<RiNotification3Line />}
          customFunc={() => handleClick("notification")}
        />

        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 p-1 text-gray-400 rounded-lg cursor-pointer hover:bg-light-gray text-14"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full" />{" "}
            <p>
              <span>Hi, </span>
              <span className="ml-1 font-bold ">Anas</span>
            </p>
            <MdKeyboardArrowDown />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default NavBar;
