import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import
{
  MdOutlineLogout,
  MdOutlineChevronLeft,
  MdOutlineMenu,
  MdDashboard,
} from "react-icons/md";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import Jobs from "../Admin/Jobs";
import AddAdmin from "../Admin/AddAdmin";
import Candidate from "../Admin/Candidate";
import Company from "../Admin/Company";
import useFirebase from "../../../redux/slices/user/useFirebase";
import AdminRoutes from "./AdminRoutes";
import CandidateRoutes from "./CandidateRoutes";
import RecruiterRoutes from "./RecruiterRoutes";
import UpdateProfile from "../Recruiter/RecruiterProfileUpdate";
import RecruiteProfileUpdate from "../Recruiter/RecruiterProfileUpdate";
import CandidateProfileUpdate from "../Candidate/profileUpdate/CandidateProfileUpdate";
import CandidateProfile from "../Candidate/profileView/CandidateProfile";
import RecruiterProfile from "../Recruiter/profileView/RecruiterProfile";
import AdminProfile from "../Admin/AdminProfile";
import SkillTest from "../Candidate/skillTest/SkillTest";
import AppliedJobs from "../Candidate/AppliedJobs/AppliedJobs";
import ChatLayout from "../Messages/ChatLayout";
import BuildResume from "../Candidate/BuildResume/BuildResume";
import { FcVideoCall } from "react-icons/fc";
import Applicant from "../../Applicant/Applicant";

const DashboardRoutes = ({ jobs }) =>
{
  const [trigger, setTrigger] = useState(false);
  const router = useRouter();
  const { params = [] } = router.query;
  const dispatch = useDispatch();

  const { logOut } = useFirebase();

  const currentUser = useSelector((state) => state.user.currentUser);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  // log out handler
  const logOutHandler = () =>
  {
    router.push("/");
    dispatch(logOut);
  };

  return (
    <>
      <div className="antialiased h-screen relative overflow-y-scroll chats lg:flex">
        <nav
          className={`absolute lg:relative z-10 w-72 lg:transform-none lg:opacity-100 bg-slate-800/100 text-white h-screen overflow-y-scroll py-3 chats ${
            !trigger
              ? "inset-0 opacity-0 transform duration-200 -translate-x-full ease-out"
              : "inset-0 opacity-100 transform duration-200 translate-x-0 ease-in"
          }`}
        >
          <div className="flex justify-between m-5">
            <div className="flex flex-col items-center mx-auto">
              {currentUser && (
                <img
                  src={currentUser?.photoURL}
                  className="h-20 w-20 "
                  style={{ borderRadius: "50%" }}
                  alt="user image"
                />
              )}
              <h2 className="font-extrabold  text-xl mx-auto p-2">
                {currentUser?.displayName}
              </h2>
              <h2 className="font-semibold text-green-600  capitalize text-md mx-auto pb-2 ">
                {loggedInUser?.role}
              </h2>
              <small className="text-gray-100 text-center">
                {currentUser?.email}
              </small>
              <h2 className="font-semibold pt-3 text-green-600  capitalize text-md mx-auto pb-2  ">
                <a
                  href={`https://meet.jit.si/${loggedInUser?.username}`}
                  rel="noreferrer"
                  target="_blank"
                  className="flex bg-white py-2 px-2 rounded"
                >
                  <FcVideoCall className="text-2xl cursor-pointer mr-1" />{" "}
                  Launch Video Chat
                </a>
              </h2>
            </div>
            <MdOutlineChevronLeft
              onClick={() => setTrigger(false)}
              className="h-10 w-10  bg-pink-500 rounded-md cursor-pointer lg:hidden"
            />
          </div>
          {/* routes */}
          <div className="w-full">
            <ul className="m-2 py-5 border-y border-dotted">
              {
                <li className="divide-y divide-solid">
                  {/* candidate dashboard */}
                  {loggedInUser?.role === "candidate" && (
                    <CandidateRoutes setTrigger={setTrigger} />
                  )}
                  {/* recruiter dashboard */}
                  {loggedInUser?.role === "recruiter" && (
                    <RecruiterRoutes setTrigger={setTrigger} />
                  )}
                  {loggedInUser?.role === "admin" && (
                    <AdminRoutes setTrigger={setTrigger} />
                  )}

                  {/* shared for candidate and recruiter */}
                  {loggedInUser && loggedInUser?.role !== "admin" && (
                    <Link href={`/dashboard/chats`}>
                      <a
                        onClick={() => setTrigger(false)}
                        className="px-4 py-2 text-lg font-extralight text-gray-50 hover:bg-white  hover:text-black cursor-pointer rounded-md flex items-center mx-5 mb-5"
                      >
                        <BsFillChatSquareDotsFill className="text-xl" />
                        &nbsp;&nbsp;&nbsp;Messages
                      </a>
                    </Link>
                  )}
                </li>
              }
            </ul>
            {/* // log out button */}
            <div className="text-center">
              <button onClick={logOutHandler}>
                <a className=" w-full p-2 text-md  mx-auto hover:bg-white  hover:text-black border-2 rounded-md flex justify-center items-center mt-10">
                  <MdOutlineLogout className="text-2xl" />
                  &nbsp;&nbsp;LogOut
                </a>
              </button>
            </div>
          </div>
        </nav>
        <div className="relative z-0 lg:flex-grow">
          <header className="flex items-center bg-gray-800/100 text-white py-2">
            <MdOutlineMenu
              onClick={() => setTrigger(true)}
              className="h-12 xl:hidden w-12 p-2 ml-2 hover:bg-pink-600 rounded-md cursor-pointer"
            />
            <div className="flex justify-center items-center ml-auto">
              <Link href="/">
                <a className="flex items-center px-3">
                  <span className=" text-xl font-extrabold  pl-3">
                    <span className="text-pink-500">C</span>orporate Zone
                  </span>
                </a>
              </Link>
            </div>
          </header>

          {/* route components */}
          <section className="p-5 h-full overflow-scroll bg-gray-100 ">
            {!params?.length ? (
              <div>
                <h1>Welcome to the dashboard</h1>
              </div>
            ) : null}

            {/* // admin route components */}

            {params[0] === "profile" && loggedInUser?.role === "admin" && (
              <AdminProfile />
            )}
            {params[0] === "jobs" && loggedInUser?.role === "admin" && (
              <div>
                <Jobs></Jobs>
              </div>
            )}
            {params[0] === "addadmin" && loggedInUser?.role === "admin" && (
              <div>
                <AddAdmin></AddAdmin>
              </div>
            )}
            {params[0] === "candidate" && loggedInUser?.role === "admin" && (
              <div>
                <Candidate></Candidate>
              </div>
            )}
            {params[0] === "company" && loggedInUser?.role === "admin" && (
              <div>
                <Company></Company>
              </div>
            )}

            {/* // recruiter route components */}

            {/* recruiter profile */}
            {params[0] === "profile" && loggedInUser?.role === "recruiter" && (
              <RecruiterProfile />
            )}
            {params[0] === "applicant" && loggedInUser?.role === "recruiter" && (
              <Applicant />
            )}
            {/* update recruiter profile  */}
            {params[0] === "updateProfile" &&
              loggedInUser?.role === "recruiter" && <RecruiteProfileUpdate />}

            {/* candidate route components */}
            {params[0] === "profile" && loggedInUser?.role === "candidate" && (
              <CandidateProfile />
            )}

            {/* candidate applied jobs*/}
            {params[0] === "appliedJobs" &&
              loggedInUser?.role === "candidate" && <AppliedJobs jobs={jobs} />}

            {/* candidate profile update */}
            {params[0] === "updateProfile" &&
              loggedInUser?.role === "candidate" && <CandidateProfileUpdate />}

            {/* candidate profile update */}
            {params[0] === "skillTest" &&
              loggedInUser?.role === "candidate" && <SkillTest />}

            {/* candidate profile update */}
            {params[0] === "BuildResume" &&
              loggedInUser?.role === "candidate" && <BuildResume />}

            {/* candidate profile update */}
            {params[0] === "chats" &&
              (loggedInUser?.role === "candidate" ||
                loggedInUser?.role === "recruiter") && <ChatLayout />}
          </section>
        </div>
      </div>
    </>
  );
};

export default DashboardRoutes;
