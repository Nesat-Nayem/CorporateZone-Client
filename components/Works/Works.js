import Image from "next/image";
import { FcOk } from "react-icons/fc";
// import recruiter from "../../../images/recruiter.png";
// import seeking from "../../../images/seeking.png";
import bgParallax from "../About/About.module.css";

const Works = () => {
  return (
    <div className="my-9">
      {/* Company */}
      <div className="md:flex md:justify-evenly md:items-center my-20 md:mx-24  mx-2">
        <div className="img mx-auto my-5">
          <img
            className="w-full"
            src="https://i.ibb.co/PCRzHH5/recruiter.png"
          />
        </div>
        <div className=" md:w-5/12 mx-auto process_con">
          <article className="space-y-5">
            <h3 className="text-3xl">Recruiter Requirement</h3>
            <p className="text-slate-600">
              We've Verified Company for jobs posting in different era with
              secure communication. so many company believe us for that
              techniques and we're growing fast. See more policy about
              recruiters in privacy & policy. Here are some conditions for any
              company.
            </p>
            <ul className="text-slate-800 mx-3 space-y-3">
              <li className="flex">
                <FcOk className="mx-3" />
                Company History
              </li>
              <li className="flex">
                <FcOk className="mx-3" />
                Business Type
              </li>
              <li className="flex">
                <FcOk className="mx-3" />
                Must've Website
              </li>
              <li className="flex">
                <FcOk className="mx-3" />
                Verified Profile
              </li>
              <li className="flex">
                <FcOk className="mx-3" />
                Should have Valid Info
              </li>
            </ul>
          </article>
        </div>
      </div>

      {/* HighLight with parallax --- why corporate zone*/}
      <div className={bgParallax.zones_bg}>
        <div className="benefit md:w-5/12 md:after:border-r-2 md:after:border-cyan-600 space-y-5 mx-auto py-3 text-right md:after:content-[''] md:after:text-red-500 md:after:h-80 md:after:absolute md:after:ml-20 md:after:top-28">
          <h3 className="text-3xl">How Benefits From Corporate Zone</h3>
          <p className=" text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            veritatis ut odio repudiandae nesciunt voluptate tenetur et facilis,
            tempore repellendus vel expedita? Expedita, nobis! Quo vitae
            praesentium distinctio possimus error?
          </p>

          <ul className="text-slate-800 mx-3 space-y-3">
            <li className="flex justify-end items-center">
              Filtered Jobs
              <FcOk className="mx-3" />
            </li>
            <li className="flex justify-end items-center">
              Profile 100% Setup
              <FcOk className="mx-3" />
            </li>
            <li className="flex justify-end items-center">
              Choose Right Jobs
              <FcOk className="mx-3" />
            </li>
            <li className="flex justify-end items-center">
              Choose Right Candidate
              <FcOk className="mx-3" />
            </li>
            <li className="flex justify-end items-center">
              Connect with selected Candidate
              <FcOk className="mx-3" />
            </li>
          </ul>
        </div>

        <div className="benefit md:w-5/12 space-y-5 mx-auto py-3">
          <h3 className="text-3xl">Why Choose Corporate Zone</h3>
          <p className=" text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            veritatis ut odio repudiandae nesciunt voluptate tenetur et facilis,
            tempore repellendus vel expedita? Expedita, nobis! Quo vitae
            praesentium distinctio possimus error?
          </p>

          <ul className="text-slate-800 mx-3 space-y-3">
            <li className="flex items-center">
              <FcOk className="mx-3" /> Valid opportunities
            </li>
            <li className="flex  items-center">
              <FcOk className="mx-3" /> Skills Required Jobs
            </li>
            <li className="flex  items-center">
              <FcOk className="mx-3" /> Choose Right Candidate
            </li>
            <li className="flex  items-center">
              <FcOk className="mx-3" />
              Easy Communication
            </li>
            <li className="flex  items-center">
              <FcOk className="mx-3" /> Find Each Other
            </li>
          </ul>
        </div>
      </div>

      {/* Candidate*/}
      <div className="md:flex md:justify-evenly md:items-center my-20 md:mx-24 mx-2">
        <div className="md:w-5/12 mx-auto process_con">
          <article className="space-y-5">
            <h3 className="text-3xl">Candidate Requirement</h3>
            <p className="text-slate-600">
              We've Verified Company for jobs posting in different era with
              secure communication. so many company believe us for that
              techniques and we're growing fast. See more policy about
              recruiters in privacy & policy. Here are some conditions for any
              company.
            </p>
            <ul className="text-slate-800 mx-3 space-y-3">
              <li className="flex">
                <FcOk className="mx-3" />
                Solid Skills
              </li>
              <li className="flex">
                <FcOk className="mx-3" />
                Experience
              </li>
              <li className="flex">
                <FcOk className="mx-3" />
                Portfolio
              </li>
              <li className="flex">
                <FcOk className="mx-3" />
                Verified Profile
              </li>
              <li className="flex">
                <FcOk className="mx-3" />
                Should have Valid Info
              </li>
            </ul>
          </article>
        </div>

        <div className="img mx-auto my-7">
          <img className="w-full " src="https://i.ibb.co/6yywTLQ/seeking.png" />
        </div>
      </div>
    </div>
  );
};

export default Works;
