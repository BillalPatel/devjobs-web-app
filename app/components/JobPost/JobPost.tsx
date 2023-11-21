import React from "react";
import Image from "next/image";

import dividerIcon from "../../../assets/desktop/icon-oval.svg";

interface JobPostProps {
  logo: any;
  bg: string;
  date: string;
  contract: string;
  title: string;
  company: string;
  country: string;
}

export function JobPost(props: JobPostProps) {
  const { logo, bg, date, contract, title, company, country } = props;

  console.log(bg);

  return (
    <div className="px-8 pb-9 pt-[3.06rem] bg-white rounded-md w-[21.827rem] h-[14.25rem] relative">
      <div
        className={`company-logo | z-50 rounded-xl h-[3.125rem] w-[3.125rem] absolute -top-7 flex justify-center items-center`}
        style={{ backgroundColor: bg }}
      >
        <Image
          src={require(logo)}
          // src={require("../../../assets/logos/scoot.svg")}
          alt={`${company} logo`}
          width="50"
          height="50"
        />
      </div>
      <div className="content-container | space-y-8">
        <div className=" bg-white rounded-md space-y-2">
          <div className="flex flex-row space-x-3 text-darkGrey">
            <p className="job-date">{date}</p>
            <Image src={dividerIcon} alt="Divider icon" />
            <p className="job-contract-type">{contract}</p>
          </div>
          <h3 className="job-title | text-veryDarkBlue text-elipsis truncate overflow-hidden cursor-pointer hover:text-darkGrey">
            {title}
          </h3>
          <p className="job-company | text-darkGrey">{company}</p>
        </div>
        <h4 className="job-country | text-violet">{country}</h4>
      </div>
    </div>
  );
}

export default JobPost;
