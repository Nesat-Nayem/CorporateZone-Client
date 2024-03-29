import DashboardRoutes from "../../components/Dashboard/Dashboard/DashboardRoutes";
import withProtected from "../protect";

const Dashboard = (props) =>
{
  return (
    <>
      <DashboardRoutes jobs={props.jobs} />
    </>
  );
};

export default withProtected(Dashboard);

export const getServerSideProps = async (context) =>
{
  const { query } = context;
  const { jobType } = query;

  // without filtering
  if (jobType) {
    const response = await fetch(
      `https://sore-rose-bighorn-sheep-fez.cyclic.app/jobs/?jobType=${jobType}`
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
      "https://sore-rose-bighorn-sheep-fez.cyclic.app/jobs"
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
