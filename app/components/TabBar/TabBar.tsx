import React from "react";

import { Button } from "../Button/Button";

interface TabBarProps {
  position: string;
  company: string;
}

export function TabBar(props: TabBarProps) {
  const { position, company } = props;

  return (
    <nav className="footer | lg:px-10 bg-white rounded-md flex flex-row justify-between px-4 md:px-6 py-4 lg:py-7 fixed bottom-0 w-screen md:static lg:static z-50">
      <div className="hidden md:flex lg:flex flex-col">
        <h3 className="font-bold">{position}</h3>
        <p className=" text-darkGrey">{company}</p>
      </div>
      <div className="mx-auto md:mx-0 lg:mx-0 w-full md:w-auto lg:w-auto">
        <Button text="Apply Now" variant="default" size="wide" />
      </div>
    </nav>
  );
}

export default TabBar;
