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

export default function Home ({articles})

{
      // console.log(articles)
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
      <Review />
      <Footer />
    </Layout>
  );
}

export const getStaticProps = async () =>{
      const res = await fetch(`https://ancient-castle-52925.herokuapp.com/testimonials`)
      const articles = await res.json()

      return {
            props:{
                  articles
            }
      }
}