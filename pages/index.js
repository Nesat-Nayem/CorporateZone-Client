
import CategoryJobs from "../components/Home/CategoryJobs/CategoryJobs";
import CompanyJobs from "../components/Home/CompanyJobs/CompanyJobs";
import Footer from "../components/Home/Footer/Footer";
import Pricing from "../components/Home/pricing/Pricing";
import Header from "../components/Home/Header/Header";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import RecentJobs from "../components/Home/RecentJobs/RecentJobs";


export default function Home ()
{
  return (
    <>
      <Header />
      <HeroSection />
      <CategoryJobs />
      <CompanyJobs />
      <RecentJobs />
      <Pricing/>
      <Footer />
    </>
  );
}
