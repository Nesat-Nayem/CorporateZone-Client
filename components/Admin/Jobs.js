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
        <div >



<div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-md sm:rounded-lg">
                <table className="min-w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            TITLE
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            COMPANY
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            SALARY
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            EXPERIENCE
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            Update 
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            action
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            jobs.map(job => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {job.jobTitle}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {job.companyName}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {job.salary}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {job.experience}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Edit</button>
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Remove</button>
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





            {/* <div classNameName="flex flex-col">
                <div classNameName="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div classNameName="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                        <div classNameName="overflow-hidden">
                            <table classNameName="min-w-full text-center">
                                <thead classNameName="border-b bg-gray-800">
                                    <tr>
                                        <th scope="col" classNameName="text-sm font-medium text-white px-6 py-4">
                                           TITLE
                                        </th>
                                        <th scope="col" classNameName="text-sm font-medium text-white px-6 py-4">
                                            COMPANY
                                        </th>
                            
                                        <th scope="col" classNameName="text-sm font-medium text-white px-6 py-4">
                                            SALARY
                                        </th>
                                        <th scope="col" classNameName="text-sm font-medium text-white px-6 py-4">
                                            EXPERIENCE
                                        </th>
                                        <th scope="col" classNameName="text-sm font-medium text-white px-6 py-4">
                                            UPDATE
                                        </th>
                                        <th scope="col" classNameName="text-sm font-medium text-white px-6 py-4">
                                            ACTION
                                        </th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                   {
                                       jobs.map(job => (
                                        <tr  classNameName="bg-white border-b">
                                        <td style={{color:'white'}} classNameName="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b bg-gray-800">{job.jobTitle}</td>
                                        <td style={{color:'white'}} classNameName="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-b bg-gray-800">
                                        {job.companyName}
                                        </td>
                                        <td style={{color:'white'}} classNameName="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-b bg-gray-800">
                                            {job.salary}
                                        </td>
                                        <td style={{color:'white'}} classNameName="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-b bg-gray-800">
                                        {job.experience}
                                        </td>
                                        <td classNameName="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap bg-gray-800">
                                        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700">Edit</button>
                                        </td>
                                        <td classNameName="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700">Remove</button>
                                        </td>
                                    </tr>
                                       ))
                                   }
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> */}


        </div>
    );
};

export default Jobs;


