import React from "react";
import PeopleResume from "./PeopleResume";
import RegisterUser from "./RegisterUser";

const fakeData = [
  {
    name: "Jhon Doe",
    role: "Project Manager",
    details:
      "As Marketing Graphic Designer, your primary responsibility is to assist the Marketing and Social Media team with ...",
    worker: "themeforest.net",
    image: "https://demoapus2.com/entaro/wp-content/uploads/2019/01/resume.jpg",
  },
  {
    name: "Doe Akshay",
    role: "Project Manager",
    details:
      "As Marketing Graphic Designer, your primary responsibility is to assist the Marketing and Social Media team with ...",
    worker: "themeforest.net",
    image: "https://demoapus2.com/entaro/wp-content/uploads/2019/01/resume.jpg",
  },
  {
    name: "Devel Mullei",
    role: "Project Manager",
    details:
      "As Marketing Graphic Designer, your primary responsibility is to assist the Marketing and Social Media team with ...",
    worker: "Evanto",
    image: "https://demoapus2.com/entaro/wp-content/uploads/2019/01/resume.jpg",
  },
];

const RecentResumes = () => {
  return (
    <section className="bg-gray-100 py-5">
      <div className="lg:w-9/12 w-11/12 mx-auto py-5">
        <h1 className="uppercase text-3xl font-bold font-serif py-2 text-center">
          recent resumes
        </h1>
        <div className="flex justify-center">
          <div className="text-center border border-b border-cyan-500 w-20"></div>
        </div>

        {/* layout pattern */}
        <div className="grid lg:grid-cols-2 grid-cols-1 py-9 gap-3">
          <div className="grid grid-cols-1 gap-5">
            {fakeData.map((data, index) => (
              <PeopleResume key={index} data={data}></PeopleResume>
            ))}
          </div>

          {/* register */}
          <div className="flex justify-center ">
            <RegisterUser />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentResumes;
