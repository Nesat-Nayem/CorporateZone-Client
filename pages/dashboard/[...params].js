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
      `https://sheltered-journey-99057.herokuapp.com/jobs/?jobType=${jobType}`
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
      "https://sheltered-journey-99057.herokuapp.com/jobs"
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