import React from "react";
import Image from "next/image";
import {
  MdMoreTime,
  MdPedalBike,
  MdMobileFriendly,
  MdSportsTennis,
  MdAddTask,
} from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useEffect } from "react";
import PostedJob from "./PostedJob";
import { useRouter } from "next/router";

const PostedJobs = (props) => {
  const [jobs, setJobs] = useState(props.jobs);
  const [category, setCategory] = useState();

  const router = useRouter();

  const filterJobs = async (e) => {
    setCategory(e.target.value);
    const response = await fetch(
      `https://sheltered-journey-99057.herokuapp.com/jobs?jobType=${e.target.value}`
    );
    const data = await response.json();
    setJobs(data.data);
    router.push(`/jobs?jobType=${e.target.value}`, undefined, {
      shallow: true,
    });
  };

  return (
    <section className="bg-gray-100 pb-10">
      <div className="md:w-9/12 w-11/12 mx-auto">
        {/* Search Start */}
        <div className="md:flex justify-center items-center md:max-w-[75%] md:mx-auto relative mt-12">
          <div className="my-12 md:w-5/12 focus:border-cyan-600 search_jobs">
            <label className="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  className="h-5 w-5 fill-slate-300"
                  viewBox="0 0 20 20"
                ></svg>
              </span>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search Job Keyword..."
                type="text"
                name="search"
              />
            </label>
          </div>
          <button className="bg-cyan-500 p-2 rounded-lg text-slate-200 font-bold w-2/12 md:absolute right-80 border-1 ring ring-inset ring-cyan-600 border-slate-50">
            Search
          </button>
        </div>
        {/* End Search */}

        {/* Start Filter */}
        <div className="md:flex justify-between items-center md:max-w-[75%] md:mx-auto relative mb-12 filter_jobs">
          <div>
            <h1 className="text-xl font-serif font-bold">Filter Jobs</h1>
          </div>
          <div>
            <select
              name=""
              id=""
              value={category}
              className="bg-cyan-600 text-white  px-2 py-2  focus:outline-none rounded"
              onChange={filterJobs}
            >
              <option value="all">All Jobs</option>
              <option value="intern">Intern</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
            </select>
          </div>
        </div>

        {/* End Filter */}

        <div>
          <p className="text-center pb-5 font-bold ">
            {jobs.length} total jobs found.
          </p>
        </div>

        {/* Start Jobs Card */}

        <div className="grid gird-cols-1 gap-4">
          {jobs?.map((job) => (
            <PostedJob key={job._id} job={job}></PostedJob>
          ))}
        </div>

        {/* End Jobs Card */}
      </div>
    </section>
  );
};

export default PostedJobs;