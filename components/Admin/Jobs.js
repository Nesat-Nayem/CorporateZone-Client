import React, { useEffect, useState } from 'react';
import style from './jobs.module.css'

const Jobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() =>{
        fetch('http://localhost:4030/jobs')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            {
                jobs.map(job => 
                <div style={{ marginTop:'10px'}} key={job._id}>
                    <div className={style.jobs}>
                        <div className={style.image}>
                            <img src={job.companyLogo} alt='' />
                        </div>
                        <div className={style.title}>
                            <h2>Title: {job.jobTitle}</h2>
                            <p> <span style={{fontWeight:'700'}}>Description</span>: {job.jobDescription}</p>
                            <p><span style={{fontWeight:'700'}}>Skill</span>: {job.skills}</p>
                            <p> <span style={{fontWeight:'700'}}>Company</span>: {job.companyName}</p>
                            <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Remove</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Jobs;
