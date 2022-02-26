// import About from "../components/About/About";
import Layout from "../components/layout/Layout";
import Review from "../components/Review/Review";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";

const review = () => {
  return (
    <Layout title="Review">
      <Header />
      <Review />
      <Footer />
    </Layout>
  );
};

export default review;
