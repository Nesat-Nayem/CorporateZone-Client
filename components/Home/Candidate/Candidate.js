import { ImUserCheck, ImUserTie } from "react-icons/im";
import { RiUserSearchFill, RiWechatFill } from "react-icons/ri";
import style from './Candidate.module.css'


const Candidate = () => {
    return (
      <div>
        <div className="space-y-7 mx-auto md:w-3/4 relative my-6 recent_header">
          <div className="md:flex md:justify-around lg:flex lg:justify-evenly order-2 mx-3">
            <div className="space-y-5 md:w-2/4 lg:w-2/4 text-slate-700 ">
              <h3 id={style.find}>
                Find The Right Candidate Faster
              </h3>

              <div className="flex items-center justify-between max-w-[500px] space-y-7 ml-5">
                <div>
                  <ImUserCheck className="text-7xl mr-3 text-[#42C2FF]" />
                </div>
                <div className="space-y-3">
                  <h4 className="md:text-xl lg:text-xl text-md font-semibold">
                    Smart Candidate Selection
                  </h4>
                  <p>
                    Analyze and filter your desired applicants to get the right
                    one & make the recruitment process faster than ever before
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between max-w-[500px] space-y-7 ml-5">
                <div>
                  <ImUserTie className="text-7xl mr-3 text-[#42C2FF]" />
                </div>
                <div className="space-y-3">
                  <h4 className="md:text-xl lg:text-xl text-md font-semibold">
                    Interactive Interview Process
                  </h4>
                  <p>
                    Quiz, Personality Test & more to make the interview engaging
                    for both and full freedom of remote hiring!
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between max-w-[500px] space-y-7 ml-5">
                <div>
                  <RiWechatFill className="text-7xl mr-3 text-[#42C2FF]" />
                </div>
                <div className="space-y-3">
                  <h4 className="md:text-xl lg:text-xl text-md font-semibold">
                    In-app Messaging With Candidates
                  </h4>
                  <p>
                    Choose, Track and instantly contact with the candidate via
                    messaging & make the hiring process smoother & effective
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-2/4 lg:w-2/4 lg:order-last md:order-last order-1">
              <img
                className="mt-3 transform hover:scale-105 duration-500"
                src="https://i.ibb.co/b6qqX0x/easyjobs-hiring-image-2-png.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Candidate;