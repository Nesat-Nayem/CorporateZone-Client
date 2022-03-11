import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { BiCalendarCheck } from "react-icons/bi";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

const CandidateRoutes = ({ setTrigger }) =>
{
  return (
    <>
      <Link href={`/dashboard/profile`}>
        <a
          onClick={() => setTrigger(false)}
          className="px-4 py-2 text-lg font-extralight text-gray-50 hover:bg-white  hover:text-black cursor-pointer rounded-md flex items-center mx-5 mb-5"
        >
          <MdDashboard className="text-xl" />
          &nbsp;&nbsp;&nbsp;Profile
        </a>
      </Link>
      <Link href={`/dashboard/appliedJobs`}>
        <a
          onClick={() => setTrigger(false)}
          className="px-4 py-2 text-lg font-extralight text-gray-50 hover:bg-white  hover:text-black cursor-pointer rounded-md flex items-center mx-5 mb-5"
        >
          <BsFillBookmarkCheckFill className="text-xl" />
          &nbsp;&nbsp;&nbsp;Applied Jobs
        </a>
      </Link>
      <Link href={`/dashboard/topCompanies`}>
        <a
          onClick={() => setTrigger(false)}
          className="px-4 py-2 text-lg font-extralight text-gray-50 hover:bg-white  hover:text-black cursor-pointer rounded-md flex items-center mx-5 mb-5"
        >
          <MdDashboard className="text-xl" />
          &nbsp;&nbsp;&nbsp;Companies
        </a>
      </Link>
      {/* skill test */}
      <Link href={`/dashboard/skillTest`}>
        <a
          onClick={() => setTrigger(false)}
          className="px-4 py-2 text-lg font-extralight text-gray-50 hover:bg-white  hover:text-black cursor-pointer rounded-md flex items-center mx-5 mb-5"
        >
          <BiCalendarCheck className="text-xl" />
          &nbsp;&nbsp;&nbsp;Skill Test
        </a>
      </Link>

      {/* build resume */}
      <Link href={`/dashboard/BuildResume`}>
        <a
          onClick={() => setTrigger(false)}
          className="px-4 py-2 text-lg font-extralight text-gray-50 hover:bg-white  hover:text-black cursor-pointer rounded-md flex items-center mx-5 mb-5"
        >
          <MdDashboard className="text-xl" />
          &nbsp;&nbsp;&nbsp;Build Resume
        </a>
      </Link>
    </>
  );
};

export default CandidateRoutes;
