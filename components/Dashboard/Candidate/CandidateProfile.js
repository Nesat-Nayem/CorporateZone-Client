import React from "react";
import { useSelector } from "react-redux";

const CandidateProfile = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  return (
    <div>
      <h1>CandidateProfile</h1>
    </div>
  );
};

export default CandidateProfile;
