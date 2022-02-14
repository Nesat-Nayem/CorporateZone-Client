import CategoryJobs from "../components/Home/CategoryJobs/CategoryJobs";
import CompanyJobs from "../components/Home/CompanyJobs/CompanyJobs";
import Pricing from "../components/Home/pricing/Pricing";
import RecentJobs from "../components/Home/RecentJobs/RecentJobs";
import HeroArea from "../components/Home/HeroArea/HeroArea";
import BlogArea from "../components/Home/BlogArea/BlogArea";
import Faq from "../components/Home/Faq/Faq";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout title="Corporate Zone">
      <HeroArea />
      {/* <CategoryJobs /> */}
      <RecentJobs />
      <CompanyJobs />
      {/* <Pricing /> */}
      {/* <Faq /> */}
      {/* <BlogArea /> */}
    </Layout>
  );
}
