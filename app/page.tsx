"use client";

import { useEffect, useState } from "react";

import JobPost from "./components/JobPost/JobPost";
import SearchBox from "./components/SearchBox/SearchBox";

import data from "../data.json";

interface Job {
  id: number;
  logo: string;
  logoBackground: string;
  postedAt: string;
  position: string;
  contract: string;
  company: string;
  location: string;
}

export default function Home() {
  const [jobData, setJobData] = useState<Job[]>([]);

  useEffect(() => {
    setJobData(data);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <SearchBox />

      <div className="grid grid-cols-3 gap-x-[1.87rem] gap-y-[4.06rem] mt-16">
        {jobData.map(
          ({
            id,
            logo,
            logoBackground,
            postedAt,
            position,
            contract,
            company,
            location,
          }: Job) => (
            <JobPost
              key={id}
              logo={logo}
              bg={logoBackground}
              date={postedAt}
              title={position}
              contract={contract}
              company={company}
              country={location}
            />
          )
        )}
      </div>
    </main>
  );
}
