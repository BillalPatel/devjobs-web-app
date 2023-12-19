import React from "react";
import Image from "next/image";
import Link from "next/link";

import DisplayToggle from "../DisplayToggle/DisplayToggle";

import logo from "../../assets/desktop/logo.svg";

export function Header() {
  return (
    <div className="bg-cover h-36 md:h-52 lg:h-48 w-screen py-10 lg:py-12 bg-[url('assets/mobile/bg-pattern-header.svg')] md:bg-[url('assets/tablet/bg-pattern-header.svg')] lg:bg-[url('assets/desktop/bg-pattern-header.svg')]">
      <div className="flex flex-row justify-between min-w-fit w-10/12 lg:w-9/12 mx-auto">
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
  );
}

export default Header;
