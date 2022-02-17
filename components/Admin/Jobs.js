import React, { useEffect, useState } from 'react';
import style from './jobs.module.css'

const Jobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('http://localhost:4030/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>

            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center">
                                <thead className="border-b bg-gray-800">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                           TITLE
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            COMPANY
                                        </th>
                            
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            SALARY
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            EXPERIENCE
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            UPDATE
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            ACTION
                                        </th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                   {
                                       jobs.map(job => (
                                        <tr  className="bg-white border-b">
                                        <td style={{color:'white'}} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b bg-gray-800">{job.jobTitle}</td>
                                        <td style={{color:'white'}} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-b bg-gray-800">
                                        {job.companyName}
                                        </td>
                                        <td style={{color:'white'}} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-b bg-gray-800">
                                            {job.salary}
                                        </td>
                                        <td style={{color:'white'}} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-b bg-gray-800">
                                        {job.experience}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700">Edit</button>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700">Remove</button>
                                        </td>
                                    </tr>
                                       ))
                                   }
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Jobs;
