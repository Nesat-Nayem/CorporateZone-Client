import CandidateRegisterLayout from "../../components/authentication/candidateRegister/CandidateRegisterLayout";
import Layout from "../../components/layout/Layout";

const RegisterAsCompany = () => {
  return (
    <Layout title="Company Registration">
      <section className="bg-gray-100 py-10">
        <div className="bg-white md:w-9/12 w-11/12 mx-auto py-5">
          <CandidateRegisterLayout />
        </div>
      </section>
    </Layout>
  );
};

export default RegisterAsCompany;
