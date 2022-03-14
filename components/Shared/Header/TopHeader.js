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

const TopHeader = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <div className="">
      <div className="text-white ml-auto pl-10 md:w-40 relative md:flex hidden justify-between items-center">
        {/* signup and login */}
        <div className="flex flex-col rounded-bl-lg rounded-tl-lg absolute top-0 bg-[#42C2FF]">
          {currentUser ? (
            <></>
          ) : (
            <>
              <Link href="/signup">
                <a className="pl-4 font-bold uppercase flex items-center space-x-3 font-serif pr-3 py-3  hover:text-white hover:transform duration-500 hover:scale-50">
                  <FaUserAlt className="mr-2" /> Sign up
                </a>
              </Link>{" "}
              <hr />
              <Link href="/signin">
                <a className="pl-4 font-bold uppercase flex items-center space-x-3 font-serif py-3 hover:bg-[#ffffff] hover:text-[#42C2FF] duration-500">
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
