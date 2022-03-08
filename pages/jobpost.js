import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import JobPost from "../components/Dashboard/Recruiter/JobPost";
import Layout from "../components/layout/Layout";
import Header from "../components/Shared/Header/Header";


const Jobpost = () =>
{
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [socket, setSocket] = useState(null);

  useEffect(() =>
  {
    setSocket(io("http://localhost:5000"));
  }, []);

  useEffect(() =>
  {
    socket?.emit("newUser", loggedInUser?.username);
  }, [socket, loggedInUser]);

  return (
    <Layout title="Post a job">
      <Header socket={socket} />
      <JobPost socket={socket} user={loggedInUser?.username} />
    </Layout>
  );
};

export default Jobpost;
