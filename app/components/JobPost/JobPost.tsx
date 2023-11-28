import React from "react";
import Image from "next/image";

import dividerIcon from "../../assets/desktop/icon-oval.svg";
import Link from "next/link";

interface JobPostProps {
  id: any;
  logo: any;
  bg: string;
  date: string;
  contract: string;
  title: string;
  company: string;
  country: string;
}

export function JobPost(props: JobPostProps) {
  const { id, logo, bg, date, contract, title, company, country } = props;

  return (
    <div className="px-8 pb-9 pt-[3.06rem] bg-background rounded-md lg:w-[21.827rem] lg:h-[14.25rem] relative">
      <div
        className={`company-logo | z-50 rounded-xl h-[3.125rem] w-[3.125rem] absolute -top-7 flex justify-center items-center`}
        style={{ backgroundColor: bg }}
      >
        <Image
          src={logo}
          alt={`${company} logo`}
          width="50"
          height="50"
          className="h-auto w-auto"
        />
      </div>
      <div className="content-container | space-y-8">
        <div className=" bg-background rounded-md space-y-2">
          <div className="flex flex-row space-x-3 text-darkGrey">
            <p className="job-date">{date}</p>
            <Image src={dividerIcon} alt="Divider icon" />
            <p className="job-contract-type">{contract}</p>
          </div>
          <Link href={`/jobs/${id}`}>
            <h3 className="job-title | text-textContent text-elipsis truncate overflow-hidden cursor-pointer hover:text-darkGrey">
              {title}
            </h3>
          </Link>
          <p className="job-company | text-darkGrey">{company}</p>
        </div>
        <h4 className="job-country | text-primary">{country}</h4>
      </div>
    </div>
  );
}

export default JobPost;
