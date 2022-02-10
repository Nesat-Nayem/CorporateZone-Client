import Image from "next/image";
import { FcOpenedFolder } from "react-icons/fc";
import { BsPhone } from "react-icons/bs";

const PeopleResume = ({ data }) => {
  return (
    <div className="bg-white px-2 border-l-2  border-cyan-600 relative pb-3 hover:shadow-xl transition duration-300">
      <div className="flex relative">
        <div className="relative">
          <div className="relative bottom-3 ">
            <Image width={120} height={120} src={data?.image} alt="" />
          </div>
        </div>
        <div className="flex justify-between w-full px-2 items-center">
          <div className="px-2 ">
            <h1 className="text-2xl ">{data.name}</h1>
            <p className="flex text-gray-500 pt-1">
              <FcOpenedFolder className="text-xl mr-2 " /> {data.role}
            </p>
          </div>
          <div className="animate-pulse flex hover:text-cyan-600 cursor-pointer hover:animate-none">
            {" "}
            <BsPhone className="text-xl text-cyan-600 mr-1" /> {data.worker}
          </div>
        </div>
      </div>
      <p className="px-2 pb-2 text-gray-400">{data.details}</p>
      <button className="bg-cyan-500  text-white px-3 py-1 rounded hover:bg-cyan-600 transition duration-300 animate-pulse hover:animate-none">
        view profile
      </button>
    </div>
  );
};

export default PeopleResume;
