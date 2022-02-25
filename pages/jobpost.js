import JobPost from "../components/Dashboard/Recruiter/JobPost";
import Layout from "../components/layout/Layout";
import Header from "../components/Shared/Header/Header";

const Jobpost = () => {
  return (
    <Layout title="Post a job">
      <Header />
      <JobPost />
    </Layout>
  );
};

export default Jobpost;
