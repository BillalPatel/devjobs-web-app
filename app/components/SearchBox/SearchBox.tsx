import React from "react";
import Image from "next/image";

import Button from "../Button/Button";

import searchIcon from "../../assets/desktop/icon-search.svg";
import locationIcon from "../../assets/desktop/icon-location.svg";
import checkedIcon from "../../assets/desktop/icon-check.svg";

export function SearchBox() {
  return (
    <div className="rounded-md bg-background flex flex-row px-10 relative -top-10 w-[20.5rem] lg:w-[69.5rem] md:w-[43rem]">
      <div className="flex flex-row lg:w-2/5 md:w-1/3 py-7">
        <Image src={searchIcon} alt="Search icon" />
        <input
          type="text"
          placeholder="Filter by title, companies, expertise…"
          className="placeholder:text-veryDarkBlue placeholder:opacity-50 px-4 w-full focus:outline-none truncate"
        ></input>
      </div>

      <div className="flex-row hidden md:flex lg:flex border-x-[0.0625rem] border-opacity-20 border-secondaryTextContent py-7 pl-5 w-1/4 md:w-1/3">
        <Image src={locationIcon} alt="Filter location icon" />
        <input
          type="text"
          placeholder="Filter by location…"
          className="placeholder:text-veryDarkBlue placeholder:opacity-50 px-4 focus:outline-none "
        ></input>
      </div>
      <div className="relative flex-row hidden md:flex lg:flex items-center md:w-1/3">
        {/* <Image src={searchIcon} alt="Search icon" /> */}
        <div className="flex flex-row lg:px-7 lg:gap-4 md:px-3 md:gap-3 cursor-pointer align-middle items-center">
          <div
            id="checkbox"
            // className="w-6 h-6 rounded-sm bg-lightGrey "
            className="w-6 h-6 rounded-sm bg-primary"
          />
          <Image
            className="absolute flex justify-center self-center items-center mx-auto z-50 ml-1"
            src={checkedIcon}
            alt="Checked icon"
          />
          <p className="font-bold flex flex-row gap-1 text-textContent">
            Full Time <span className="hidden lg:flex">Only</span>
          </p>
        </div>
        {/* <Button text="Search" variant="default" className="" /> */}
      </div>
    </div>
  );
}

export default SearchBox;
