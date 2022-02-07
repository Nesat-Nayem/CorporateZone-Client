
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
      <Header />
      <HeroSection />
      <CategoryJobs />
      <CompanyJobs />
      <RecentJobs />
      <Footer />
    </div>
  );
}
