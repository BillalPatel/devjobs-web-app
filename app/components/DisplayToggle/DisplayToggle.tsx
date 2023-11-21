import Image from "next/image";
import React from "react";

import sunIcon from "../../../public/assets/desktop/icon-sun.svg";
import moonIcon from "../../../public/assets/desktop/icon-moon.svg";
// import moonIcon from '../../../public/assets/desktop/'

export function DisplayToggle() {
  return (
    <div className="DisplayToggle | flex flex-row z-50">
      <Image src={sunIcon} alt="Light mode" />
      <Image src={moonIcon} alt="Dark mode" />
    </div>
  );
}

export default DisplayToggle;
