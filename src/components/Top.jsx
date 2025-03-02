import React, { useState, useRef, useEffect } from "react";
import profileIcon from "../assets/profile-icon.png"; // Ensure this path is correct
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faEnvelope,
  faBars, // Import bars icon for the toggle button
} from "@fortawesome/free-solid-svg-icons";

const Top = ({ onToggleSidebar }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchInputRef = useRef(null);

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  useEffect(() => {
    if (isSearchVisible && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchVisible]);

  return (
    <div className="flex items-center justify-between py-4 shadow-sm bg-white z-50">
      {/* Logo */}
      <div className="ml-4 md:ml-10 flex items-center">
        {/* Toggle Button (for mobile) */}
        <div className="mr-4 md:hidden">
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            className="text-gray-700 cursor-pointer"
            onClick={onToggleSidebar}
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold font-[Quicksand,serif] bg-gradient-to-r from-[#678AD9] via-[#D66BCD] to-[#990897] bg-clip-text text-transparent select-none">
          avancer.ai
        </h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center">
        {/* Search Icon for Mobile */}
        <div className="md:hidden mr-4">
          <FontAwesomeIcon
            icon={faSearch}
            className="text-gray-400 text-xl cursor-pointer"
            onClick={handleSearchClick}
          />
        </div>

        <div
          className={`absolute top-14 left-0 w-full bg-white z-20 px-4 py-2 md:hidden ${
            isSearchVisible ? "" : "hidden"
          }`}
        >
          <div className="flex items-center">
            <span className="absolute ml-4">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Type to search"
              className="border border-gray-200 rounded-full py-2 px-4 pl-12 w-full text-gray-500 placeholder-gray-500"
              ref={searchInputRef}
              onBlur={() => setTimeout(() => setIsSearchVisible(false), 200)} // Hide after blur
            />
          </div>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex items-center">
          <span className="absolute ml-4">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Type to search"
            className="border border-gray-200 rounded-full py-2 px-4 pl-12 w-340 text-gray-500 placeholder-gray-500"
          />
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex items-center space-x-4 md:space-x-6 mr-4 md:mr-10">
        <div>
          {/* Replace with your notification icon */}
          <span className="relative inline-block">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="xl"
              className=" cursor-pointer text-gray-700"
            />
            <span className="absolute -top-1 -right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-[#893976] rounded-full">
              2
            </span>
          </span>
        </div>
        {/* Add a notification icon */}
        <div>
          <span className="relative">
            <FontAwesomeIcon
              icon={faBell}
              size="xl"
              className="text-gray-700 cursor-pointer"
            />
          </span>
        </div>

        <div>
          <img
            src={profileIcon}
            alt="User Avatar"
            className="rounded-full w-10 h-10 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Top;
