import RegisterUser from "../../components/authentication/RegisterUser";
import Layout from "../../components/layout/Layout";

const Signup = () => {
  return (
    <Layout title="Sign up">
      <section className="bg-gray-100 py-10">
        <div className="md:w-9/12 w-11/12 mx-auto flex items-center justify-center py-20">
          <RegisterUser />
        </div>
      </section>
    </Layout>
  );
};

export default Signup;
