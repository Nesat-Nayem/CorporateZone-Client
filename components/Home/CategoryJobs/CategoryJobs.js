
const CategoryJobs = () => {
    return (
        <div className="my-5">
            <ul className="md:flex justify-center items-center bg-cyan-100 md:w-8/12 mx-auto my-7 py-5 rounded-lg shadow-lg relative">

                <li className="mx-4 text-center h-32 w-40 flex justify-center items-center rounded-lg hover:bg-cyan-200 transform duration-500 hover:scale-95 px-3"><a href="#">
                    <span><i className="fas fa-laptop text-5xl text-cyan-500"></i></span>
                    <h3 className="text-2xl mt-3">Technology</h3>
                    <p>10 jobs</p>                
                </a></li>

                <li className="mx-4 text-center h-32 w-40 flex justify-center items-center rounded-lg hover:bg-cyan-200 transform duration-500 hover:scale-95"><a href="#">
                <span><i className="fas fas fa-code text-5xl text-cyan-500"></i></span>
                    <h3 className="text-2xl mt-3">Developer</h3>
                    <p>15 jobs</p>
                </a></li>

                <li className="mx-4 text-center h-32 w-40 flex justify-center items-center rounded-lg hover:bg-cyan-200 transform duration-500 hover:scale-95"><a href="#">
                <span><i className="fas fa-chess text-5xl text-cyan-500"></i></span>
                    <h3 className="text-2xl mt-3">Government</h3>
                    <p>7 jobs</p>              
                </a></li>

                <li className="mx-4 text-center h-32 w-40 flex justify-center items-center rounded-lg hover:bg-cyan-200 transform duration-500 hover:scale-95"><a href="#">
                <span><i className="far fa-chart-bar text-5xl text-cyan-500"></i></span>
                
                    <h3 className="text-2xl mt-3">Accounting</h3>
                    <p>4 jobs(dynamic)</p>
                </a></li>

                <li className="mx-4 text-center h-32 w-40 flex justify-center items-center rounded-lg hover:bg-cyan-200 transform duration-500 hover:scale-95"><a href="#">
                <span><i className="fas fa-briefcase-medical text-5xl text-cyan-500"></i></span>
                
                    <h3 className="text-2xl mt-3">Medical</h3>
                    <p>7 jobs</p>
                </a></li>

                <li className="mx-4 text-center h-32 w-40 flex justify-center items-center rounded-lg hover:bg-cyan-200 transform duration-500 hover:scale-95"><a href="#">
                <span><i className="fas fa-hotel text-5xl text-cyan-500"></i></span>
                
                    <h3 className="text-2xl mt-3">Restaurants</h3>
                    <p>5 jobs</p>
                </a></li>

                <li className="mx-4 text-center h-32 w-40 flex justify-center items-center rounded-lg hover:bg-cyan-200 transform duration-500 hover:scale-95"><a href="#">
                <span><i className="fas fa-industry text-5xl text-cyan-500"></i></span>
                    <h3 className="text-2xl mt-3">Industrial</h3>
                    <p>9 jobs</p>
                </a></li>
            </ul>
        </div>
    );
};

export default CategoryJobs;