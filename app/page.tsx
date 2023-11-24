"use client";

import { useEffect, useState } from "react";

import JobPost from "./components/JobPost/JobPost";
import SearchBox from "./components/SearchBox/SearchBox";
import Button from "./components/Button/Button";

import { data } from "./data/jobData";

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

  function handleLoadMoreClick() {
    console.log("Load more!");
  }

  function renderJobPosts() {
    return jobData.map(
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
          id={id}
          logo={logo}
          bg={logoBackground}
          date={postedAt}
          title={position}
          contract={contract}
          company={company}
          country={location}
        />
      )
    );
  }

  return (
    <main className="flex flex-col items-center justify-between relative lg:px-10 min-w-max">
      <SearchBox />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[1.87rem] gap-y-[4.06rem] lg:mt-16 mt-24">
        {renderJobPosts()}
      </div>
      <div className="my-14">
        <Button
          text="Load More"
          variant="default"
          onClick={handleLoadMoreClick}
        />
      </div>
    </main>
  );
}
