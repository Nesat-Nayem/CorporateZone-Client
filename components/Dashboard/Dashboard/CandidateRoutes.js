import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";

const CandidateRoutes = ({ setTrigger }) => {
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
          <MdDashboard className="text-xl" />
          &nbsp;&nbsp;&nbsp;Applied Jobs
        </a>
      </Link>
      <Link href={`/dashboard/topCompanies`}>
        <a
          onClick={() => setTrigger(false)}
          className="px-4 py-2 text-lg font-extralight text-gray-50 hover:bg-white  hover:text-black cursor-pointer rounded-md flex items-center mx-5 mb-5"
        >
          <MdDashboard className="text-xl" />
          &nbsp;&nbsp;&nbsp;Top Companies
        </a>
      </Link>
      {/* skill test */}
      <Link href={`/dashboard/skillTest`}>
        <a
          onClick={() => setTrigger(false)}
          className="px-4 py-2 text-lg font-extralight text-gray-50 hover:bg-white  hover:text-black cursor-pointer rounded-md flex items-center mx-5 mb-5"
        >
          <MdDashboard className="text-xl" />
          &nbsp;&nbsp;&nbsp;Skill Test
        </a>
      </Link>
    </>
  );
};

export default CandidateRoutes;