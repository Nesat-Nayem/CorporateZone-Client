import Navbar from "./Navbar";
import TopHeader from "./TopHeader";

const Header = ({ socket }) =>
{
  return (
    <div>
      <TopHeader />
      <Navbar socket={socket} />
    </div>
  );
};

export default Header;
