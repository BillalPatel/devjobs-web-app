import React, { useState } from "react";
import Image from "next/image";

import Button from "../Button/Button";

import searchIcon from "../../assets/desktop/icon-search.svg";
import locationIcon from "../../assets/desktop/icon-location.svg";
import checkedIcon from "../../assets/desktop/icon-check.svg";

export function SearchBox({ onSearch, isFullTime, isChecked }: any) {
  function handleSubmitForm(event: any) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const searchData = Object.fromEntries(formData);

    onSearch(searchData);
  }

  function handleBlur(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    onSearch();
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="rounded-md bg-background flex flex-row relative -top-10 w-[20.5rem] lg:w-[69.5rem] md:w-[43rem]">
        <div className="flex flex-row lg:w-2/5 md:w-1/3 py-7 px-8">
          <Image src={searchIcon} alt="Search icon" />
          <input
            className="placeholder:text-veryDarkBlue placeholder:opacity-50 px-4 w-full focus:outline-none truncate"
            placeholder="Filter by title, companies, expertise…"
            type="text"
            name="company"
            id="company"
            onBlur={handleBlur}
          />
        </div>

        <div className="flex-row hidden md:flex lg:flex border-x-[0.0625rem] border-opacity-20 border-secondaryTextContent py-7 pl-5 w-1/4 md:w-1/3">
          <Image src={locationIcon} alt="Filter location icon" />
          <input
            className="placeholder:text-veryDarkBlue placeholder:opacity-50 px-4 focus:outline-none "
            placeholder="Filter by location…"
            type="text"
            name="location"
            id="location"
          ></input>
        </div>
        <div className="relative flex-row hidden md:flex lg:flex items-center md:w-1/3">
          <div
            className="flex flex-row lg:px-5 lg:gap-4 md:px-3 md:gap-3 cursor-pointer align-middle items-center"
            onClick={() => isFullTime(!isChecked)}
          >
            <div id="checkbox" className="w-6 h-6 rounded-sm bg-primary" />
            {isChecked && (
              <Image
                className="absolute flex justify-center self-center items-center mx-auto z-50 ml-1"
                src={checkedIcon}
                alt="Checked icon"
              />
            )}
            <p className="font-bold text-textContent hidden lg:flex">
              Full Time Only
            </p>
            <p className="font-bold text-textContent lg:hidden">Full Time</p>
          </div>
          <Button text="Search" variant="default" />
        </div>
      </div>
    </form>
  );
}

export default SearchBox;
