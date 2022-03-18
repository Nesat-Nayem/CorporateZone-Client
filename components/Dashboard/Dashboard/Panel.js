import React from 'react';
import { FcBusinessman, FcList, FcManager, FcPortraitMode, FcReadingEbook, FcRemoveImage } from 'react-icons/fc';

const Panel = () => {
  return (
    <div>
      {/* Highlight Start */}
      <h3 className="text-xl uppercase font-medium">top Features</h3>
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
      {/* End Highlight  */}

      {/* Jobs Start */}
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
        ​
      </div>
      {/* End Jobs */}

      {/*recent applicants start  */}
      <div className="applicant my-5">
        <h3 className="text-xl uppercase font-medium my-3">New applicants</h3>

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
      {/*End recent applicants   */}
    </div>
  );
};

export default Panel;