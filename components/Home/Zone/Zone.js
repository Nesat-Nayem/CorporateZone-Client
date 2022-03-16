import { BiRightArrowAlt } from "react-icons/bi";
import { BsFillPieChartFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import card from '../../../styles/Home.module.css'

const Zone = () => {
    return (
      <div className="mx-10 md:mx-20 md:my-40">
        <div className="md:grid md:grid-cols-2 lg:w-10/12 mx-auto space-y-20">
          <div className="md:grid md:grid-cols-3 gap-5 space-y-10">
            <div className={card.zone_card}>
              <h4 className="text-xl text-center font-medium text-slate-800">
                Attract & Manage The Right Talent
              </h4>
            </div>
            <div className="flex items-center justify-center text-[#42C2FF]">
              <MdMarkEmailRead className="text-7xl ring-2 rounded-full ring-[#42c3ffe5]" />
            </div>
            <div className={card.zone_card}>
              <h4 className="text-xl text-center font-medium text-slate-800">
                Highly Structured Candidate Pipeline
              </h4>
            </div>
            <div className="flex items-center justify-center text-[#42C2FF]">
              <FaLaptopCode className="text-7xl ring-2 rounded-full ring-[#42c3ffe5]" />
            </div>
            <div className={card.zone_card}>
              <h4 className="text-xl text-center font-medium text-slate-800">
                Faster & Better Hiring Process
              </h4>
            </div>
            <div className="flex items-center justify-center text-[#42C2FF]">
              <BsFillPieChartFill className="text-7xl ring-2 rounded-full ring-[#42c3ffe5]" />
            </div>
          </div>
          <div className="ml-16 text-justify ">
            <div className="">
              <h3 className=" text-5xl font-bold">
                Why Does Your Company Need CorporateZone?
              </h3>
              <p className="text-gray-500 leading-7 my-10">
                Advanced Recruiting Solution With Everything You Need To
                Accelerate The Hiring Process. Remote Hiring or Local -
                CorporateZone Streamline The Whole Recruitment Process & Make It
                Easier Than Ever Before
              </p>
              <button className="pl-4 font-bold uppercase flex items-center space-x-3 pr-3 py-3  hover:text-[#42C2FF] text-white hover:transform duration-500 hover:scale-105 border-2 border-[#42C2FF] rounded-lg bg-[#42C2FF] hover:bg-white ml-5">
                Join US <BiRightArrowAlt className="font-medium text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Zone;