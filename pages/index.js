import Head from "next/head";
import CategoryJobs from "../components/Home/CategoryJobs/CategoryJobs";
import CompanyJobs from "../components/Home/CompanyJobs/CompanyJobs";
import Footer from "../components/Home/Footer/Footer";
import Header from "../components/Home/Header/Header";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import RecentJobs from "../components/Home/RecentJobs/RecentJobs";


export default function Home ()
{
  return (
    <div>
      <Head>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous" />

      </Head>

      <Header />
      <HeroSection />
      <CategoryJobs />
      <CompanyJobs />
      <RecentJobs />
      <Footer />
    </div>
  );
}
