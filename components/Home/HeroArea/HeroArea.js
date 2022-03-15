import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import cover from '../../../styles/Home.module.css'
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { BiRightArrowAlt } from "react-icons/bi";

const HeroArea = () => {
  const data = [
    {
      id: "34lkdasfj",
      title: "Find Jobs & Career Opportunities",
      description:
        "Corporate zone is one of newest and fastest growing job portal where you can advertise jobs and search for resumes. They are an integral part of almost every hiring process and using them effectively will translate into qualified candidates for relatively low costs.",
      image:
        "https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg?w=1480",
    },

    {
      id: "34lkdadsfasfj",
      title: "Build Your Resume",
      description:
        "We provide you a custom resume builder from where you can build your own resume without have any trouble of the format. We provide you one of the world-class resume format which will help help you to land your dream job. ",
      image:
        "https://img.freepik.com/free-vector/pensive-businessman-making-decision_74855-5283.jpg?w=1380",
    },
    {
      id: "34lk34sfasfj",
      title: "Live Chat",
      description:
        "As a job portal, we provide a live chat functionality. It can be used for recruitment process or to hang out wiht others. You can easily build your connection bigger to make a chat with them or just can make a chat with company HR.",
      image:
        "https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899140.jpg?w=1380",
    },
    {
      id: "34lkdad67fasfj",
      title: "Skill Assesment",
      description:
        "As a candidate, you always have to prove yourself that you are the best. To make attention to the company, you can take a skill assesment,if you pass that will show in your profile that will help you to land your job.",
      image:
        "https://img.freepik.com/free-vector/online-exam-checklist-pencil-choosing-answer-questionnaire-form-taking-test-illustration_100456-1724.jpg?w=826",
    },
  ];
  return (
    <div
      // className={cover.hero_cover}
      // style={{ width: "100%", height: "600px" }}
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper lg:w-9/12 w-11/12 mx-auto h-full"
      >
        {data.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className="sm:flex justify-between items-center py-5 space-y-3"
            >
              <div className="space-y-5">
                <h1 className="xl:text-6xl lg:text-5xl py-8 text-5xl font-bold tracking-wider">
                  {item.title}
                </h1>
                <h6 className="py-3 text-2xl font-bold">
                  <span className="text-pink-500">3,000 +</span> Browse Jobs
                </h6>
                <p className="text-gray-500 leading-7 w-7/12">{item.description}</p>
                <button className="pl-4 font-bold uppercase flex items-center space-x-3 pr-3 py-3  hover:text-[#42C2FF] text-white hover:transform duration-500 hover:scale-105 border-2 border-[#42C2FF] rounded-lg bg-[#42C2FF] hover:bg-white ml-5">
                  Join US <BiRightArrowAlt className="font-medium text-2xl" />
                </button>
              </div>
              <div className="flex items-center justify-end w-full">
                <img src={item.image} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeroArea;
