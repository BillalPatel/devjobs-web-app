"use client";

import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [jobData, setJobData] = useState<Job[]>([]);

  useEffect(() => {
    new Promise((_) => setTimeout(_, 1500))
      .then(() => {
        setJobData(data);
      })
      .then(() => {
        setIsFetching(false);
      });
  }, []);

  function handleLoadMoreClick() {
    console.log("Load more!");
  }

  function renderJobPosts() {
    return jobData
      .slice(0, 9)
      .map(
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
    <main className="flex flex-col items-center justify-between relative lg:px-0 min-w-max">
      <SearchBox />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[1.87rem] gap-y-[4.06rem] lg:mt-16 mt-6">
        {isFetching
          ? Array.from(Array(6).keys()).map((index) => (
              <div
                key={index}
                className="bg-background px-10 pt-5 pb-14 relative rounded-md"
              >
                <Skeleton
                  className="absolute -top-12 rounded-xl"
                  height={50}
                  width={50}
                />
                <Skeleton count={2} width={270} className="absolute -top-5" />
                <Skeleton count={1} width={270} className="absolute -top-2" />
                <Skeleton count={1} width={270} className="absolute top-5" />
              </div>
            ))
          : jobData && renderJobPosts()}
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
