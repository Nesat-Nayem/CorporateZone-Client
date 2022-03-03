import Blogs from "../../components/Blog/Blogs";
import Layout from "../../components/layout/Layout";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";
import withProtected from "../protect";


const Blog = () => {
  return (
   
      <Layout title="Blog">
      <Header />
      <section className="bg-gray-100 py-10">
        <div className="md:w-9/12 w-11/12 mx-auto ">
          <withProtected><Blogs /></withProtected>
        </div>
      </section>
      <Footer />
    </Layout>
   
  );
};

export default Blog;
