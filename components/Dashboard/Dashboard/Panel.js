import React from 'react';

const Panel = () => {
  return (
    <div>
      {/* Highlight Start */}
      <h3>with 5 boxes show most features</h3>
      <div className="feature_box flex flex-wrap justify-center items-center gap-5 my-5">
        <div className="job w-60 shadow-lg rounded-md flex justify-between items-center bg-slate-400">
          <h3>Icon</h3>
          <div>
            <h3>34</h3>
            <p>Posted Job</p>
          </div>
        </div>

        <div className="candidate w-60 shadow-lg rounded-md flex justify-between items-center bg-slate-400">
          <h3>Icon</h3>
          <div>
            <h3>34</h3>
            <p>Active Recruiter</p>
          </div>
        </div>
        <div className="candidate w-60 shadow-lg rounded-md flex justify-between items-center bg-slate-400">
          <h3>Icon</h3>
          <div>
            <h3>34</h3>
            <p>Active Recruiter</p>
          </div>
        </div>
        <div className="spam w-60 shadow-lg rounded-md flex justify-between items-center bg-slate-400">
          <h3>Icon</h3>
          <div>
            <h3>34</h3>
            <p>Spam Jobs</p>
          </div>
        </div>
        <div className="pro_users w-60 shadow-lg rounded-md flex justify-between items-center bg-slate-400">
          <h3>Icon</h3>
          <div>
            <h3>34</h3>
            <p>Pro Users</p>
          </div>
        </div>
      </div>
      {/* End Highlight  */}

      {/* Jobs Start */}
      <div className="recent_jobs my-5">
        <h3>recent jobs show with filtered</h3>
        <table className="table-auto lg:w-9/12 md:w-9/12 mx-auto space-y-5">
          <thead className='text-left'>
            <tr>
              <th className='text-xl font-medium'>Job Title</th>
              <th className='text-xl font-medium'>Applicants</th>
              <th className='text-xl font-medium'>Status</th>
              <th className='text-xl font-medium'>Deadline</th>
              <th className='text-xl font-medium'>Social Links</th>
            </tr>
          </thead>
                  <tbody className=''>
                      
            <tr className='bg-slate-200 rounded-lg my-3'>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm, Lockyer...+60 more</td>
              <td className='text-green-600'>Pending</td>
              <td className='text-red-600'>31-03-22</td>
                          <td className='text-blue-600'>
                              <span>youtube</span><br />
                              <span>facebook</span> <br />
                              <span>facebook</span>
              </td>
            </tr>
                      
            <tr className='bg-slate-200 rounded-lg my-3'>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm, Lockyer...+60 more</td>
              <td className='text-green-600'>Pending</td>
              <td className='text-red-600'>31-03-22</td>
                          <td className='text-blue-600'>
                              <span>youtube</span><br />
                              <span>facebook</span> <br />
                              <span>facebook</span>
              </td>
            </tr>
                      
            <tr className='bg-slate-200 rounded-lg my-3'>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm, Lockyer...+60 more</td>
              <td className='text-green-600'>Pending</td>
              <td className='text-red-600'>31-03-22</td>
                          <td className='text-blue-600'>
                              <span>youtube</span><br />
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
        <h3>show recent applicants here</h3>
      </div>
      {/*End recent applicants   */}
    </div>
  );
};

export default Panel;