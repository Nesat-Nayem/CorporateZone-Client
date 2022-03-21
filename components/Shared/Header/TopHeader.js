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

const TopHeader = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <div className="fixed top-0 right-0">
      <div className="text-white ml-auto pl-10 md:w-40 relative md:flex hidden justify-between items-center">
        {/* signup and login */}
        <div className="flex flex-col rounded-bl-lg rounded-tl-lg absolute top-16 ">
          {currentUser ? (
            <>
              <button>
                <a className="pl-4 font-bold uppercase flex items-center space-x-3 font-serif py-3 hover:bg-[#42C2FF] hover:text-white duration-500 border-2 border-[#42C2FF] text-[#42C2FF] rounded-bl-lg rounded-tl-lg w-28 ml-2">
                  <MdLogin className="mr-2" /> Mode <Toggle />
                </a>
              </button>
              <div className="flex justify-center items-center bg-red-700 text-yellow-400">
                <Toggle className="" />
              </div>
            </>
          ) : (
            <>
              <Link href="/signup">
                <a className="pl-4 font-bold uppercase flex items-center space-x-3 font-serif pr-3 py-3  hover:text-white hover:transform duration-500 hover:scale-95 border-2 border-[#42C2FF] text-[#42C2FF] rounded-bl-lg rounded-tl-lg hover:bg-[#42C2FF]">
                  <FaUserAlt className="mr-2" /> Sign up
                </a>
              </Link>{" "}
              <Link href="/signin">
                <a className="pl-4 font-bold uppercase flex items-center space-x-3 font-serif py-3 hover:bg-[#42C2FF] hover:text-white duration-500 border-2 border-[#42C2FF] text-[#42C2FF] rounded-bl-lg rounded-tl-lg">
                  <MdLogin className="mr-2" /> Sign In
                </a>
              </Link>
              <button>
                <a className="pl-4 font-bold uppercase flex items-center space-x-3 font-serif py-3 hover:bg-[#42C2FF] hover:text-white duration-500 border-2 border-[#42C2FF] text-[#42C2FF] rounded-bl-lg rounded-tl-lg ">
                  <MdLogin className="mr-2" /> Mode
                </a>
              </button>
            </>
          )}
          <div className="flex justify-center items-center bg-red-700 text-yellow-400">
            <Toggle className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
