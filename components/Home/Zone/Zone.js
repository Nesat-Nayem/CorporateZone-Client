import { BiRightArrowAlt } from "react-icons/bi";
import card from '../../../styles/Home.module.css'

const Zone = () => {
    return (
      <div className="mx-10 md:mx-20 md:my-40">
        <div className="md:grid md:grid-cols-2 lg:w-10/12 mx-auto">
          <div className="md:grid md:grid-cols-3 gap-5">
            <div className={card.zone_card}>
              <h4 className="text-xl font-medium">
                Attract & Manage The Right Talent
              </h4>
            </div>
            <div></div>
            <div className={card.zone_card}>
              <h4 className="text-xl font-medium">
                Highly Structured Candidate Pipeline
              </h4>
            </div>
            <div></div>
            <div className={card.zone_card}>
              <h4 className="text-xl font-medium">
                Faster & Better Hiring Process
              </h4>
            </div>
          </div>
          <div className=" md:mx-10 text-justify ">
            <div className="">
              <h3 className=" text-3xl font-bold">
                Why Does Your Company Need <br /> CorporateZone?
              </h3>
              <p className="text-gray-500 leading-7 my-10">
                Advanced Recruiting Solution With Everything You Need To
                Accelerate The Hiring Process. Remote Hiring or Local -
                Easy.Jobs Streamline The Whole Recruitment Process & Make It
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