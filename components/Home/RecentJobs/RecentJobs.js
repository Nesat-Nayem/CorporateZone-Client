import Image from 'next/image';
import ContainerStyles from "../../../styles/Home.module.css";
import { FaBuilding } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { ImLocation } from "react-icons/im";
import { FaMoneyCheckAlt } from "react-icons/fa";
import style from './RecentJobs.module.css'


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
    <div style={{backgroundColor:'#E6DBE8',  marginTop:'20px', padding:'10px 0'}} >
      <div className={style.main}>
          <h3>RECENT JOBS {fakejobs.length}</h3>
        <div className={style.top}>
          {
            fakejobs.map((job) =>
              <div className={style.single} key={job.id}>
                <div>
                  <img src={job.img} alt='' />
                  <div>
                    <div className={style.one}>
                      <FaBuilding className={style.icon} />
                      <h2> {job.company}</h2>
                    </div>
                    <div className={style.one}>
                      <GiSkills  className={style.icon} />
                      <h2>{job.skills}</h2>
                    </div>
                    <div className={style.one}>
                      <ImLocation  className={style.icon} />
                      <h2>{job.location}</h2>
                    </div>
                    <div className={style.one}>
                      <FaMoneyCheckAlt  className={style.icon} />
                      <h2>{job.salary}</h2>
                    </div>
                  </div>
                </div>
                  <div className={style.but}>
                  <button>Full Time</button>
                  <button>Part Time</button>
                  <button>Mid Level</button>
                  </div>
                  <div style={{marginTop:'13px'}}>
                    <div className={style.remote}>
                    <button style={{marginTop:'13px'}} type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">APPLY NOW</button>
                   <div className={style.head}>
                   <h1>Remote Jobs</h1>
                   </div>
                    </div>
                  </div>
              </div>)
          }
        </div>


      </div>

    </div>



  );
}
export default RecentJobs;

