import DashboardRoutes from "../../components/Dashboard/Dashboard/DashboardRoutes";
import { withProtected } from "../protect";

const Dashboard = () => {


  return (
    <>
      <DashboardRoutes />
    </>
  );
};

export default withProtected(Dashboard);
