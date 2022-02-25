import Image from "next/image";
import ContainerStyles from "../../../styles/Home.module.css";
import style from "./RecentJobs.module.css";
import { BsBuilding } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { ImLocation2 } from "react-icons/im";
import Link from "next/link";
import { useEffect, useState } from "react";

// const fakejobs = [
//   {
//     id: 1,
//     company: "Chisel Lap",
//     salary: "$30k-$50k",
//     location: "Central Hollis, NY, 11103, USA",
//     skills: "Nodejs, AWS, Redux, Nextjs",
//     education: "Does not matter",
//     img: "https://i.ibb.co/PhRDzm8/third-company.jpg",
//   },
//   {
//     id: 2,
//     company: "Chisel Lap",
//     salary: "$30k-$50k",
//     location: "Central Hollis, NY, 11103, USA",
//     skills: "Nodejs, AWS, Redux, Nextjs",
//     education: "Does not matter",
//     img: "https://i.ibb.co/KVTFzYF/first-company.jpg",
//   },
//   {
//     id: 3,
//     company: "Chisel Lap",
//     salary: "$30k-$50k",
//     location: "Central Hollis, NY, 11103, USA",
//     skills: "Nodejs, AWS, Redux, Nextjs",
//     education: "Does not matter",
//     img: "https://i.ibb.co/48ck7kn/second-company.jpg",
//   },
// ];

const RecentJobs = () => {
  const [fakejobs, setFakeJobs] = useState([]);
  useEffect(() => {
    fetch("https://sheltered-journey-99057.herokuapp.com/jobs")
      .then((res) => res.json())
      .then((data) => setFakeJobs(data.data.slice(0, 4)));
  }, []);

  if (!fakejobs.length) {
    return (
      <div>
        <h1 className="text-center py-10 text-red-500">Jobs loading....</h1>
      </div>
    );
  } else {
    return (
      <div className="bg-slate-100 py-10 ">
        <div className="space-y-7 mx-auto md:w-3/4 relative mb-6 recent_header">
          <h3 className="text-3xl text-center after:content-[''] after:absolute after:border-t-2 after:w-16 after: after:border-cyan-500 after:left-0 after:bottom-0 after:right-32 after:top-10 after:mx-auto font-medium text-slate-700 uppercase">
            Recent Jobs {fakejobs?.length}
          </h3>

          <div className={style.time}>
            <button>Part Time</button>
            <button>Full Time</button>
            <button>Internship</button>
          </div>
        </div>
        <div style={{ width: "80%", margin: "0 auto" }}>
          {fakejobs?.map((job) => (
            <div
              className={style.singe}
              style={{
                backgroundColor: "white",
                marginTop: "20px",
                padding: "25px 0",
              }}
              key={job.id}
            >
              <div className={style.gri}>
                <div>
                  <img src={job.companyLogo} alt="" />
                </div>
                <div>
                  <div className={style.icon}>
                    <BsBuilding className={style.icons} />
                    <h2 id={style.sing}>{job.companyName}</h2>
                  </div>
                  <div className={style.icon}>
                    <FaMoneyBillAlt className={style.icons} />
                    <h2 style={{ fontWeight: "700" }}>{job.salary}</h2>
                  </div>
                  <div className={style.icon}>
                    <GiSkills className={style.icons} />
                    <h2 id={style.sik}>{job.skills}</h2>
                  </div>
                  <div className={style.icon}>
                    <ImLocation2 className={style.icons} />
                    <h2>{job.location}</h2>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className={style.apply}>
                    <button>APPLY</button>
                    <h4>Remote Jobs</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
export default RecentJobs;
