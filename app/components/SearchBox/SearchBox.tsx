import React from "react";

import searchIcon from "../../../assets/desktop/icon-search.svg";
import Image from "next/image";

export function SearchBox() {
  return (
    <div className="rounded-md bg-white w-[69.375rem] h-20 absolute -top-10 mb-10 px-8 py-7 flex flex-row">
      <Image src={searchIcon} alt="Search icon" />
      <input type="text" placeholder="Filter by title, companies, expertise…" className="placeholder:text-veryDarkBlue placeholder:opacity-50 w-full"></input>
      <Image src={searchIcon} alt="Search icon" />
      <input type="text" placeholder="Filter by location…" className="placeholder:text-veryDarkBlue placeholder:opacity-50 w-full"></input>
      <Image src={searchIcon} alt="Search icon" />
      <input type="text" placeholder="Filter by location…" className="placeholder:text-veryDarkBlue placeholder:opacity-50 w-full"></input>
    </div>
  );
}

export default SearchBox;
