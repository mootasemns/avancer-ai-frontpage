import React, { useState, useEffect } from "react";
import profileIcon from "../assets/profile-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClockRotateLeft,
  faFileLines,
  faBell,
  faGear,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";

const MenuItem = ({ icon }) => {
  return (
    <a
      href="#"
      className="p-3 rounded-md hover:bg-purple-500 transition-colors flex items-center"
    >
      <FontAwesomeIcon icon={icon} size="xl" className="cursor-pointer" />
    </a>
  );
};

const Sidebar = ({ isOpen, setIsOpen }) => {
  // Modified: Added setIsOpen prop
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { icon: faChartPie },
    { icon: faFileLines },
    { icon: faClockRotateLeft },
    { icon: faBell },
    { icon: faGear },
  ];

  const topOffset = isMobile ? 72 : 120;

  return (
    <>
      {/* Overlay for blur effect */}
      {isMobile && isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)} // Close sidebar on overlay click
        ></div>
      )}

      <div
        className={`fixed top-0 bg-[#893976] text-white shadow-lg transition-transform duration-300 ease-in-out z-40
        ${
          isOpen ? "translate-x-0" : "-translate-x-full" // Hide off-screen on mobile when closed
        }
        ${
          isMobile
            ? "w-64 h-full rounded-none " // Full width on mobile
            : "md:translate-x-10 w-22  lg:w-22 h-[85vh] rounded-full"
        }
        `}
        style={{ top: `${topOffset}px` }}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 flex flex-col items-center">
            <h1 className="text-l font-semibold mb-8 mt-5 font-[Poppins]">
              Menu
            </h1>
            <nav className="flex flex-col items-center space-y-4">
              {menuItems.slice(0, 3).map((item, index) => (
                <MenuItem key={index} icon={item.icon} />
              ))}
              <div className="mt-20 flex-grow"></div>
              {menuItems.slice(3).map((item, index) => (
                <MenuItem key={`bottom-${index}`} icon={item.icon} />
              ))}
            </nav>
          </div>

          <div className="p-4 flex flex-col items-center mt-4">
            <hr className="w-full border-[#D0D5DD] mb-6" />
            <span className="font-medium font-[Poppins] mb-6">Profile</span>
            <a href="#" className="flex flex-col items-center">
              <img
                src={profileIcon}
                alt="User Avatar"
                className="rounded-full w-12 h-12"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
