// import React, { useRef } from "react";

import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

import { useRef } from "react";


const Footer = () =>
{

  const form = useRef();

  const sendEmail = (e) =>
  {
    e.preventDefault();

    emailjs.sendForm(
      "service_xgz22ma",
      "template_kmbg1t2",
      form.current,
      "iTYZHZvfqHjV6ixNT"
    )
      .then(
        (result) =>
        {
          console.log(result.text);
          if (result.text) {
            return Swal.fire(
              "Thank You For Subscription!",
              "You will get skills required jobs within 24hrs!",
              "success"
            );
          }
          useRef.current('')
        },
        (error) =>
        {
          console.log(error.text);
        }
      );
  };

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
      <div className="text-center px:2 md:px-20 lg:text-left md:w-10/12 mx-auto  text-slate-700 dark:text-white">
        <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
          <div className="mr-12 hidden lg:block">
            <span className="text-xl font-bold uppercase">
              Get your required jobs
            </span>
          </div>
          <div className="relative">
            <form action="#" ref={form} onSubmit={sendEmail}>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Enter your mail..."
                type="text"
                name="search"
              />
              <button className="bg-[#42C2FF] hover:bg-white px-3 py-2 text-white hover:text-[#42C2FF] font-medium rounded-lg absolute top-0 -right-16">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-sm ">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                CorporateZone
              </h6>
              <p className="text-base leading-8 text-slate-700 dark:text-white">
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
                <Link href="/signin">
                  <a className="">Sign In</a>
                </Link>
              </p>
              <p className="mb-2">
                <Link href="/pricing">
                  <a className="">Pricing</a>
                </Link>
              </p>
              <p className="mb-2">
                <Link href="/signup">
                  <a className="">Guarantee</a>
                </Link>
              </p>
              <p className="mb-2">
                <Link href="/signup">
                  <a className="">Request an Invoice</a>
                </Link>
              </p>
            </div>

            <div className="text-base">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Find A job
              </h6>
              <p className="mb-2">
                <Link href="/jobs">
                  <a className="">Full-time Jobs</a>
                </Link>
              </p>
              <p className="mb-2">
                <Link href="/jobs">
                  <a className="">Remote Jobs</a>
                </Link>
              </p>
              <p className="mb-2">
                <Link href="/jobs">
                  <a className="">Part-time Jobs</a>
                </Link>
              </p>
              <p className="mb-2">
                <Link href="/jobs">
                  <a className="">Internship</a>
                </Link>
              </p>
            </div>

            <div className="text-base">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Hire Remotely
              </h6>
              <p className="text-base leading-8 text-slate-700 dark:text-white">
                Optimize your entire recruiting process. Post a job and reach
                thousands of engineers, developers, and other remote candidates.
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
            className=" font-semibold hover:text-[#42C2FF] text-slate-700 dark:text-white"
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
