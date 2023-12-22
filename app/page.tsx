"use client";

import { useEffect, useState, useCallback } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import JobPost from "./components/JobPost/JobPost";
import SearchBox from "./components/SearchBox/SearchBox";
import Button from "./components/Button/Button";

import { data } from "./data/jobData";
import { capitaliseFirstLetteOfEachWord } from "./helpers";

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
  const [jobDataCounter, setJobDataCounter] = useState<number>(9);
  const [noResults, setNoResults] = useState<boolean>(false);
  const [isFullTimeChecked, setIsFullTimeChecked] = useState<boolean>(false);

  const renderJobPosts = useCallback(() => {
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
  }, [jobData]);

  useEffect(() => {
    setIsFetching(true);
    new Promise((_) => setTimeout(_, 1100))
      .then(() => {
        setJobData(data.slice(0, jobDataCounter));
      })
      .then(() => {
        setIsFetching(false);
      });
    renderJobPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobDataCounter]);

  function handleSearch(formData: any) {
    if (formData === null || formData === undefined) {
      setJobData(data.slice(0, 9));
      return;
    }

    setJobData([]);
    const { company, location } = formData;

    if (company === "" && location === "") {
      setJobData(data);
    }

    const filteredData = data.filter((job) => {
      const fullTimeMatches = isFullTimeChecked
        ? job.contract === "Full Time"
        : true;

      const companyMatches = job.company.includes(
        capitaliseFirstLetteOfEachWord(company)
      );

      const locationMatches = job.location.includes(
        capitaliseFirstLetteOfEachWord(location)
      );

      return fullTimeMatches && companyMatches && locationMatches;
    });

    filteredData.length === 0 ? setNoResults(true) : setJobData(filteredData);
  }

  return (
    <main className="flex flex-col items-center justify-between relative lg:px-0 min-w-max">
      <SearchBox
        onSearch={handleSearch}
        isFullTime={setIsFullTimeChecked}
        isChecked={isFullTimeChecked}
      />

      {noResults ? (
        <h1 className="font-bold text-lg lg:text-[1.75rem] text-textHeader my-8">
          No results found. Please try a broader search.
        </h1>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[1.87rem] gap-y-[4.06rem] lg:mt-16 mt-6">
            {isFetching
              ? Array.from(Array(jobDataCounter).keys()).map((index) => (
                  <div
                    key={index}
                    className="bg-background px-10 pt-5 pb-14 relative rounded-md"
                  >
                    <Skeleton
                      className="absolute -top-12 rounded-xl"
                      height={50}
                      width={50}
                    />
                    <Skeleton
                      count={2}
                      width={270}
                      className="absolute -top-5"
                    />
                    <Skeleton
                      count={1}
                      width={270}
                      className="absolute -top-2"
                    />
                    <Skeleton
                      count={1}
                      width={270}
                      className="absolute top-5"
                    />
                  </div>
                ))
              : jobData && renderJobPosts()}
          </div>
          <div className="my-14 mx-auto flex justify-center">
            <Button
              text="Load More"
              variant="default"
              onClick={() => setJobDataCounter(jobDataCounter + 3)}
            />
          </div>
        </div>
      )}
    </main>
  );
}
