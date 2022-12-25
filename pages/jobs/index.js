import PostedJobs from "../../components/Jobs/PostedJobs";
import Layout from "../../components/layout/Layout";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";

const jobs = ({ jobs }) => {
  return (
    <Layout title="Jobs">
      <Header />
      <PostedJobs jobs={jobs} />
      <Footer />
    </Layout>
  );
};

export default jobs;

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { jobType } = query;

  // without filtering
  if (jobType) {
    const response = await fetch(
      `https://corporate-zone-back-end-side-production.up.railway.app/jobs/approved?jobType=${jobType}`
    );
    const data = await response.json();

    return {
      props: {
        jobs: data.data,
        count: data.count,
      },
    };
  } else {
    const response = await fetch(
      "https://corporate-zone-back-end-side-production.up.railway.app/jobs/approved"
    );
    const data = await response.json();
    return {
      props: {
        jobs: data.data,
        count: data.count,
      },
    };
  }
};
