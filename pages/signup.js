import Link from "next/link";
import GithubSignin from "../components/authentication/GithubSignin";
import GoogleSignin from "../components/authentication/GoogleSignin";
import SignupForm from "../components/authentication/SignupForm";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";

const Signup = () => {
  return (
    <section className="bg-gray-100">
      <Header />
      <div className="md:w-9/12 w-11/12 mx-auto flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold font-serif ">Sign Up </h1>
          <p className="font-semibold py-1">
            Already a member?{" "}
            <Link href="/signin">
              <a className="text-blue-700 hover:underline"> Sign In</a>
            </Link>
          </p>

          {/* sign up form */}
          <SignupForm />

          {/* // others way to sign up */}

          <p className="font-medium text-xl text-gray-600 py-3">
            _______ or sign up with _______
          </p>

          <div className="flex justify-center items-center py-5">
            <GithubSignin />
            <GoogleSignin />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Signup;
