import Navbar from "./Navbar";
import TopHeader from "./TopHeader";
import HeroArea from "../../Home/HeroArea/HeroArea"
const Header = () => {
  return (
    <div className="relative">
      <Navbar />
      <TopHeader />
      <HeroArea />
    </div>
  );
};

export default Header;
