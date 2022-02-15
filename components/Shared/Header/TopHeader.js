import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import useFirebase from "../../../redux/slices/user/useFirebase";

const TopHeader = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const { logOut } = useFirebase();

  return (
    <div className="bg-cyan-500 text-white px-10 md:flex hidden justify-between py-3 items-center">
      <div className=" lg:flex hidden">
        <p className="flex space-x-2 border-r pr-5 items-center">
          <BsTelephoneFill className="" /> <span>Phone: </span>+12 3456 7890{" "}
        </p>
        <p className="flex space-x-2 pl-5 items-center">
          <HiOutlineMail className=" text-xl" /> <span>Email: </span>
          corporate.zone@gmail.com{" "}
        </p>
      </div>

      <div className="flex justify-between items-center">
        {/* social icons */}
        <div className="flex space-x-4 text-gray-200 border-r pr-4">
          <FaFacebookF className="text-lg cursor-pointer hover:text-white" />
          <BsTwitter className="text-lg cursor-pointer hover:text-white" />
          <FaLinkedinIn className="text-xl cursor-pointer hover:text-white" />
          <AiOutlineInstagram className="text-xl cursor-pointer hover:text-white" />
        </div>

        {/* signup and login */}
        <div className="flex ">
          {currentUser ? (
            <>
              <button
                onClick={() => dispatch(logOut)}
                className=" font-bold bg-white text-cyan-600 hover:text-cyan-800 uppercase flex items-center px-2 py-1 rounded justify-center font-serif"
              >
                <MdLogin className="mr-2" /> Log Out
              </button>
            </>
          ) : (
            <>
              <Link href="/signup">
                <a className="pl-4 font-bold uppercase flex items-center space-x-3 font-serif border-r pr-3">
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
