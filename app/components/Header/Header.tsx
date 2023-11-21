import React from "react";
import Image from "next/image";

import headerDesktopImg from "../../../assets/desktop/bg-pattern-header.svg";
// import headerMobileImg from "../../../assets/mobile/bg-pattern-header.svg";
import logo from "../../../assets/desktop/logo.svg";

export function Header() {
  return (
    <div className="w-screen relative">
      <Image src={headerDesktopImg} alt="Header" className="w-screen" />
      <Image
        src={logo}
        alt="Logo"
        className="mx-[10.31rem] absolute top-[2.75rem]"
      />
    </div>
  );
}

export default Header;
