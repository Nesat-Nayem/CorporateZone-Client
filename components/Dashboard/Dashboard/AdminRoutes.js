import Link from "next/link";
import React from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { FaRegBuilding, FaUserCircle, FaUserGraduate } from "react-icons/fa";
import { MdAdminPanelSettings, MdDashboard } from "react-icons/md";

const AdminRoutes = ({ setTrigger }) => {
  return (
    <>
      <Link href={`/dashboard/profile`}>
        <a
          onClick={() => setTrigger(false)}
          className="px-4 py-2 text-lg font-extralight text-gray-50 hover:bg-white  hover:text-black cursor-pointer rounded-md flex items-center mx-5 mb-5"
        >
          <MdDashboard className="text-lg" />
          &nbsp;&nbsp;&nbsp;Profile
        </a>
      </Link>
      {/* <Link href={`/dashboard/user`}>
        <a
          onClick={() => setTrigger(false)}
          className="px-4 py-2 text-lg font-extralight text-gray-50 hover:bg-white  hover:text-black cursor-pointer rounded-md flex items-center mx-5 mb-5"
        >
          <FaUserCircle className="text-lg" />
          &nbsp;&nbsp;&nbsp;USER
        </a>
      </Link> */}
      <Link href={`/dashboard/jobs`}>
        <a
          onClick={() => setTrigger(false)}
          className="px-4 py-2 text-lg font-extralight text-gray-50 hover:bg-white  hover:text-black cursor-pointer rounded-md flex items-center mx-5 mb-5"
        >
          <BsBagCheckFill className="text-lg" />
          &nbsp;&nbsp;&nbsp;JOBS
        </a>
      </Link>
      <Link href={`/dashboard/addadmin`}>
        <a
          onClick={() => setTrigger(false)}
          className="px-4 py-2 text-lg font-extralight text-gray-50 hover:bg-white  hover:text-black cursor-pointer rounded-md flex items-center mx-5 mb-5"
        >
          <MdAdminPanelSettings className="text-lg" />
          &nbsp;&nbsp;&nbsp;ADD ADMIN
        </a>
      </Link>
      <Link href={`/dashboard/candidate`}>
        <a
          onClick={() => setTrigger(false)}
          className="px-4 py-2 text-lg font-extralight text-gray-50 hover:bg-white  hover:text-black cursor-pointer rounded-md flex items-center mx-5 mb-5"
        >
          <FaUserGraduate className="text-lg" />
          &nbsp;&nbsp;&nbsp;CANDIDATES
        </a>
      </Link>
      <Link href={`/dashboard/company`}>
        <a
          onClick={() => setTrigger(false)}
          className="px-4 py-2 text-lg font-extralight text-gray-50 hover:bg-white  hover:text-black cursor-pointer rounded-md flex items-center mx-5 mb-5"
        >
          <FaRegBuilding className="text-lg" />
          &nbsp;&nbsp;&nbsp;RECRUITER
        </a>
      </Link>
    </>
  );
};

export default AdminRoutes;