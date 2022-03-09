import Image from "next/image";
import company from "../../../images/first_company.jpg";
import company_second from "../../../images/second_company.jpg";
import company_third from "../../../images/third_company.jpg";
import { FcNext, FcPrevious } from "react-icons/fc";

const CompanyJobs = () =>
{
  return (
    <div className="my-5">
      <div className="flex flex-wrap justify-center md:justify-between items-center md:w-8/12 mx-auto company_heading relative my-20 px-3">
        <h3 className="text-3xl after:content-[''] after:ml-0.5 after:text-red-500 after:absolute after:border-t-2 after:w-20 after: after:border-cyan-500 after:top-11 after:left-4 after:bottom-0 after:right-0 font-medium text-slate-700">
          Top Hiring Companies
        </h3>
        <ul className="flex md:float-right items-center mt-6 md:ml-0 md:mt-0 ">
          <li className="mx-3 text-xl font-bold cursor-pointer">
            <FcPrevious />
          </li>
          <li className="mx-3 text-xl font-bold cursor-pointer">
            <FcNext />
          </li>
        </ul>
      </div>

      <div className="md:flex justify-center items-center my-20 company_card w-9/12 mx-auto">
        <div className="bg-white dark:bg-slate-900 mb-3 rounded-lg px-6 py-8 ring-1 md:w-1/4 mx-2 ring-slate-900/5 text-center shadow-xl border-b-2 border-slate-800 hover:border-cyan-500 transform duration-500 hover:scale-95">
          <div>
            <Image
              className="rounded w-full 2xl:h-56 lg:h-44 md:h-48 h-56 transition duration-300 transform group-hover:scale-125 group-hover:animate-pulse"
              width="120"
              height="70"
              src={company_third}
              alt=""
            />
          </div>
          <h3 className="text-slate-900 dark:text-white mt-3 text-base font-medium tracking-tight">
            AmaZon
          </h3>
          <span className="text-slate-400 dark:text-white text-sm font-medium tracking-tight">
            (SouthAfrica)
          </span>{" "}
          <br />
          <a
            href="#"
            className="text-black block md:w-3/4 mx-auto mt-3 text-sm font-semibold bg-[#85F4FF] p-2 rounded-lg hover:bg-[#42C2FF] hover:text-white"
          >
            7 Openings
          </a>
        </div>

        <div className="bg-white dark:bg-slate-900 mb-3 rounded-lg px-6 py-8 ring-1 md:w-1/4 mx-2 ring-slate-900/5 text-center shadow-xl border-b-2 border-slate-800 hover:border-cyan-500 transform duration-500 hover:scale-95">
          <div>
            <Image
              className="rounded w-full 2xl:h-56 lg:h-44 md:h-48 h-56 transition duration-300 transform group-hover:scale-125 group-hover:animate-pulse"
              width="120"
              height="70"
              src={company_second}
              alt=""
            />
          </div>
          <h3 className="text-slate-900 dark:text-white mt-3 text-base font-medium tracking-tight">
            AmaZon
          </h3>
          <span className="text-slate-400 dark:text-white text-sm font-medium tracking-tight">
            (SouthAfrica)
          </span>{" "}
          <br />
          <a
            href="#"
            className="text-black block md:w-3/4 mx-auto mt-3 text-sm font-semibold bg-[#85F4FF] p-2 rounded-lg hover:bg-[#42C2FF] hover:text-white"
          >
            7 Openings
          </a>
        </div>

        <div className="bg-white dark:bg-slate-900 mb-3 rounded-lg px-6 py-8 ring-1 md:w-1/4 mx-2 ring-slate-900/5 text-center shadow-xl border-b-2 border-slate-800 hover:border-cyan-500 transform duration-500 hover:scale-95">
          <div>
            <Image
              className="rounded w-full 2xl:h-56 lg:h-44 md:h-48 h-56 transition duration-300 transform group-hover:scale-125 group-hover:animate-pulse"
              width="120"
              height="70"
              src={company}
              alt=""
            />
          </div>
          <h3 className="text-slate-900 dark:text-white mt-3 text-base font-medium tracking-tight">
            AmaZon
          </h3>
          <span className="text-slate-400 dark:text-white text-sm font-medium tracking-tight">
            (SouthAfrica)
          </span>{" "}
          <br />
          <a
            href="#"
            className="text-black block md:w-3/4 mx-auto mt-3 text-sm font-semibold bg-[#85F4FF] p-2 rounded-lg hover:bg-[#42C2FF] hover:text-white"
          >
            7 Openings
          </a>
        </div>

        <div className="bg-white dark:bg-slate-900 mb-3 rounded-lg px-6 py-8 ring-1 md:w-1/4 mx-2 ring-slate-900/5 text-center shadow-xl border-b-2 border-slate-800 hover:border-cyan-500 transform duration-500 hover:scale-95">
          <div>
            <Image
              className="rounded w-full 2xl:h-56 lg:h-44 md:h-48 h-56 transition duration-300 transform group-hover:scale-125 group-hover:animate-pulse"
              width="120"
              height="70"
              src={company_second}
              alt=""
            />
          </div>
          <h3 className="text-slate-900 dark:text-white mt-3 text-base font-medium tracking-tight">
            AmaZon
          </h3>
          <span className="text-slate-400 dark:text-white text-sm font-medium tracking-tight">
            (SouthAfrica)
          </span>{" "}
          <br />
          <a
            href="#"
            className="text-black block md:w-3/4 mx-auto mt-3 text-sm font-semibold bg-[#85F4FF] p-2 rounded-lg hover:bg-[#42C2FF] hover:text-white"
          >
            7 Openings
          </a>
        </div>

        <div className="bg-white dark:bg-slate-900 mb-3 rounded-lg px-6 py-8 ring-1 md:w-1/4 mx-2 ring-slate-900/5 text-center shadow-xl border-b-2 border-slate-800 hover:border-cyan-500 transform duration-500 hover:scale-95">
          <div>
            <Image
              className="rounded w-full 2xl:h-56 lg:h-44 md:h-48 h-56 transition duration-300 transform group-hover:scale-125 group-hover:animate-pulse"
              width="120"
              height="70"
              src={company_third}
              alt=""
            />
          </div>
          <h3 className="text-slate-900 dark:text-white mt-3 text-base font-medium tracking-tight">
            AmaZon
          </h3>
          <span className="text-slate-400 dark:text-white text-sm font-medium tracking-tight">
            (SouthAfrica)
          </span>{" "}
          <br />
          <a
            href="#"
            className="text-black block md:w-3/4 mx-auto mt-3 text-sm font-semibold bg-[#85F4FF] p-2 rounded-lg hover:bg-[#42C2FF] hover:text-white"
          >
            7 Openings
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyJobs;
