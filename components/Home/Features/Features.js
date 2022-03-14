import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaMoneyBillAlt, FaRegMoneyBillAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

SwiperCore.use([Autoplay, EffectCoverflow, Pagination]);

const Features = (props) => {
    const [jobs, setJobs] = useState(props.jobs);
  const router = useRouter();

 useEffect(() => {
   fetch("https://murmuring-spire-15534.herokuapp.com/jobs")
     .then((res) => res.json())
     .then((data) => {
       setJobs(
         data.data
           .reverse()
           .filter((e) => e.jobTitle && e.jobDescription && e.companyLogo)
           .slice(0, 5)
       );
       console.log(data.data);
     });
 }, []);
    // const feature = jobs.slice(0,5)
  return (
    <>
      <div className="space-y-7 mx-auto md:w-3/4 relative mb-6 recent_header">
        <h3 className="text-3xl text-center after:content-[''] after:absolute after:border-t-2 after:w-16 after: after:border-cyan-500 after:left-0 after:bottom-0 after:right-32 after:top-10 after:mx-auto font-medium text-slate-700 uppercase mb-16">
          Features Jobs
        </h3>
        
        <Swiper
          navigation
          pagination={{ clickable: true }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          slidesPerView={2}
          centeredSlidestrue
                  className="lg:w-9/12 md:w-11/12 mx-auto h-full"
                //   style={{height:'350px'}}
        >
          <div style={{ width: "90%", margin: "0 auto" }}>
            {jobs?.map((job) => {
              return (
                <SwiperSlide className="w-60 h-auto bg-cover bg-slate-100 bg-center">
                  <img
                    className="block w-32 h-32 mx-auto "
                    src={job.companyLogo}
                  />
                  <div className="text-slate-800 rounded-md my-5 flex justify-evenly items-center space-y-3">
                    <div>
                      <h2>{job?.jobTitle}</h2>
                      <h4 className="flex items-center py-2">
                        <FaRegMoneyBillAlt className="text-green-500 mr-2" />{" "}
                        <strong>{job?.salary}</strong>
                      </h4>
                      <h4 className="flex items-center ">
                        <GoLocation className="text-green-500 mr-2" />{" "}
                        <small>{job?.location}</small>
                      </h4>
                    </div>
                    <div className="flex flex-col space-y-3">
                      <button
                        className="bg-[#42C2FF] px-3 rounded-md"
                        onClick={() => router.push(`jobs/${job._id}`)}
                      >
                        APPLY
                      </button>
                      <button
                        className="bg-[#2a4a57] text-gray-50 font-medium px-3 rounded-md"
                        onClick={() => router.push("/jobs")}
                      >
                        See All
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Features;
