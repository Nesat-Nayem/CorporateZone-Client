import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import {
  MdOutlineLogout,
  MdOutlineChevronLeft,
  MdOutlineMenu,
} from "react-icons/md";
import Jobs from "../Admin/Jobs";
import AddAdmin from "../Admin/AddAdmin";
import Candidate from "../Admin/Candidate";
import Company from "../Admin/Company";
import useFirebase from "../../../redux/slices/user/useFirebase";
import AdminRoutes from "./AdminRoutes";
import CandidateRoutes from "./CandidateRoutes";
import RecruiterRoutes from "./RecruiterRoutes";
import RecruiterProfile from "../Recruiter/RecruiterProfile";

const DashboardRoutes = () => {
  const [trigger, setTrigger] = useState(false);
  const router = useRouter();
  const { params = [] } = router.query;
  const dispatch = useDispatch();

  const { logOut } = useFirebase();

  const currentUser = useSelector((state) => state.user.currentUser);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  // log out handler
  const logOutHandler = () => {
    router.push("/");
    dispatch(logOut);
  };

  return (
    <>
      <div className="antialiased min-h-screen relative lg:flex">
        <nav
          className={`absolute lg:relative z-10 w-72 lg:transform-none lg:opacity-100 bg-indigo-500/100 text-white h-screen ${
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
              <small className="text-gray-100">{currentUser?.email}</small>
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
          <header className="flex items-center bg-indigo-500/100 text-white">
            <MdOutlineMenu
              onClick={() => setTrigger(true)}
              className="h-12 w-12 p-2 ml-2 hover:bg-pink-600 rounded-md cursor-pointer"
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
          <section className="p-5 bg-gray-100">
            {!params?.length ? (
              <div>
                <h1>Welcome to the dashboard</h1>
              </div>
            ) : null}

            {/* // admin route components */}

            {params[0] === "profile" && loggedInUser?.role === "admin" && (
              <div>
                <h1>Recruiter profile</h1>
              </div>
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

            {/* candidate route components */}
            {params[0] === "profile" && loggedInUser?.role === "candidate" && (
              <div>
                <h1>Candidate profile</h1>
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default DashboardRoutes;
