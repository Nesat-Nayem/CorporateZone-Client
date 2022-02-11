import Image from 'next/image';
import ContainerStyles from "../../../styles/Home.module.css";


const fakejobs = [
  {
    id: 1,
    company: "Chisel Lap",
    salary: "$30k-$50k",
    location: "Central Hollis, NY, 11103, USA",
    skills: "Nodejs, AWS, Redux, Nextjs",
    education: "Does not matter",
    img: "https://i.ibb.co/PhRDzm8/third-company.jpg"
  },
  {
    id: 2,
    company: "Chisel Lap",
    salary: "$30k-$50k",
    location: "Central Hollis, NY, 11103, USA",
    skills: "Nodejs, AWS, Redux, Nextjs",
    education: "Does not matter",
    img: "https://i.ibb.co/KVTFzYF/first-company.jpg"
  },
  {
    id: 3,
    company: "Chisel Lap",
    salary: "$30k-$50k",
    location: "Central Hollis, NY, 11103, USA",
    skills: "Nodejs, AWS, Redux, Nextjs",
    education: "Does not matter",
    img: "https://i.ibb.co/48ck7kn/second-company.jpg"
  }
];

const RecentJobs = () => {

  return (
    <div className={ContainerStyles.container}>

      <div className="md:flex flex-col space-y-7 justify-between items-center relative md:w-3/4 md:mx-auto my-20 recent_header">
        <h3 className="text-3xl text-center after:content-[''] after:absolute after:border-t-2 after:w-16 after: after:border-cyan-500 after:left-0 after:bottom-0 after:right-32 after:top-10 after:mx-auto font-medium text-slate-700 uppercase">
          Recent Jobs {fakejobs.length}
        </h3>

              <div className="space-y-3 xs:text-center">
              <ul className="md:flex text-center mx-auto md:flex-wrap justify-center items-center">
          <li className="md:mx-2 my-1 capitalize font-medium bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
            <a href="#">Featured Jobs</a>
          </li>
          <li className="md:mx-2 my-1 capitalize font-medium bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
            <a href="#">Recent Jobs</a>
          </li>
          <li className="md:mx-2 my-1 capitalize font-medium bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
            <a href="#">Part-Time</a>
          </li>
          <li className="md:mx-2 my-1 capitalize font-medium bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
            <a href="#">Full-Time</a>
          </li>
          <li className="md:mx-2 my-1 capitalize font-medium bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
            <a href="#">Contractual</a>
          </li>
          <li className="md:mx-2 my-1 capitalize font-medium bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
            <a href="#">Internships</a>
          </li>
        {/* </ul> 
              
        <ul className="flex flex-wrap justify-center items-center"> */}
          <li className="md:mx-2 my-1 capitalize font-medium bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
            <a href="#">Past 7 Days</a>
          </li>
          <li className="md:mx-2 my-1 capitalize font-medium bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
            <a href="#">Locations</a>
          </li>
          <li className="md:mx-2 my-1 capitalize font-medium bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
            <a href="#">On Site</a>
          </li>
          <li className="md:mx-2 my-1 capitalize font-medium bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
            <a href="#">Remote</a>
          </li>
          <li className="md:mx-2 my-1 capitalize font-medium bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
            <a href="#">Hybrid</a>
          </li>
        </ul>
      </div>
              
      </div>

      {
        fakejobs.map((job) => {
          return (   <div className='"md:flex flex-col justify-center items-center bg-slate-100 hover:bg-cyan-600 hover:text-white md:w-3/4 mx-auto my-5 rounded-lg border-2 transition-all' key={job.id}>
          <div className="md:flex md:justify-around md:items-center md:w-4/4 mx-auto rounded-lg py-3 job_card relative">
            <div className="company_logo text-center relative">
                      <Image
                          height="150px"
                          width="200px"
                          src={job?.img}
                      />
    
            </div>
            <div className="mx-3 space-y-3 jobs_content relative">
                <h4> <span className='font-bold'>Company Name: </span> {job?.company}</h4>
                <h3> <span className='font-bold'>Salary: </span> {job?.salary}</h3>
                <p><span className='font-bold'>Required SKills: </span>{job?.skills}</p>
                <p><span className='font-bold'>Location: </span>{job?.location}</p>
              <h5><span className='font-bold'>Keywords: </span>: Media, Medicla, Restaurants</h5>
            </div>
                  <div className="apply_btn md:space-y-12 text-center before:content-[''] md:before:absolute before:border-r-2  before:top-0 before:left-0 before:bottom-0 before:right-80 before:mx-5 hover:before:border-cyan-600 transition-all
            ">
              <li className="mx-2 my-3 bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
                <a href="#">Remote Jobs</a>
              </li>
              <li className="mx-2 bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
                <a href="#">Apply</a>
              </li>
                  </div>
                  </div>
                  
                  <div className='border-t-2 py-1 hover:border-cyan-600 hover:bg-cyan-600 hover:text-white transition-all'>
                  <h5 className='text-center'>Keywords: Media, Medicla, Restaurants</h5>
                  </div>
          </div>
          )
        })
       }



    </div>
  );
};




export default RecentJobs;
