import ContainerStyles from "../../../styles/Home.module.css";

const RecentJobs = () => {
  return (
    <div className={ContainerStyles.container}>
      <div className="md:flex justify-evenly items-center relative recent_header">
        <h3 className="text-2xl uppercase text-cyan-600 font-medium after:border-8 after:absolute after:bottom-0">
          Recent Jobs
        </h3>
        <ul className="flex justify-center items-center">
          <li className="mx-2 bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
            <a href="#">Featured Jobs</a>
          </li>
          <li className="mx-2 bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
            <a href="#">Recent Jobs</a>
          </li>
          <li className="mx-2 bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
            <a href="#">Part-Time Jobs</a>
          </li>
          <li className="mx-2 bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
            <a href="#">Full-Time Jobs</a>
          </li>
          <li className="mx-2 bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
            <a href="#">Contractual Jobs</a>
          </li>
          <li className="mx-2 bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
            <a href="#">Internships</a>
          </li>
        </ul>
      </div>

      <div className="md:flex justify-evenly items-center space-y-20 bg-cyan-100 md:w-3/4 mx-auto my-3 rounded-lg pb-7 job_card">
        <div className="company_logo">
          <img src="#" alt="company_logo" />
        </div>
        <div className="space-y-3 jobs_content">
          <h4>Senior Health and Food ( Pay Walt )</h4>
          <h3> $30k - $35k</h3>
          <p>Grand Central Pkwy Hollis NY 11003 USA</p>
          <h5>Tagged as: Media, Medicla, Restaurants</h5>
        </div>
        <div className="apply_btn space-y-3 text-center">
          <li className="mx-2 bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
            <a href="#">Remote Jobs</a>
          </li>
          <li className="mx-2 bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
            <a href="#">Apply</a>
          </li>
        </div>
      </div>

      <div className="md:flex justify-evenly items-center space-y-20 bg-cyan-100 md:w-3/4 mx-auto my-3 rounded-lg pb-7 job_card">
        <div className="company_logo">
          <img src="#" alt="company_logo" />
        </div>
        <div className="space-y-3 jobs_content">
          <h4>Senior Health and Food ( Pay Walt )</h4>
          <h3> $30k - $35k</h3>
          <p>Grand Central Pkwy Hollis NY 11003 USA</p>
          <h5>Tagged as: Media, Medicla, Restaurants</h5>
        </div>
        <div className="apply_btn space-y-3 text-center">
          <li className="mx-2 bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
            <a href="#">Remote Jobs</a>
          </li>
          <li className="mx-2 bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
            <a href="#">Apply</a>
          </li>
        </div>
      </div>

      <div className="md:flex justify-evenly items-center space-y-20 bg-cyan-100 md:w-3/4 mx-auto my-3 rounded-lg pb-7 job_card">
        <div className="company_logo">
          <img src="#" alt="company_logo" />
        </div>
        <div className="space-y-3 jobs_content">
          <h4>Senior Health and Food ( Pay Walt )</h4>
          <h3> $30k - $35k</h3>
          <p>Grand Central Pkwy Hollis NY 11003 USA</p>
          <h5>Tagged as: Media, Medicla, Restaurants</h5>
        </div>
        <div className="apply_btn space-y-3 text-center">
          <li className="mx-2 bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
            <a href="#">Remote Jobs</a>
          </li>
          <li className="mx-2 bg-cyan-500 p-1.5 text-white text-md rounded-lg hover:bg-cyan-800">
            <a href="#">Apply</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default RecentJobs;
