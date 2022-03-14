import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";
const RecruiterRoutes = ({ setTrigger }) => {
  return (
    <div>
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
        <Link href={`/dashboard/postedJobs`}>
          <a
            onClick={() => setTrigger(false)}
            className="px-4 py-2 text-lg font-extralight text-gray-50 hover:bg-white  hover:text-black cursor-pointer rounded-md flex items-center mx-5 mb-5"
          >
            <MdDashboard className="text-xl" />
            &nbsp;&nbsp;&nbsp;Posted Jobs
          </a>
        </Link>
        <Link href={`/dashboard/applicant`}>
          <a
            onClick={() => setTrigger(false)}
            className="px-4 py-2 text-lg font-extralight text-gray-50 hover:bg-white  hover:text-black cursor-pointer rounded-md flex items-center mx-5 mb-5"
          >
            <MdDashboard className="text-xl" />
            &nbsp;&nbsp;&nbsp;Applicant
          </a>
        </Link>
      </>
    </div>
  );
};

export default RecruiterRoutes;
