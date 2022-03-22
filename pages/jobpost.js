import JobPost from "../components/Dashboard/Recruiter/JobPost";
import Layout from "../components/layout/Layout";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";
// here
const PostJobs = () => {
  return (
    <Layout title="Post your job">
      <Header />
      <JobPost />
      <Footer />
    </Layout>
  );
};

export default PostJobs;
