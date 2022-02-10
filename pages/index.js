<<<<<<< HEAD
import CompanyJobs from "../components/Home/CompanyJobs/CompanyJobs";
import Footer from "../components/Home/Footer/Footer";
import Header from "../components/Home/Header/Header";
import HeroSection from "../components/Home/HeroSection/HeroSection";


export default function Home ()
{
  return (
    <div>
      <Header />
      <HeroSection />
      <CompanyJobs />
      <Footer />
    </div>
=======
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

export default function Home() {
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
      <CategoryJobs />
      <CompanyJobs />
      <RecentJobs />
      <RecentResumes />
      <Pricing />
      <Faq />
      <BlogArea />
      <Footer />
    </>
>>>>>>> 9f9e045aa206766d1e7f7fe485923eccd9d15771
  );
}
