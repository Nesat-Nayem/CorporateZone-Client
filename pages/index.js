import Head from "next/head";
import CategoryJobs from "../components/Home/CategoryJobs/CategoryJobs";
import CompanyJobs from "../components/Home/CompanyJobs/CompanyJobs";
import Pricing from "../components/Home/pricing/Pricing";
import RecentJobs from "../components/Home/RecentJobs/RecentJobs";
import RecentResumes from "../components/Home/RecentResumes/RecentResumes";
import HeroArea from "../components/Home/HeroArea/HeroArea";
import BlogArea from "../components/Home/BlogArea/BlogArea";
import Faq from "../components/Home/Faq/Faq";
import Header from "../components/Shared/Header/Header";
import Footer from "../components/Shared/Footer/Footer";
import Review from "../components/Home/Review/Review";

export default function Home ({articles})

{
      // console.log(articles)
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
        />
      </Head>
      <Header />
      <HeroArea />
      {/* <CategoryJobs /> */}
      <RecentJobs />
      <CompanyJobs />
      {/* <RecentResumes /> */}
      {/* <Pricing /> */}
      {/* <Faq /> */}
      <Review articles={articles} />
      {/* <BlogArea /> */}
      <Footer />
    </>
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