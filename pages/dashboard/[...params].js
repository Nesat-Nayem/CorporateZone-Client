import DashboardRoutes from "../../components/Dashboard/Dashboard/DashboardRoutes";

const Dashboard = (props) => {
  return (
    <>
      <DashboardRoutes jobs={props.jobs} />
    </>
  );
};

export default Dashboard;

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { jobType } = query;

  // without filtering
  if (jobType) {
    const response = await fetch(
      `http://localhost:4030/jobs/?jobType=${jobType}`
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
      "http://localhost:4030/jobs"
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
