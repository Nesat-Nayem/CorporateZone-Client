import Image from "next/image";
import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const PostedJob = ({ job }) => {
  const { jobTitle, companyLogo, companyName, jobType, salary, location } = job;
  return (
    <div className="sm:grid grid-cols-12 cursor-pointer items-center bg-white rounded py-5 px-5">
      <div className="col-span-2">
        <Image src={companyLogo} alt="" width="100" height="100" />
      </div>
      <div className="col-span-8">
        <h1>
          {jobTitle}
          <span className="text-cyan-500 font-thin"> ({companyName})</span>
        </h1>
        <h4 className="flex items-center py-2">
          <FaRegMoneyBillAlt className="text-green-500 mr-2" />{" "}
          <strong>{salary}</strong>
        </h4>
        <h4 className="flex items-center ">
          <GoLocation className="text-green-500 mr-2" />{" "}
          <small>{location}</small>
        </h4>
        <h3 className="font-bold py-2 capitalize">{jobType} Job</h3>
      </div>
      <div className="col-span-2">
        <button className="bg-pink-500 px-4 py-1 rounded text-white">
          Apply
        </button>
      </div>
    </div>
  );
};

export default PostedJob;
