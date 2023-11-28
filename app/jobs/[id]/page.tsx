"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import Button from "@/app/components/Button/Button";
import TabBar from "@/app/components/TabBar/TabBar";
import dividerIcon from "../../assets/desktop/icon-oval.svg";

import { data } from "../../data/jobData";

function Page({ params }: any) {
  const [jobData, setJobData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const job = data.find((job) => job.id === Number(params.id));

    new Promise((_) => setTimeout(_, 1500)).then(() => {
      setJobData(job);
      setLoading(false);
    });
  }, [params.id]);

  const {
    company,
    website,
    logoBackground,
    logo,
    postedAt,
    contract,
    position,
    location,
    description,
    requirements,
    role,
  } = jobData;

  function loadingSkeleton() {
    return (
      <div>
        <div className="md:rounded-b-md lg:rounded-b-md rounded-md max-w-xl ml-5 mr-5 md:flex-row lg:flex-row items-center relative md:-top-12 lg:-top-[4.5rem] -top-4 md:mx-auto lg:mx-auto md:max-w-2xl lg:max-w-4xl bg-background py-6 md:py-10 px-12">
          <Skeleton className="my-2" height={20} count={1} />
          <Skeleton className="mt-2" height={15} count={1} />
          <Skeleton
            containerClassName="grid md:hidden lg:hidden mt-7"
            height={35}
            count={1}
          />
        </div>
        <div className="bg-background rounded-md px-8 md:px-12 lg:px-12 py-10 space-y-8 max-w-xl mx-auto ml-5 mr-5 md:max-w-2xl lg:max-w-4xl md:mx-auto lg:mx-auto relative top-4 md:-top-4 lg:-top-10">
          <Skeleton className="my-2" height={15} count={1} />
          <Skeleton className="my-2" height={40} count={1} />
          <Skeleton className="my-2" height={10} count={1} />
          <Skeleton className="my-2" height={180} count={1} />
          <Skeleton className="my-2" height={180} count={1} />
          <Skeleton className="my-2" height={180} count={1} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative mb-28 md:mb-0 lg:mb-0">
      {loading ? (
        loadingSkeleton()
      ) : (
        <div>
          <div className="summary | md:rounded-b-md lg:rounded-b-md rounded-md max-w-xl ml-5 mr-5 bg-background flex flex-col self-center justify-self-center place-self-center md:flex-row lg:flex-row items-center md:items-start lg:items-start relative md:-top-12 lg:-top-[4.5rem] -top-4 md:mx-auto lg:mx-auto md:max-w-2xl lg:max-w-4xl">
            <div
              className="company-logo | z-50 md:rounded-t-none lg:rounded-t-none lg:rounded-r-none md:rounded-r-none md:rounded-bl-md lg:rounded-bl-md rounded-2xl flex justify-center items-center md:h-[8.75rem] md:w-[8.75rem] lg:h-[8.75rem] lg:w-[8.75rem] h-[3.125rem] w-[3.125rem] relative md:static lg:static -top-6"
              style={{ backgroundColor: `${logoBackground}` }}
            >
              <Image
                className="logo | md:h-4 lg:h-5 h-[0.65rem] w-auto z-50 flex"
                src={`/../.${logo}`}
                alt={`${company} logo`}
                height={1000}
                width={1000}
              />
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row md:items-center lg:items-center self-center justify-between px-10 md:px-12 lg:px-12 w-full text-center md:text-left lg:text-left relative md:static lg:static -top-2">
              <div>
                <h1 className="font-bold text-textHeader text-[1.25rem] lg:text-[1.75rem]">
                  {company}
                </h1>
                <p className="text-secondaryTextContent truncate">{website}</p>
              </div>
              <div className="mt-4 mb-7 lg:my-0">
                <Button text="Company Site" variant="default" size="wide" />
              </div>
            </div>
          </div>

          <div className="description-container | bg-background rounded-md px-8 md:px-12 lg:px-12 py-10 space-y-8 max-w-xl mx-auto ml-5 mr-5 md:max-w-2xl lg:max-w-4xl md:mx-auto lg:mx-auto relative top-4 md:-top-4 lg:-top-10">
            <section className="summary | space-y-14 md:space-y-0 lg:space-y-0 flex flex-col md:flex-row lg:flex-row justify-between">
              <div className="space-y-2">
                <div className="flex space-x-3 text-secondaryTextContent items-center">
                  <p className="job-date">{postedAt}</p>
                  <Image src={dividerIcon} alt="Divider icon" />
                  <p className="job-contract-type">{contract}</p>
                </div>
                <h1 className="font-bold text-lg lg:text-[1.75rem] text-textHeader">
                  {position}
                </h1>
                <p className="text-primary font-bold">{location}</p>
              </div>
              <div className="flex items-center">
                <Button text="Apply Now" variant="default" size="wide" />
              </div>
            </section>

            <section className="requirements-section | space-y-8">
              <p className="text-secondaryTextContent">{description}</p>
              <h3 className="text-textHeader">Requirements</h3>
              <p className="text-secondaryTextContent">
                {requirements.content}
              </p>
              <ul className="space-y-2 mx-5 list-disc marker:text-primary">
                {requirements.items.map((item: string, key: number) => {
                  return (
                    <li
                      key={key}
                      className="text-secondaryTextContent list-outside leading-relaxed pl-6"
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </section>

            <section className="role-section | space-y-8">
              <h3 className="text-textHeader">What You Will Do</h3>
              <p className="text-secondaryTextContent">{role.content}</p>
              <ol className="space-y-2 mx-5 list-decimal marker:text-primary marker:font-bold">
                {role.items.map((item: string, key: number) => {
                  return (
                    <li
                      key={key}
                      className=" text-secondaryTextContent list-outside leading-relaxed pl-6"
                    >
                      {item}
                    </li>
                  );
                })}
              </ol>
            </section>
          </div>
        </div>
      )}

      <TabBar position={position} company={company} />
    </div>
  );
}

export default Page;
