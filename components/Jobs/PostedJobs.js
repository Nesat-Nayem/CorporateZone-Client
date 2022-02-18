import React from "react";
import Image from "next/image";
import { MdMoreTime, MdPedalBike } from "react-icons/md";
import { useForm } from "react-hook-form";

const PostedJobs = () => {
  // Filtered Options
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      {/* Search Start */}
      <div className="md:flex justify-center items-center md:max-w-[75%] md:mx-auto relative mt-12">
        <div className="my-12 md:w-5/12 focus:border-cyan-600 search_jobs">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
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
      <div className="md:flex justify-center items-center md:max-w-[75%] md:mx-auto relative mb-12 filter_jobs">
        <form onSubmit={handleSubmit(onSubmit)} className="jobs_tabs">
          <select
            className="bg-cyan-100 text-lg text-center bottom-0 p-2 rounded-lg text-cyan-600 mx-3 job_type"
            {...register("Type")}
          >
            <option value="type">Type</option>
            <option value="part_time">Part Time</option>
            <option value="fulltime">Full Time</option>
            <option value="internship">Internship</option>
          </select>

          <select
            className="bg-cyan-100 text-lg text-center bottom-0 p-2 rounded-lg text-cyan-600 mx-3 mx-3"
            {...register("location")}
          >
            <option value="locations">Location</option>
            <option value="part_time">USA</option>
            <option value="fulltime">Europe</option>
            <option value="internship">Middle West</option>
          </select>

          <select
            className="bg-cyan-100 text-lg text-center bottom-0 p-2 rounded-lg text-cyan-600 mx-3 mx-3"
            {...register("experience")}
          >
            <option value="experience">Experience</option>
            <option value="entry_level">Entry Level</option>
            <option value="mid_level">Mid Level</option>
            <option value="sr_level">Sr Level</option>
          </select>

          <input
            className="bg-cyan-500 p-2 text-white rounded-lg"
            type="submit"
          />
        </form>
      </div>

      {/* End Filter */}

      {/* Start Jobs Card */}
      <div className="flex justify-evenly items-center mx-auto my-12 border-2 border-slate-200 w-7/12 rounded-lg jobs_box">
        <Image
          className=""
          width={120}
          height={120}
          src="https://github.com/Nesat-Nayem/CorporateZone-Clitent/blob/listed_job/ya/images/first_company.jpg?raw=true"
        />

        <div className=" w-6/12 job_card">
          <h3>
            Front End Engineer <span className="text-slate-500">/ MERN</span>
          </h3>
          <article>
            <p>Jackson Heights, NY</p>
            <h4>Onsite</h4>
          </article>
        </div>

        <div className=" w-4/12 open_job">
          <div className="flex justify-evenly items-center advantages_icon">
            <div>
              Facilities with icon
              <MdMoreTime />
              <MdPedalBike />
            </div>
            <h4>Salary Icon</h4>
            <div className="text-center">
              <h5>Deadline: Feb 20</h5>
              <button className="bg-cyan-500 text-slate-900 px-3 py-1 rounded-lg">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* End Jobs Card */}
    </div>
  );
};

export default PostedJobs;
