import CategoryJobs from "../components/Home/CategoryJobs/CategoryJobs";
import CompanyJobs from "../components/Home/CompanyJobs/CompanyJobs";
import Pricing from "../components/Home/pricing/Pricing";
import RecentJobs from "../components/Home/RecentJobs/RecentJobs";
import HeroArea from "../components/Home/HeroArea/HeroArea";
import BlogArea from "../components/Home/BlogArea/BlogArea";
import Faq from "../components/Home/Faq/Faq";
import Layout from "../components/layout/Layout";
import { useSelector } from "react-redux";
import Header from "../components/Shared/Header/Header";
import Footer from "../components/Shared/Footer/Footer";

export default function Home() {
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(currentUser);
  return (
    <Layout title="Corporate Zone">
      <Header />
      <HeroArea />
      {/* <CategoryJobs /> */}
      <RecentJobs />
      <CompanyJobs />
      {/* <Pricing /> */}
      {/* <Faq /> */}
      {/* <BlogArea /> */}
      <Footer />
    </Layout>
  );
}
