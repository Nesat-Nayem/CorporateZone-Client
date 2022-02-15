import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import Bounce from "react-reveal/Bounce";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Review = ({ articles }) => {
  return (
    <section className="contrl max-w-screen-xl mx-auto px-6 pb-24 mt-16">
      {/* costom */}

      <div className="flex justify-center items-center flex-col">
        <h1 className="font-logo text-gray-800 text-3xl font-semibold">
          Testimonials
        </h1>
        <div className="h-1 w-24 bg-gray-400 rounded-full"></div>
      </div>

      {/* costom */}

      <Swiper
        loop={true}
        className="mySwiper py-6"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={true}
        grabCursor={true}
        slidesPerView={1}
        speed={600}
        spaceBetween={20}
      >
        {articles.map((data) => (
          <SwiperSlide key={data._id}>
            <Bounce bottom>
              <div className="container px-5 py-12 mx-auto">
                <div className=" lg:w-3/4 w-full mx-auto text-center bg-gray-50 p-4 shadow-lg rounded-lg">
                  <img
                    className="w-12 mx-auto mb-4"
                    src="https://i.ibb.co/99dfqmz/quote.png"
                    alt="quotes"
                  />

                  <p className="leading-relaxed poppins text-gray-500">
                    {data.review}
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-gray-400 mt-8 mb-6"></span>

                  {/* rating  */}
                  <div className="flex items-center justify-center pb-4">
                    <Rating
                      emptySymbol={
                        <AiOutlineStar className="text-gray-600 text-xl" />
                      }
                      fullSymbol={
                        <AiFillStar className="text-yellow-400 text-xl" />
                      }
                      initialRating={`${data.rating}`}
                      readonly
                    />
                    <span className="text-gray-600">({data.rating})</span>
                  </div>
                  {/* person info  */}
                  <div className="flex justify-center items-center space-x-3">
                    <img
                      className="w-16 h-16 rounded-full object-cover"
                      src={data.image}
                      alt={data.username}
                    />
                    <h2 className="text-gray-900 font-medium poppins tracking-wider text-sm">
                      {data.username}
                    </h2>
                  </div>
                </div>
              </div>
            </Bounce>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
