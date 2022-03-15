import React, { useEffect, useState } from "react";

const Applicant = () => {

    const [resume, setResume] = useState([])

     useEffect(() =>{
        fetch('https://murmuring-spire-15534.herokuapp.com/appliedJobs')
        .then(res => res.json())
        .then(data => setResume(data.reverse()))
    },[])



    return (
      

<div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-md sm:rounded-lg">
              <table className="min-w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      JOB ID
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      APPLICANT EMAIL
                    </th>
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
                      RESUME
                    </th>
                    {/* <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      STATUS
                    </th> */}
                    {/* <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Update
                    </th> */}
                    {/* <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      action
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {resume?.map((job) => (
                    <>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {job.jobId}
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          {job.candidateEmail}
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          {job.jobTitle}
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            <a href={job.resumeLink} target="_blank" rel="noreferrer"  >Resum Link</a>
                        </td>
                        {/* <td className="py-4 px-6 text-sm  whitespace-nowrap dark:text-gray-400">
                          <span
                            style={{
                              backgroundColor: "black",
                              padding: "10px 20px",
                              color: "white",
                              border: "1px solid grey",
                              borderRadius: "10px",
                            }}
                          >
                            {job.status}
                          </span>
                        </td> */}
                        {/* <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <Link href={`/updatejobs/${job._id}`}>
                            <a>Edit</a>
                          </Link>
                        </td> */}
                        {/* <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <button
                            onClick={() => handleDelete(job._id)}
                            type="button"
                            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                          >
                            Remove
                          </button>
                        </td> */}
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>



        </div>
    );
};

export default Applicant;