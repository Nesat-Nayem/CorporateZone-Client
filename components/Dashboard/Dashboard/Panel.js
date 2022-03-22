import React, { useEffect, useState } from 'react';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { FcBiotech, FcBusinessman, FcList, FcManager, FcPortraitMode, FcReadingEbook, FcRemoveImage } from 'react-icons/fc';
import { GoLocation } from 'react-icons/go';
import { useSelector } from 'react-redux';

const Panel = () => {

  const [jobs, setJobs] = useState([]);
  
  useEffect(() => {
    fetch("https://murmuring-spire-15534.herokuapp.com/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.data);
        console.log(data.data.slice(0,3).reverse())
      });
  }, []);

  const latest = jobs.slice(0, 3).reverse();


      const loggedInUser = useSelector((state) => state.user.loggedInUser);
      
  return (
    <div>
      {/* Admin */}
      <h3 className="text-xl uppercase font-medium">top Features</h3>
      {loggedInUser?.role === "admin" && (
        <div>
          <div className="feature_box flex flex-wrap justify-center items-center gap-5 my-5">
            <div className="job w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcList className="text-7xl" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium">{jobs.length}</h3>
                <p>Total Jobs</p>
              </div>
            </div>

            <div className="candidate w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcBusinessman className="text-7xl" />
              </div>
              <div className="text-center">
                <h3>34</h3>
                <p>Active Recruiters</p>
              </div>
            </div>
            <div className="candidate w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcReadingEbook className="text-7xl" />
              </div>
              <div className="text-center">
                <h3>34</h3>
                <p>Active Candidates</p>
              </div>
            </div>
            <div className="spam w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcRemoveImage className="text-7xl" />
              </div>
              <div className="text-center">
                <h3>34</h3>
                <p>Spam Jobs</p>
              </div>
            </div>
            <div className="pro_users w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcManager className="text-7xl" />
              </div>
              <div className="text-center">
                <h3>34</h3>
                <p>Pro Users</p>
              </div>
            </div>
          </div>
          <div className="recent_jobs my-5">
            <h3 className="text-xl uppercase font-medium">Latest Jobs</h3>

            <div className="overflow-x-auto sm:mx-6 lg:mx-8">
              <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md sm:rounded-lg">
                  <table className="min-w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          TITLE
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Applicants
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Deadline
                        </th>

                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          STATUS
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Website
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {latest?.map((job) => (
                        <>
                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {job.jobTitle}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                             {loggedInUser?.username}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {job?.lastDate.toLocaleString()}
                            </td>
                            <td className="py-4 px-6 text-sm  whitespace-nowrap dark:text-gray-400">
                              <span
                                className={
                                  job.status === "pending"
                                    ? "py-1 px-2 rounded text-sm bg-pink-400 text-white  whitespace-nowrap dark:text-gray-400"
                                    : "py-1 px-2 rounded text-sm bg-green-400 text-white whitespace-nowrap dark:text-gray-400"
                                }
                              >
                                {job.status}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                              {job?.companyWebsite}
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          <div className="applicant my-5">
            <h3 className="text-xl uppercase font-medium my-3">
              New applicants
            </h3>

            <div className="flex flex-wrap justify-evenly items-center gap-5">
              <div className="job w-60 shadow-lg rounded-md flex flex-col flex-wrap justify-evenly items-center bg-[#d9effa] py-3">
                <div className="ring-2 rounded-full ring-slate-600">
                  <FcList className="text-7xl" />
                </div>
                <div className="text-center my-3">
                  <h3>Sumonto</h3>
                  <p>MERN-Stack Developer</p>
                  <button className="bg-cyan-500 px-3 py-1 rounded-lg text-white my-3">
                    view Profile
                  </button>
                </div>
              </div>

              <div className="job w-60 shadow-lg rounded-md flex flex-col flex-wrap justify-evenly items-center bg-[#d9effa] py-3">
                <div className="ring-2 rounded-full ring-slate-600">
                  <FcList className="text-7xl" />
                </div>
                <div className="text-center my-3">
                  <h3>Sumonto</h3>
                  <p>MERN-Stack Developer</p>
                  <button className="bg-cyan-500 px-3 py-1 rounded-lg text-white my-3">
                    view Profile
                  </button>
                </div>
              </div>

              <div className="job w-60 shadow-lg rounded-md flex flex-col flex-wrap justify-evenly items-center bg-[#d9effa] py-3">
                <div className="ring-2 rounded-full ring-slate-600">
                  <FcList className="text-7xl" />
                </div>
                <div className="text-center my-3">
                  <h3>Sumonto</h3>
                  <p>MERN-Stack Developer</p>
                  <button className="bg-cyan-500 px-3 py-1 rounded-lg text-white my-3">
                    view Profile
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      )}
      {/* Recruiter */}
      {loggedInUser?.role === "recruiter" && (
        <div>
          <div className="feature_box flex flex-wrap justify-center items-center gap-5 my-5">
            <div className="job w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcList className="text-7xl" />
              </div>
              <div className="text-center">
                <h3>34</h3>
                <p>Posted Jobs</p>
              </div>
            </div>

            {/* <div className="candidate w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcBusinessman className="text-7xl" />
              </div>
              <div className="text-center">
                <h3>34</h3>
                <p>Active Recruiters</p>
              </div>
            </div> */}
            <div className="candidate w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcReadingEbook className="text-7xl" />
              </div>
              <div className="text-center">
                <h3>34</h3>
                <p>Active Candidates</p>
              </div>
            </div>
            <div className="spam w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcRemoveImage className="text-7xl" />
              </div>
              <div className="text-center">
                <h3>34</h3>
                <p>Spam Jobs</p>
              </div>
            </div>
            {/* <div className="pro_users w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcManager className="text-7xl" />
              </div>
              <div className="text-center">
                <h3>34</h3>
                <p>Pro Users</p>
              </div>
            </div> */}
          </div>
          <div className="recent_jobs my-5">
            <h3 className="text-xl uppercase font-medium">Latest Jobs</h3>
            <table className="table-auto lg:w-9/12 md:w-9/12 mx-auto space-y-5">
              <thead className="text-left">
                <tr>
                  <th className="text-xl font-medium">Job Title</th>
                  <th className="text-xl font-medium">Applicants</th>
                  <th className="text-xl font-medium">Status</th>
                  <th className="text-xl font-medium">Deadline</th>
                  <th className="text-xl font-medium">Social Links</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="bg-slate-200 rounded-lg my-3">
                  <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                  <td>Malcolm, Lockyer...+60 more</td>
                  <td className="text-green-600">Pending</td>
                  <td className="text-red-600">31-03-22</td>
                  <td className="text-blue-600">
                    <span>youtube</span>
                    <br />
                    <span>facebook</span> <br />
                    <span>facebook</span>
                  </td>
                </tr>

                <tr className="bg-slate-200 rounded-lg my-3">
                  <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                  <td>Malcolm, Lockyer...+60 more</td>
                  <td className="text-green-600">Pending</td>
                  <td className="text-red-600">31-03-22</td>
                  <td className="text-blue-600">
                    <span>youtube</span>
                    <br />
                    <span>facebook</span> <br />
                    <span>facebook</span>
                  </td>
                </tr>

                <tr className="bg-slate-200 rounded-lg my-3">
                  <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                  <td>Malcolm, Lockyer...+60 more</td>
                  <td className="text-green-600">Pending</td>
                  <td className="text-red-600">31-03-22</td>
                  <td className="text-blue-600">
                    <span>youtube</span>
                    <br />
                    <span>facebook</span> <br />
                    <span>facebook</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="applicant my-5">
            <h3 className="text-xl uppercase font-medium my-3">
              New applicants
            </h3>

            <div className="flex flex-wrap justify-evenly items-center gap-5">
              <div className="job w-60 shadow-lg rounded-md flex flex-col flex-wrap justify-evenly items-center bg-[#d9effa] py-3">
                <div className="ring-2 rounded-full ring-slate-600">
                  <FcList className="text-7xl" />
                </div>
                <div className="text-center my-3">
                  <h3>Sumonto</h3>
                  <p>MERN-Stack Developer</p>
                  <button className="bg-cyan-500 px-3 py-1 rounded-lg text-white my-3">
                    view Profile
                  </button>
                </div>
              </div>

              <div className="job w-60 shadow-lg rounded-md flex flex-col flex-wrap justify-evenly items-center bg-[#d9effa] py-3">
                <div className="ring-2 rounded-full ring-slate-600">
                  <FcList className="text-7xl" />
                </div>
                <div className="text-center my-3">
                  <h3>Sumonto</h3>
                  <p>MERN-Stack Developer</p>
                  <button className="bg-cyan-500 px-3 py-1 rounded-lg text-white my-3">
                    view Profile
                  </button>
                </div>
              </div>

              <div className="job w-60 shadow-lg rounded-md flex flex-col flex-wrap justify-evenly items-center bg-[#d9effa] py-3">
                <div className="ring-2 rounded-full ring-slate-600">
                  <FcList className="text-7xl" />
                </div>
                <div className="text-center my-3">
                  <h3>Sumonto</h3>
                  <p>MERN-Stack Developer</p>
                  <button className="bg-cyan-500 px-3 py-1 rounded-lg text-white my-3">
                    view Profile
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      )}
      {/* Candidate */}
      {loggedInUser?.role === "candidate" && (
        <div>
          <div className="feature_box flex flex-wrap justify-center items-center gap-5 my-5">
            <div className="job w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcList className="text-7xl" />
              </div>
              <div className="text-center">
                <h3 className="font-medium">49</h3>
                <p className="font-medium">Posted Jobs</p>
              </div>
            </div>

            <div className="candidate w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcBusinessman className="text-7xl" />
              </div>
              <div className="text-center">
                <h3 className="font-medium">34</h3>
                <p className="font-medium">Active Recruiters</p>
              </div>
            </div>

            <div className="pro_users w-60 shadow-lg rounded-md flex justify-evenly items-center bg-[#d9effa] py-3">
              <div className="bg-[#ebf8fe]">
                <FcBiotech className="text-7xl" />
              </div>
              <div className="text-center">
                <h3 className="font-medium">67</h3>
                <p className="font-medium">Match Jobs</p>
              </div>
            </div>
          </div>
          <div className="recent_jobs my-5">
            <h3 className="text-xl uppercase font-medium">Latest Jobs</h3>
            <table className="table-auto lg:w-9/12 md:w-9/12 mx-auto space-y-5">
              <thead className="text-left">
                <tr>
                  <th className="text-xl font-medium">Job Title</th>
                  <th className="text-xl font-medium">Applicants</th>
                  <th className="text-xl font-medium">Status</th>
                  <th className="text-xl font-medium">Deadline</th>
                  <th className="text-xl font-medium">Social Links</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="bg-slate-200 rounded-lg my-3">
                  <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                  <td>Malcolm, Lockyer...+60 more</td>
                  <td className="text-green-600">Pending</td>
                  <td className="text-red-600">31-03-22</td>
                  <td className="text-blue-600">
                    <span>youtube</span>
                    <br />
                    <span>facebook</span> <br />
                    <span>facebook</span>
                  </td>
                </tr>

                <tr className="bg-slate-200 rounded-lg my-3">
                  <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                  <td>Malcolm, Lockyer...+60 more</td>
                  <td className="text-green-600">Pending</td>
                  <td className="text-red-600">31-03-22</td>
                  <td className="text-blue-600">
                    <span>youtube</span>
                    <br />
                    <span>facebook</span> <br />
                    <span>facebook</span>
                  </td>
                </tr>

                <tr className="bg-slate-200 rounded-lg my-3">
                  <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                  <td>Malcolm, Lockyer...+60 more</td>
                  <td className="text-green-600">Pending</td>
                  <td className="text-red-600">31-03-22</td>
                  <td className="text-blue-600">
                    <span>youtube</span>
                    <br />
                    <span>facebook</span> <br />
                    <span>facebook</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="applicant my-5">
            <h3 className="text-xl uppercase font-medium my-3">
              New applicants
            </h3>

            <div className="flex flex-wrap justify-evenly items-center gap-5">
              <div className="job w-60 shadow-lg rounded-md flex flex-col flex-wrap justify-evenly items-center bg-[#d9effa] py-3">
                <div className="ring-2 rounded-full ring-slate-600">
                  <FcList className="text-7xl" />
                </div>
                <div className="text-center my-3">
                  <h3>Sumonto</h3>
                  <p>MERN-Stack Developer</p>
                  <button className="bg-cyan-500 px-3 py-1 rounded-lg text-white my-3">
                    view Profile
                  </button>
                </div>
              </div>

              <div className="job w-60 shadow-lg rounded-md flex flex-col flex-wrap justify-evenly items-center bg-[#d9effa] py-3">
                <div className="ring-2 rounded-full ring-slate-600">
                  <FcList className="text-7xl" />
                </div>
                <div className="text-center my-3">
                  <h3>Sumonto</h3>
                  <p>MERN-Stack Developer</p>
                  <button className="bg-cyan-500 px-3 py-1 rounded-lg text-white my-3">
                    view Profile
                  </button>
                </div>
              </div>

              <div className="job w-60 shadow-lg rounded-md flex flex-col flex-wrap justify-evenly items-center bg-[#d9effa] py-3">
                <div className="ring-2 rounded-full ring-slate-600">
                  <FcList className="text-7xl" />
                </div>
                <div className="text-center my-3">
                  <h3>Sumonto</h3>
                  <p>MERN-Stack Developer</p>
                  <button className="bg-cyan-500 px-3 py-1 rounded-lg text-white my-3">
                    view Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Panel;