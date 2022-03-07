import { BsFillTagsFill, BsLaptop } from "react-icons/bs";
import { BiCodeAlt, BiRestaurant } from "react-icons/bi";
import { AiOutlineBarChart } from "react-icons/ai";
// import { Navigation, Scrollbar, A11y } from 'swiper';
// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'
// import { Autoplay, Pagination } from "swiper";
import style from './HeroArea.module.css'

import { FaMedkit, FaUniversity } from "react-icons/fa";
import { useForm } from "react-hook-form";

const HeroArea = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div>
      <div >
      <section className="relative">
      <div className={style.slide}
      
      
      >
        <div className="flex flex-col justify-center items-center">
          <h1
            style={{
              position: "relative",
              fontWeight: "bold",
              color:'white'
            }}
            className="text-4xl md:text-5xl lg:text-6xl mb-1 md:mb-2"
          >
            3,000 +{" "}
            <span
              style={{
                color: "white",
              }}
            >
              Browse Jobs
            </span>
          </h1>

          <h3
            style={{
              color: "#93959E",
            }}
            className="text-md md:text-xl"
          >
            Find Jobs, Employment & Career Opportunities
          </h3>
        </div>

        <div className="flex flex-col justify-center items-center">
          <form
            style={{
              backgroundColor: "#3D4051",
            }}
            className="mt-10 p-4 rounded-md"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              style={{
                color: "black",
                width: "250px",
                height: "40px",
                margin: "10px",
                paddingLeft: "10px",
                borderRadius: "10px",
              }}
              placeholder="What are you looking for?"
              {...register("example")}
            />

            <input type="text" list="region" placeholder="Choose Region" style={{
              color: "black",
              width: "170px",
              height: "40px",
              margin: "10px",
              paddingLeft: "10px",
              borderRadius: "10px",
            }} />
            <datalist id="region">
              <option>Bangladesh</option>
              <option>New York</option>
              <option>India</option>
              <option>Hawai</option>
            </datalist>


            <input type="text" list="category" placeholder="Choose Category" style={{
              color: "black",
              width: "170px",
              height: "40px",
              margin: "10px",
              paddingLeft: "10px",
              borderRadius: "10px",
            }} />
            <datalist id="category">
              <option>Development</option>
              <option>Accounting</option>
              <option>Medical</option>
              <option>Media News</option>
            </datalist>

          
            {/* {errors.exampleRequired && alert("Please fill the Input Box❌")} */}

      

            <input
              style={{
                backgroundColor: "#23C0E9",
                color: "white",
                padding: "10px 30px",
                borderRadius: "10px",
              }}
              type="submit"
              value="Search"
            />
          </form>

          <div className="flex flex-col justify-start items-start px-8 mt-10">
            <div className="flex">
              <p className="mt-1 ">
                <BsFillTagsFill />
              </p>
              <p
                style={{
                  color: "white",
                }}
                className="ml-2"
              >
                Trending Keywords:{" "}
                <span
                  style={{
                    color: "#93959E",
                  }}
                >
                  developer, design, it company, Media, New, Jobs, Working,
                  Medical
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="hidden md:grid justify-items-center">
          <div className="grid grid-cols-6 gap-1  mt-10 w-4/5 justify-items-center ">
            <div className="Ccolor rounded-md p-4 w-full text-center">
              <h5
                style={{
                  fontSize: "30px",
                  display: "flex",

                  justifyContent: "center",
                  marginBottom: "5px",
                }}
              >
                <BiCodeAlt />
              </h5>
              <h6>Developer</h6>
              <p>7 jobs</p>
            </div>

            <div className="Ccolor p-4 rounded-md w-full text-center">
              <h5
                style={{
                  fontSize: "30px",
                  display: "flex",

                  justifyContent: "center",
                  marginBottom: "5px",
                }}
              >
                <BsLaptop />
              </h5>
              <h6>Technology</h6>
              <p>3 jobs</p>
            </div>
            <div className="Ccolor p-4 rounded-md w-full text-center">
              <h5
                style={{
                  fontSize: "30px",
                  display: "flex",

                  justifyContent: "center",
                  marginBottom: "5px",
                }}
              >
                <AiOutlineBarChart />
              </h5>
              <h6>Technology</h6>
              <p>3 jobs</p>
            </div>
            <div className="Ccolor p-4 rounded-md w-full text-center">
              <h5
                style={{
                  fontSize: "30px",
                  display: "flex",

                  justifyContent: "center",
                  marginBottom: "5px",
                }}
              >
                <FaMedkit />
              </h5>
              <h6>Technology</h6>
              <p>3 jobs</p>
            </div>
            <div className="Ccolor p-4 rounded-md w-full text-center">
              <h5
                style={{
                  fontSize: "30px",
                  display: "flex",

                  justifyContent: "center",
                  marginBottom: "5px",
                }}
              >
                <FaUniversity />
              </h5>
              <h6>Technology</h6>
              <p>3 jobs</p>
            </div>
            <div className="Ccolor p-4 rounded-md w-full text-center checks">
              <h5
                style={{
                  fontSize: "30px",
                  display: "flex",

                  justifyContent: "center",
                  marginBottom: "5px",
                }}
              >
                <BiRestaurant />
              </h5>
              <h6 className="tcolor">Technology</h6>
              <p>3 jobs</p>
            </div>
          </div>
        </div>
        <style jsx>
          {`
      
      .Ccolor:hover{
        background-color:#23C0E9;
        color:white
        
      }
     .Ccolor{
       background-color:#22273A;
     }
     .Ccolor p{
       color: #93959E ;
     }
     .Ccolor h6{
       color: white;
     }
      
        
      }
      `}
        </style>
      </div>





    </section>

      </div>
    </div>



  );
};

export default HeroArea;
