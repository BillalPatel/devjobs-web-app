import React from "react";
import Image from "next/image";
import Link from "next/link";

import DisplayToggle from "../DisplayToggle/DisplayToggle";

import headerMobileImg from "../../assets/mobile/bg-pattern-header.svg";
import headerTabletImg from "../../assets/tablet/bg-pattern-header.svg";
import headerDesktopImg from "../../assets/desktop/bg-pattern-header.svg";
import logo from "../../assets/desktop/logo.svg";

export function Header() {
  return (
    <div className="w-screen relative max-w-[2000px] mx-auto min-w-max">
      <Image
        className="w-screen flex md:hidden lg:hidden"
        src={headerMobileImg}
        alt="Mobile header"
      />
      <Image
        className="w-screen hidden md:flex lg:hidden"
        src={headerTabletImg}
        alt="Tablet header"
      />
      <Image
        className="w-screen hidden lg:flex"
        src={headerDesktopImg}
        alt="Desktop header"
      />
      {/* <div className="absolute lg:px-[10.31rem] px-7 top-[2.75rem] flex flex-row justify-between w-screen min-w-max"> */}
      <div className="absolute px-7 top-[2.75rem] min-w-full">
        <div className="flex flex-row justify-between">
          <Link href={"/"}>
            <Image
              className="logo | max-h-8 cursor-pointer"
              src={logo}
              alt="Devjobs logo"
            />
          </Link>
          <DisplayToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;
