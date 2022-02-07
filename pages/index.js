import Head from "next/head";
import Link from "next/link";
import CategoryJobs from "../components/Home/CategoryJobs/CategoryJobs";
import CompanyJobs from "../components/Home/CompanyJobs/CompanyJobs";
import Footer from "../components/Home/Footer/Footer";
import Pricing from "../components/Home/pricing/Pricing";
import Header from "../components/Home/Header/Header";
import RecentJobs from "../components/Home/RecentJobs/RecentJobs";
import RecentResumes from "../components/Home/RecentResumes/RecentResumes";
import HeroArea from "../components/Home/HeroArea/HeroArea";
import BlogArea from "../components/Home/BlogArea/BlogArea";
import NavArea from "../Components/NavArea";

export default function Home() {
  return (
    <>
      {/* <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossorigin="anonymous"
        />
      </Head> */}
      {/* <Header /> */}
      <NavArea />
      <HeroArea />
      <CategoryJobs />
      <CompanyJobs />
      <RecentJobs />
      <RecentResumes />
      <Pricing />
      <BlogArea />
      <Footer />
    </>
  );
}
