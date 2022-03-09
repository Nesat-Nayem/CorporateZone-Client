import { useRouter } from "next/router";
import { useState } from "react";
import { BsBellFill } from "react-icons/bs";

const Notification = ({ notifications }) => {
  const [trigger, setTrigger] = useState(false);
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => setTrigger(!trigger)}
        className="flex justify-center items-center hover:text-[#42C2FF]"
      >
        <BsBellFill className="w-7 h-7" />
        {notifications.length > 0 && (
          <span className="relative -top-2 right-3">
            <div className="inline-flex items-center px-1 py-0.25 border-2 border-white rounded-full text-xs font-semibold bg-red-500 text-white">
              {notifications.length}
            </div>
          </span>
        )}
      </button>
      <div
        className={
          trigger
            ? "bg-white md:block hidden shadow-md w-auto absolute z-10 rounded top-14"
            : "hidden"
        }
      >
        <div className="ml-4 mb-2">
          <h2 className="text-2xl font-semibold text-gray-700 tracking-wide mb-2">
            Notifications
          </h2>
          <button className="bg-[#42C2FF] text-white hover:bg-[#85F4FF] hover:text-black mx-1 px-2 py-1 rounded-2xl shadow-md text-semibold">
            All
          </button>
          <button className="bg-[#85F4FF] text-black hover:bg-[#42C2FF] hover:text-white mx-1 px-2 py-1 rounded-2xl shadow-md text-semibold">
            Unread
          </button>
        </div>
        <div className="w-72 h-72 overflow-y-scroll chats border-t-2 border-green-500">
          <ul className="p-2">
            {notifications.map((n) => (
              <li
                onClick={() => router.push(`/jobs/${n._id}`)}
                key={n.length}
                className=" hover:bg-slate-100 rounded-lg p-2 cursor-pointer"
              >
                <h1 className="text-slate-700">{n?.jobTitle}</h1>
                <span className="text-xs italic text-green-500">
                  Posted By, {n?.companyEmail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Notification;
