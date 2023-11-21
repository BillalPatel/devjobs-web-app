import React from "react";
import Image from "next/image";

import DisplayToggle from "../DisplayToggle/DisplayToggle";

import headerDesktopImg from "../../../public/assets/desktop/bg-pattern-header.svg";
import headerMobileImg from "../../../public/assets/mobile/bg-pattern-header.svg";
import logo from "../../../public/assets/desktop/logo.svg";

export function Header() {
  return (
    <div className="w-screen relative max-w-[2000px] mx-auto">
      <Image
        className="w-screen flex md:hidden lg:hidden"
        src={headerMobileImg}
        alt="Mobile header"
      />
      <Image
        className="w-screen hidden lg:flex"
        src={headerDesktopImg}
        alt="Desktop header"
      />
      <div className="absolute">
        <Image
          className="lg:mx-[10.31rem] mx-6 top-[2.75rem]"
          src={logo}
          alt="Devjobs logo"
        />
        <DisplayToggle />
      </div>
    </div>
  );
}

export default Header;
