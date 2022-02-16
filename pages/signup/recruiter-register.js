import RecruiterRegisterLayout from "../../components/authentication/recruiterRegister/RecruiterRegisterLayout";
import Layout from "../../components/layout/Layout";

const RegisterAsCompany = () => {
  return (
    <Layout title="Recruiter Registration">
      <section className="bg-gray-100 py-10">
        <div className="bg-white md:w-9/12 w-11/12 mx-auto py-5">
          <RecruiterRegisterLayout />
        </div>
      </section>
    </Layout>
  );
};

export default RegisterAsCompany;
