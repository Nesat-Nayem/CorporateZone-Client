import { HiPlusCircle } from "react-icons/hi";
import { AiOutlineStar } from "react-icons/ai";

const Pricing = () => {
  return (
    <section className="lg:w-9/12 w-11/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12 text-center px-5 md:px-20 lg:px-32 py-10">
        <div className=" text-center pt-5 pb-10 shadow-md card card_1">
          <div className="text-center">
            <h2 className="text-2xl font-semibold head_title relative">
              BASIC PLAN
            </h2>
            <h1 className="mt-10">
              <span className="inline-block text-3xl title shadow-md bg-blue-400">
                <span className="inline-block title_middle font-semibold">
                  $29
                </span>
              </span>
            </h1>
          </div>
          <div className="pt-10 flex flex-col">
            <div className="flex justify-left items-center mb-2 list_item">
              <HiPlusCircle className="inline-block text-lg" />
              <p className="ml-2">5 Jobs Posting</p>
            </div>
            <div className="flex justify-left items-center mb-2 text-md list_item">
              <HiPlusCircle className="inline-block text-lg" />
              <p className="ml-2"> 2 Featured jobs</p>
            </div>
            <div className="flex justify-left items-center mb-2 text-md list_item">
              <HiPlusCircle className="inline-block text-lg" />
              <p className="ml-2"> 1 Renew Jobs</p>
            </div>
            <div className="flex justify-left items-center mb-2 text-md list_item">
              <HiPlusCircle className="inline-block text-lg" />
              <p className="ml-2"> 10 Days Duration</p>
            </div>
            <div className="flex justify-left items-center mb-2 text-md list_item">
              <HiPlusCircle className="inline-block text-lg" />
              <p className="ml-2">Email Alert</p>
            </div>
          </div>
          <div className="flex flex-row mt-5 justify-center items-center">
            <button className="flex flex-row justify-center items-center py-3 px-5 text-white bg-gray-800 rounded-md shadow-md hover:bg-red-500 transition-all">
              <HiPlusCircle className="inline-block text-lg mr-2" />
              <span className="inline-block font-semibold">Add To Card</span>
            </button>
          </div>
        </div>

        <div className=" text-center pt-5 pb-10 shadow-md card card_2">
          <div className="card_sticker text-center">
            <AiOutlineStar className="text-white text-xl inline-block mr-4" />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold head_titles relative">
              PREMIUM PLAN
            </h2>
            <h1 className="mt-10">
              <span className="inline-block text-3xl title shadow-md bg-red-500">
                <span className="inline-block title_middle font-semibold">
                  $59
                </span>
              </span>
            </h1>
          </div>
          <div className="pt-10 flex flex-col">
            <div className="flex justify-left items-center mb-2 list_item">
              <HiPlusCircle className="inline-block text-lg" />
              <p className="ml-2">10 Jobs Posting</p>
            </div>
            <div className="flex justify-left items-center mb-2 text-md list_item">
              <HiPlusCircle className="inline-block text-lg" />
              <p className="ml-2"> 5 Featured jobs</p>
            </div>
            <div className="flex justify-left items-center mb-2 text-md list_item">
              <HiPlusCircle className="inline-block text-lg" />
              <p className="ml-2"> 2 Renew Jobs</p>
            </div>
            <div className="flex justify-left items-center mb-2 text-md list_item">
              <HiPlusCircle className="inline-block text-lg" />
              <p className="ml-2"> 15 Days Duration</p>
            </div>
            <div className="flex justify-left items-center mb-2 text-md list_item">
              <HiPlusCircle className="inline-block text-lg" />
              <p className="ml-2">Email Alert</p>
            </div>
          </div>
          <div className="flex flex-row mt-5 justify-center items-center">
            <button className="flex flex-row justify-center items-center py-3 px-5 text-white rounded-md shadow-md bg-red-500 transition-all">
              <HiPlusCircle className="inline-block text-lg mr-2" />
              <span className="inline-block font-semibold">Add To Card</span>
            </button>
          </div>
        </div>

        <div className=" text-center pt-5 pb-10 shadow-md card card_1">
          <div className="text-center">
            <h2 className="text-2xl font-semibold head_title relative">
              ADVANCED PLAN
            </h2>
            <h1 className="mt-10">
              <span className="inline-block text-3xl title shadow-md bg-blue-400">
                <span className="inline-block title_middle font-semibold">
                  $99
                </span>
              </span>
            </h1>
          </div>
          <div className="pt-10 flex flex-col">
            <div className="flex justify-left items-center mb-2 list_item">
              <HiPlusCircle className="inline-block text-lg" />
              <p className="ml-2">15 Jobs Posting</p>
            </div>
            <div className="flex justify-left items-center mb-2 text-md list_item">
              <HiPlusCircle className="inline-block text-lg" />
              <p className="ml-2"> 10 Featured jobs</p>
            </div>
            <div className="flex justify-left items-center mb-2 text-md list_item">
              <HiPlusCircle className="inline-block text-lg" />
              <p className="ml-2"> 5 Renew Jobs</p>
            </div>
            <div className="flex justify-left items-center mb-2 text-md list_item">
              <HiPlusCircle className="inline-block text-lg" />
              <p className="ml-2"> 20 Days Duration</p>
            </div>
            <div className="flex justify-left items-center mb-2 text-md list_item">
              <HiPlusCircle className="inline-block text-lg" />
              <p className="ml-2">Email Alert</p>
            </div>
          </div>
          <div className="flex flex-row mt-5 justify-center items-center">
            <button className="flex flex-row justify-center items-center py-3 px-5 text-white bg-gray-800 rounded-md shadow-md hover:bg-red-500 transition-all">
              <HiPlusCircle className="inline-block text-lg mr-2" />
              <span className="inline-block font-semibold">Add To Card</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .list_item {
            margin-left: 25%;
          }

          .card {
            border-top: 1px solid #dcdde1;
            border-left: 1px solid #dcdde1;
            border-right: 1px solid #dcdde1;
          }

          .card_1 {
            border-bottom: 2px solid #0984e3;
            position: relative;
            border-radius: 5px;
          }

          .card_2 {
            border-bottom: 2px solid #e74c3c;
            position: relative;
            border-radius: 5px;
          }

          .title {
            padding: 20px 17px;
            transform: rotate(45deg);
            border-radius: 22px;
            position: relative;
          }

          .card_1::before,
          .card_2::before {
            content: "";
            display: block;
            width: 100%;
            height: 1.5px;
            position: absolute;
            top: 130px;
            background: #dcdde1;
          }

          .card_sticker {
            position: absolute;
            width: 50px;
            height: 30px;
            background: #f4a733;
            top: 9px;
            right: 0;
            clip-path: polygon(
              100% 0%,
              63% 52%,
              100% 100%,
              0 100%,
              0% 50%,
              0 0
            );
            transform: rotate(90deg);
          }

          .head_title::before {
            content: "";
            display: block;
            position: absolute;
            width: 10px;
            height: 1px;
            top: 40px;
            left: 35%;
            background: #0097e6;
          }

          .head_titles::before {
            content: "";
            display: block;
            position: absolute;
            width: 10px;
            height: 1px;
            top: 40px;
            left: 35%;
            background: #ee4444;
          }
          .head_title::after {
            content: "";
            display: block;
            position: absolute;
            width: 50px;
            height: 1px;
            top: 40px;
            left: 42%;
            background: #0097e6;
          }

          .head_titles::after {
            content: "";
            display: block;
            position: absolute;
            width: 50px;
            height: 1px;
            top: 40px;
            left: 42%;
            background: #ee4444;
          }

          .title_middle {
            color: #fff;
            transform: rotate(-45deg);
          }
        `}
      </style>
    </section>
  );
};

export default Pricing;
