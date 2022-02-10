import Link from 'next/link';
import React from 'react';
import Footer from "../components/Home/Footer/Footer";

const Errorpage = () => {
    const errorImage = "https://cdn.pixabay.com/photo/2016/11/22/23/13/black-dog-1851106__340.jpg";
    return (
        <>
            <div className="flex items-center justify-center w-screen h-screen">
                <div className="px-4 lg:py-8">
                    <div className="lg:gap-4 lg:flex">
                    <div
                        className="flex flex-col items-center justify-center md:py-24 lg:py-32"
                    >
                        <h1 className="font-bold text-blue-600 text-9xl">404</h1>
                        <p
                        className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
                        >
                        <span className="text-red-500">Oops!</span> Page not found
                        </p>
                        <p className="mb-8 text-center text-gray-500 md:text-lg">
                        The page you’re looking for doesn’t exist.
                        </p>
                        <Link
                        href="/"
                            >
                                <a className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-300 rounded-md shadow hover:bg-blue-600 hover:text-white"> Go home </a>
                        </Link>
                    </div>
                    <div className="mt-4">
                        <img
                        src={errorImage}
                        alt="Error_image"
                        className="object-cover w-full h-full"
                        />
                    </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Errorpage;