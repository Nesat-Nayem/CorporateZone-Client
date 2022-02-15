import { useRouter } from "next/router";
import Dashboard from "../../components/Dashboard/Dashboard/Dashboard";

const DashboardArea = () => {
    const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

    return (
        <div>
            <Dashboard></Dashboard>
        </div>
    );
};

export default DashboardArea;