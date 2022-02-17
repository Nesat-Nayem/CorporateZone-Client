import PostedJobs from "../components/Jobs/PostedJobs";
import Layout from "../components/layout/Layout";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";

const jobs = () => {
  return (
    <Layout title="Jobs">
      <Header />
      <PostedJobs />
      <Footer />
    </Layout>
  );
};

export default jobs;
