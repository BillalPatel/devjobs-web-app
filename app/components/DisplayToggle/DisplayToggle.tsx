"use client";

import Image from "next/image";
import React, { useState } from "react";

import sunIcon from "../../assets/desktop/icon-sun.svg";
import moonIcon from "../../assets/desktop/icon-moon.svg";

export function DisplayToggle() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  function handleToggleClick() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className="display-toggle-container | flex flex-row items-center z-50 space-x-3">
      <Image className="h-6 w-auto" src={sunIcon} alt="Light mode" />
      <div
        className={`toggle rounded-full bg-textWhite w-14 h-7 flex items-center cursor-pointer ${
          !isDarkMode ? "justify-start" : "justify-end"
        }`}
        onClick={handleToggleClick}
      >
        <div className="bg-primary w-4 h-4 rounded-full mx-2"></div>
      </div>
      <Image className="h-6 w-auto" src={moonIcon} alt="Dark mode" />
    </div>
  );
}

export default DisplayToggle;
