import About from "../components/About/About";
<<<<<<< HEAD
import Header from "../components/Shared/Header/Header";
import Footer from "../components/Shared/Footer/Footer";

const about = () => {
  return (
    <>
      <Header />
      <About />
      <Footer />
    </>
=======
import Layout from "../components/layout/Layout";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";

const about = () => {
  return (
    <Layout title="About Us">
      <Header />
      <About />
      <Footer />
    </Layout>
>>>>>>> 5cf3a4d4e3b4904ad5178ac96747ad7f40ad8946
  );
};

export default about;
