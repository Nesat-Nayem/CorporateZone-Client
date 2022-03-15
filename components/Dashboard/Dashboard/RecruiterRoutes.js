import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
const RecruiterRoutes = ({ setTrigger }) => {
  return (
    <>
      <>
        <Link href={`/dashboard/profile`}>
          <a
            onClick={() => setTrigger(false)}
            className=" py-4 text-lg font-extralight text-gray-300 hover:text-white   cursor-pointer flex items-center  px-10  "
          >
            <FaUserTie className="text-xl" />
            &nbsp;&nbsp;&nbsp;Profile
          </a>
        </Link>
        <Link href={`/dashboard/postedJobs`}>
          <a
            onClick={() => setTrigger(false)}
            className=" py-4 text-lg font-extralight text-gray-300 hover:text-white   cursor-pointer flex items-center  px-10  "
          >
            <MdDashboard className="text-xl" />
            &nbsp;&nbsp;&nbsp;Posted Jobs
          </a>
        </Link>
      </>
    </>
  );
};

export default RecruiterRoutes;
