import Link from "next/link";
import { useRouter } from "next/router";
import Chart from "../Chart/Chart";

const ProfileView = ({ role, loggedInUser }) => {
  const router = useRouter();
  return (
    <div className="bg-white xl:px-5 md:px-2 px-2 py-1 ">
      {/* profile information */}
      <div>
        <div className="md:flex ">
          <div>
            <div className="flex justify-center">
              <img
                src={loggedInUser?.photoURL}
                className="w-56 h-56 ring-2"
                style={{ borderRadius: "50%" }}
                alt=""
              />
            </div>
            {loggedInUser?.role === "candidate" && (
              <div className="text-center py-5">
                <button
                  onClick={() => router.push("/dashboard/updateProfile")}
                  className="bg-pink-500 text-white px-5 py-2 rounded"
                >
                  Edit Profile
                </button>
              </div>
            )}
            {loggedInUser?.role === "recruiter" && (
              <div className="text-center py-5">
                <button
                  onClick={() => router.push("/dashboard/updateProfile")}
                  className="bg-pink-500 text-white px-5 py-2 rounded"
                >
                  Edit Profile
                </button>
              </div>
            )}
          </div>

          {/* common information for both candidate and recruiter */}
          <div className="md:px-20">
            {/* username */}
            <div>
              <p className="font-semibold text-sm text-slate-600 py-1">
                Username:
              </p>
              <p className="px-1  text-lg">{loggedInUser?.username}</p>
            </div>
            {/* email */}
            <div className="py-2">
              <p className="font-semibold text-sm text-slate-600 py-1">
                Email:
              </p>
              <p className="px-1 text-lg">{loggedInUser?.email}</p>
            </div>
            {/* post */}
            {role === "recruiter" && loggedInUser && (
              <div className="py-2">
                <p className="font-semibold text-sm text-slate-600 py-1">
                  Position:
                </p>
                <p className="px-1 text-lg capitalize font-serif">
                  {loggedInUser?.post}
                </p>
              </div>
            )}
            {/* location */}
            <div className="py-2">
              <p className="font-semibold text-sm text-slate-600 py-1">
                Location:
              </p>
              <p className="px-1  text-lg">{loggedInUser?.location}</p>
            </div>
            {/* phone */}
            <div className="py-2">
              <p className="font-semibold text-sm text-slate-600 py-1">
                Phone:
              </p>
              <p className="px-1  text-lg">0{loggedInUser?.phone.toString()}</p>
            </div>
          </div>
        </div>
        {/* candidate additional information */}
        {loggedInUser && role === "candidate" && loggedInUser?.role === role && (
          <div className="flex flex-wrap md:flex-nowrap">
              <div className=" py-5">
              {/* skill Set */}
              <div className="py-2">
                <p className="font-semibold text-slate-600 py-1">Skill set: </p>
                <p>
                  {loggedInUser?.selectedSkills.map((skill) => (
                    <span key={skill.id}>{skill.name}, </span>
                  ))}{" "}
                  and so on.
                </p>
              </div>

              {/* resume */}
              <div className="">
                <p className="font-semibold text-sm text-slate-600 py-1">
                  Resume (Google Drive):
                </p>
                <a
                  className="text-blue-700 hover:underline"
                  href={loggedInUser?.resumeLink}
                >
                  {loggedInUser?.resumeLink}
                </a>
              </div>
              {/* portfolio */}
              <div className="py-2">
                <p className="font-semibold text-sm text-slate-600 py-1">
                  Portfolio Link:
                </p>
                <a
                  className="text-blue-700 hover:underline"
                  href={loggedInUser?.portfolio}
                >
                  {loggedInUser?.portfolio}
                </a>
              </div>
              {/* portfolio */}
              <div>
                <p className="font-semibold text-sm text-slate-600 py-1">
                  Github Profile:
                </p>
                <a
                  className="text-blue-700 hover:underline"
                  href={loggedInUser?.githubProfile}
                >
                  {loggedInUser?.githubProfile}
                </a>
              </div>

              {/* linkedin */}
              <div className="py-2">
                <p className="font-semibold text-sm text-slate-600 py-1">
                  LinkedIn Profile:
                </p>
                <a
                  className="text-blue-700 hover:underline"
                  href={loggedInUser?.linkedInProfile}
                >
                  {loggedInUser?.linkedInProfile}
                </a>
              </div>
            </div>
            <div className="mt-0 md:mt-2">
              <Chart data={loggedInUser}/>
            </div>
          </div>
        )}

        {/* recruiter additional information */}
                  
          {loggedInUser &&
            role === "recruiter" &&
            loggedInUser?.role === "recruiter" && (
              <div className="flex flex-wrap">
              <div className="py-5">
                {/* company name */}
                <div className="py-2">
                  <p className="font-semibold text-slate-600 py-1">
                    Company Name
                  </p>
                  <p>{loggedInUser?.companyName}</p>
                </div>
                {/* companyWebsite */}
                <div className="py-2">
                  <p className="font-semibold text-slate-600 py-1">
                    Company website{" "}
                  </p>
                  <a className="text-blue-700 hover:underline">
                    {loggedInUser?.companyWebsite}
                  </a>
              </div>
              </div>
          <div>
              <Chart data={loggedInUser}/>
          </div>
        </div>
            )}
      </div>
    </div>
  );
};

export default ProfileView;