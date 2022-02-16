import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import {
  MdOutlineLogout,
  MdOutlineChevronLeft,
  MdOutlineMenu,
  MdAssignment,
  MdAssignmentTurnedIn,
  MdOutlineAdminPanelSettings,
  MdTravelExplore,
  MdRateReview,
  MdOutlineSearch,
} from "react-icons/md";
import img from "../../../public/favicon.ico";
import Jobs from "../../Admin/Jobs";
import AddAdmin from "../../Admin/AddAdmin";
import Candidate from "../../Admin/Candidate";
import company from "../../../pages/company";
import Company from "../../Admin/Company";



const Dashboard = () => {
  const [trigger, setTrigger] = useState(false);
  const user = "Joynool Abedin Mithoon";
  const router = useRouter();
  const { params = [] } = router.query;

  return (
    <>
      <div className="antialiased min-h-screen relative lg:flex">
        <nav
          className={`absolute lg:relative z-10 w-72 lg:transform-none lg:opacity-100 bg-gray-600 text-white h-screen ${!trigger
            ? "inset-0 opacity-0 transform duration-200 -translate-x-full ease-out"
            : "inset-0 opacity-100 transform duration-200 translate-x-0 ease-in"
            }`}
        >
          <div className="flex justify-between m-5">
            <div className="flex flex-col items-center mx-auto">
              <Image src={img} alt="user image" width={80} height={80} />
              <h2 className="font-light text-xl mx-auto p-2">{user}</h2>
              <small className="text-gray-400">
                sk.joynul.abedin@gmail.com
              </small>
            </div>
            <MdOutlineChevronLeft
              onClick={() => setTrigger(false)}
              className="h-10 w-10 hover:bg-gray-500 rounded-md cursor-pointer lg:hidden"
            />
          </div>
          <ul className="m-2 py-5 border-y border-dotted">
            {(
              <li className="divide-y divide-solid">
                <span></span>


                {params[0] === "admin" && (
                  <>
                    <Link href={`/dashboard/admin`}>
                    <a
                  onClick={() => setTrigger(false)}
                  className="px-4 py-2 text-xl font-extralight text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer rounded-md flex items-center mx-5 mb-5"
                >
                  <MdAssignmentTurnedIn className="w-7 h-7" />
                  &nbsp;&nbsp;&nbsp;Dashboard
                </a>
                    </Link>
                    <Link href={`/dashboard/admin/jobs`}>
                    <a
                  onClick={() => setTrigger(false)}
                  className="px-4 py-2 text-xl font-extralight text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer rounded-md flex items-center mx-5 mb-5"
                >
                  <MdAssignmentTurnedIn className="w-7 h-7" />
                  &nbsp;&nbsp;&nbsp;Jobs
                </a>
                    </Link>
                    <Link href={`/dashboard/admin/addadmin`}>
                    <a
                  onClick={() => setTrigger(false)}
                  className="px-4 py-2 text-xl font-extralight text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer rounded-md flex items-center mx-5 mb-5"
                >
                  <MdAssignmentTurnedIn className="w-7 h-7" />
                  &nbsp;&nbsp;&nbsp;Add Admin
                </a>
                    </Link>
                    <Link href={`/dashboard/admin/candidate`}>
                    <a
                  onClick={() => setTrigger(false)}
                  className="px-4 py-2 text-xl font-extralight text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer rounded-md flex items-center mx-5 mb-5"
                >
                  <MdAssignmentTurnedIn className="w-7 h-7" />
                  &nbsp;&nbsp;&nbsp;Candidate
                </a>
                    </Link>
                    <Link href={`/dashboard/admin/company`}>
                    <a
                  onClick={() => setTrigger(false)}
                  className="px-4 py-2 text-xl font-extralight text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer rounded-md flex items-center mx-5 mb-5"
                >
                  <MdAssignmentTurnedIn className="w-7 h-7" />
                  &nbsp;&nbsp;&nbsp;Company
                </a>
                    </Link>
                    
                  </>
                )}





                <a
                  onClick={() => setTrigger(false)}
                  className="px-4 py-2 text-xl font-extralight text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer rounded-md flex items-center mx-5 mb-5"
                >
                  <MdAssignmentTurnedIn className="w-7 h-7" />
                  &nbsp;&nbsp;&nbsp;CorporateZone 2
                </a>
                <a
                  onClick={() => setTrigger(false)}
                  className="px-4 py-2 text-xl font-extralight text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer rounded-md flex items-center mx-5 mb-5"
                >
                  <MdOutlineAdminPanelSettings className="w-7 h-7" />
                  &nbsp;&nbsp;&nbsp;CorporateZone 3
                </a>
              </li>
            )}
            <li className="divide-y divide-solid">
              <span></span>
              <a
                onClick={() => setTrigger(false)}
                className="px-4 py-2 text-xl font-extralight text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer rounded-md flex items-center mx-5 mb-5"
              >
                <MdTravelExplore className="w-7 h-7" />
                &nbsp;&nbsp;&nbsp;CorporateZone 4
              </a>
              <a
                onClick={() => setTrigger(false)}
                className="px-4 py-2 text-xl font-extralight text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer rounded-md flex items-center mx-5 mb-5"
              >
                <MdRateReview className="w-7 h-7" />
                &nbsp;&nbsp;&nbsp;CorporateZone 5
              </a>
            </li>
          </ul>
          <Link href="/">
            <a className="p-2 text-md w-1/2 mx-auto hover:bg-gray-700 border-2 rounded-md flex justify-center items-center mt-10">
              <MdOutlineLogout className="w-7 h-7" />
              &nbsp;&nbsp;LogOut
            </a>
          </Link>
        </nav>
        <div className="relative z-0 lg:flex-grow">
          <header className="flex items-center bg-gray-700 text-white">
            <MdOutlineMenu
              onClick={() => setTrigger(true)}
              className="h-12 w-12 p-2 ml-2 hover:bg-gray-600 rounded-md cursor-pointer"
            />
            <form className="flex justify-center items-center ml-auto">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search for dashboard content"
                className="shadow appearance-none border rounded lg:w-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              <MdOutlineSearch
                type="submit"
                className="w-10 h-10 px-2 my-2 mx-3 lg:mr-10 bg-gray-600 hover:bg-white hover:text-black rounded-md cursor-pointer"
              />
            </form>
          </header>
          <section className="m-5">

          {params?.length === 1 ? <div><h1>Welcome to the dashboard</h1></div> : null }
        {params[1] === "jobs" && (
          <div>
            <Jobs></Jobs>
          </div>
        )}
        {params[1] === "addadmin" && (
          <div>
            <AddAdmin></AddAdmin>
          </div>
        )}
        {params[1] === "candidate" && (
          <div>
            <Candidate></Candidate>
          </div>
        )}
        {params[1] === "company" && (
          <div>
              <Company></Company>
          </div>
        )}
        
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
