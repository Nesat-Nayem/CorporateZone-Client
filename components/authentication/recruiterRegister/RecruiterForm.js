import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useRouter } from 'next/router';
import axios from "axios";

const RecruiterForm = () => {
  const [photoURL, setPhotoURL] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://sheltered-journey-99057.herokuapp.com/users", { ...data, role: "recruiter", photoURL })
      .then(function (res) {
        if (res.status === 201)
        {
          router.push("/");
          alert("successfully saved!");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // image upload handler
  const imageUploadHandler = (e) => {
    const imageData = new FormData();
    imageData.set("key", "fe834545cf9ccab761e32c03f567e890");
    imageData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setPhotoURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="lg:w-7/12 md:w-9/12 w-full mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* generel details */}
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3 ">
          <div>
            <p className="font-serif py-1">Enter your username</p>
            <input
              className=" w-full  border border-gray-200 p-2  text-black focus:outline-none "
              placeholder="Elon mask"
              {...register("username", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.username && (
              <span className="text-sm text-red-500 block">
                username is required
              </span>
            )}
          </div>
          {/* email address */}
          <div>
            <p className="font-serif py-1">Enter your email</p>
            <input
              className="w-full border border-gray-200 p-2  text-black focus:outline-none "
              placeholder="example@gmail.com"
              type="email"
              {...register("email", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.email && (
              <span className="text-sm text-red-500 block">
                email is required
              </span>
            )}
          </div>
          {/* phone number */}
          <div>
            <p className="font-serif py-1">Enter your phobe number</p>
            <input
              className="w-full border border-gray-200 p-2  text-black focus:outline-none "
              placeholder="+880 "
              type="number"
              {...register("phone", { required: true, pattern: /^(?=.{11,})/ })}
            />
            {/* errors will return when field validation fails  */}
            <span className="text-sm text-red-500 block">
              {errors.phone?.type === "required" && "phone  is required"}
            </span>
            <span className="text-sm text-red-500 block">
              {errors.phone?.type === "pattern" &&
                "phone must be 11 characters"}
            </span>
          </div>

          {/* photo upload */}
          <div>
            <p className="font-serif py-1">Upload your photo</p>
            <input
              className="w-full border border-gray-200 p-2  text-black focus:outline-none"
              placeholder="photoURL"
              id="photoURL"
              type="file"
              {...register("photoURL", { required: true })}
              onBlur={imageUploadHandler}
            />
            {/* errors will return when field validation fails  */}
            {errors.photoURL && (
              <span className="text-sm text-red-500 block">
                photoURL is required
              </span>
            )}
          </div>
        </div>

        {/* // professional details */}

        <h2 className="text-lg py-3 font-serif text-gray-500">
          Professional Details
        </h2>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3 ">
          <div>
            <p className="font-serif py-1">Enter your Company Name</p>
            <input
              className=" w-full  border border-gray-200 p-2  text-black focus:outline-none "
              placeholder="Google"
              {...register("companyName", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.companyName && (
              <span className="text-sm text-red-500 block">
                Current Company Name is required
              </span>
            )}
          </div>
          <div>
            <p className="font-serif py-1">Enter your Designation</p>
            <input
              className="w-full border border-gray-200 p-2  text-black focus:outline-none "
              placeholder="Hiring Manager"
              type="post"
              {...register("post", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.post && (
              <span className="text-sm text-red-500 block">
                Current Designation is required
              </span>
            )}
          </div>
          <div>
            <p className="font-serif py-1">Enter your Website</p>
            <input
              className="w-full border border-gray-200 p-2  text-black focus:outline-none "
              placeholder="www.google.com"
              type="text"
              {...register("companyWebsite", {
                required: true,
              })}
            />
            {/* errors will return when field validation fails  */}
            {errors.companyWebsite && (
              <span className="text-sm text-red-500 block">
                Company Website is required
              </span>
            )}
          </div>
          <div>
            <p className="font-serif py-1">Enter your Company Location</p>
            <input
              className="w-full border border-gray-200 p-2  text-black focus:outline-none "
              placeholder="New York"
              type="text"
              {...register("companyLocation", {
                required: true,
              })}
            />
            {/* errors will return when field validation fails  */}
            {errors.companyLocation && (
              <span className="text-sm text-red-500 block">
                Company Location is required
              </span>
            )}
          </div>
          <div>
            <p className="font-serif py-1">Total Experience in hiring</p>
            <select
              className="w-full border border-gray-200 p-2  text-black focus:outline-none "
              type="text"
              {...register("experienceInHiring", {
                required: true,
              })}
            >
              <option value="Less Than 1 Year">Less Than 1 Year</option>
              <option value="1+ Year">1+ Year</option>
              <option value="3+ Year">3+ Year</option>
              <option value="5+ Year">5+ Year</option>
              <option value="8+ Year">8+ Year</option>
            </select>
          </div>
        </div>

        {/* password */}
        <div className=" py-4 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3 ">
          {" "}
          <div>
            <p className="font-serif py-1">Enter your password</p>
            <input
              className="w-full border border-gray-200 p-2  text-black focus:outline-none "
              placeholder="Password at least 6 characters"
              type="password"
              {...register("password", {
                required: true,
                pattern: /^(?=.{6,})/,
              })}
            />
            {/* errors will return when field validation fails  */}
            <span className="text-sm text-red-500 block">
              {errors.password?.type === "required" && "password  is required"}
            </span>
            <span className="text-sm text-red-500 block">
              {errors.password?.type === "pattern" &&
                "password must be 6 characters"}
            </span>
          </div>
        </div>

        <div className="text-center py-2">
          <input
            className="  py-2 border  border-cyan-500 text-cyan-500 px-7 rounded font-medium  focus:outline-none cursor-pointer hover:bg-cyan-500 hover:text-white transition duration-300"
            value="Register New Recruiter"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default RecruiterForm;
