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
import Review from "../components/Home/Review/Review";
import Rule from "../components/Home/Rules/Rule";
import Features from "../components/Home/Features/Features";
import Recruiter from "../components/Home/Recruiter/Recruiter";
import Zone from "../components/Home/Zone/Zone";
import Hiring from "../components/Home/Hiring/Hiring";
import Candidate from "../components/Home/Candidate/Candidate";

export default function Home() {
  return (
    <Layout title="Corporate Zone">
      <Header />

      <HeroArea className="" />
      {/* <CategoryJobs /> */}
      <Features />
      {/* <RecentJobs /> */}
      {/* <Recruiter /> */}
      <Zone />
      <Hiring />
      <Candidate />
      <CompanyJobs />
      <Pricing />
      {/* <Faq /> */}
      {/* <BlogArea /> */}
      {/* <Rule /> */}
      <Review />
      <Footer />
    </Layout>
  );
}
