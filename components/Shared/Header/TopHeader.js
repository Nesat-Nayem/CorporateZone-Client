import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import Link from "next/link";
import { useSelector } from "react-redux";
import Toggle from "./toggle";

const TopHeader = () =>
{
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <div className="bg-[#42C2FF] text-white dark:text-slate-800 px-10 md:flex hidden justify-between py-3 items-center">
      <div className=" lg:flex hidden">
        <p className="flex space-x-2 border-r dark:border-black pr-5 items-center">
          <BsTelephoneFill className="" /> <span>Phone: </span>+12 3456 7890{" "}
        </p>
        <p className="flex space-x-2 pl-5 items-center">
          <HiOutlineMail className=" text-xl" /> <span>Email: </span>
          corporate.zone@gmail.com{" "}
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Toggle />
      </div>
      <div className="flex justify-between items-center">



        {/* social icons */}
        <div className="flex space-x-4 text-gray-200 dark:text-slate-800 border-r dark:border-black pr-4">
          <FaFacebookF className="text-lg cursor-pointer hover:text-white" />
          <BsTwitter className="text-lg cursor-pointer hover:text-white" />
          <FaLinkedinIn className="text-xl cursor-pointer hover:text-white" />
          <AiOutlineInstagram className="text-xl cursor-pointer hover:text-white" />
        </div>

        {/* signup and login */}
        <div className="flex dark:text-slate-800">
          {currentUser ? (
            <></>
          ) : (
            <>
              <Link href="/signup">
                <a className="pl-4 font-bold uppercase flex items-center space-x-3 font-serif border-r dark:border-black pr-3">
                  <FaUserAlt className="mr-2" /> Sign up
                </a>
              </Link>
              <Link href="/signin">
                <a className="pl-4 font-bold uppercase flex items-center space-x-3 font-serif">
                  <MdLogin className="mr-2" /> Sign In
                </a>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
