import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
   
  return (
    <footer className="">
      <ScrollToTop
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
        }}
        color="#42C2FF"
        smooth
        top="1000"
      />
      <div className="text-center px:2 md:px-20 lg:text-left md:w-10/12 mx-auto  text-slate-800">
        <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
          <div className="mr-12 hidden lg:block">
            <span className="text-xl uppercase">
              Get your required jobs
            </span>
          </div>
          <div className="relative">
            <input
              class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Enter your mail..."
              type="text"
              name="search"
            />
            <button className="bg-cyan-500 px-3 py-2 text-white font-medium rounded-lg absolute top-0 right-0">Subscribe</button>
          </div>
        </div>
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-sm">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                CorporateZone
              </h6>
              <p className="text-base text-slate-700 leading-8">
                We strongly encourage employers to embrace diversity, equity,
                and inclusion as fundamental values when hiring through
                CorporateZone.
              </p>
            </div>

            <div className="text-base">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Post A Job
              </h6>
              <p className="mb-2">
                <Link href="/">
                  <a className="">Sign In</a>
                </Link>
              </p>
              <p className="mb-2">
                <Link href="/">
                  <a className="">Pricing</a>
                </Link>
              </p>
              <p className="mb-2">
                <Link href="/">
                  <a className="">Guarantee</a>
                </Link>
              </p>
              <p className="mb-2">
                <Link href="/">
                  <a className="">Request an Invoice</a>
                </Link>
              </p>
            </div>

            <div className="text-base">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Find A job
              </h6>
              <p className="mb-2">
                <Link href="/">
                  <a className="">Full-time Jobs</a>
                </Link>
              </p>
              <p className="mb-2">
                <Link href="/">
                  <a className="">Remote Jobs</a>
                </Link>
              </p>
              <p className="mb-2">
                <Link href="/">
                  <a className="">Part-time Jobs</a>
                </Link>
              </p>
              <p className="mb-2">
                <Link href="/">
                  <a className="">Internship</a>
                </Link>
              </p>
            </div>

            <div className="text-base">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Hire Remotely
              </h6>
              <p className="text-base text-slate-700 leading-8">
                Optimize your entire recruiting process. Post a
                job and reach thousands of engineers, developers,
                 and other remote candidates.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap flex-row items-center pb-3">
          <p className="ml-3 text-xs">
            <Link href="/about">
              <a className="">About us</a>
            </Link>
          </p>
          <p className="ml-3 text-xs">
            <Link href="/contact">
              <a className="">Contact us</a>
            </Link>
          </p>
          <p className="ml-3 text-xs">
            <Link href="/policy">
              <a className="">Terms & Conditions</a>
            </Link>
          </p>
          <p className="ml-3 text-xs">
            <Link href="/policy">
              <a className="">Privacy Policy & Cookies</a>
            </Link>
          </p>
        </div>

        <div className="text-center py-3">
          <span>© 2022 Copyright : </span>
          <a
            className="text-slate-700 font-semibold hover:text-[#42C2FF]"
            href="#"
          >
            @Team-CodeExpress
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
