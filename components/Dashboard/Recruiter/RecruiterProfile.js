import React from "react";
import { useSelector } from "react-redux";

const RecruiterProfile = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  return (
    <div className="w-full flex items-center justify-center bg-white py-5">
      <div>
        <img
          src={loggedInUser?.photoURL}
          className="w-32 h-32"
          style={{ borderRadius: "50%" }}
          alt=""
        />
        <h3 className="text-center py-4 text-xl font-bold">
          {loggedInUser?.username}
        </h3>
      </div>
    </div>
  );
};

export default RecruiterProfile;
