
const CategoryJobs = () => {
    return (
        <div className="my-5">
            <ul className="md:flex justify-center items-center bg-cyan-100 md:w-8/12 mx-auto my-7 py-5 rounded-lg shadow-lg relative">

                <li className="mx-4 text-center h-32 w-40 flex justify-center items-center rounded-lg hover:bg-cyan-200 transform duration-500 hover:scale-95 px-3"><a href="#">
                    <span>icon</span>
                    <h3 className="text-2xl">Technology</h3>
                    <p>10 jobs</p>                
                </a></li>

                <li className="mx-4 text-center h-32 w-40 flex justify-center items-center rounded-lg hover:bg-cyan-200 transform duration-500 hover:scale-95"><a href="#">
                <span>icon</span>
                    <h3 className="text-2xl">Developer</h3>
                    <p>15 jobs</p>
                </a></li>

                <li className="mx-4 text-center h-32 w-40 flex justify-center items-center rounded-lg hover:bg-cyan-200 transform duration-500 hover:scale-95"><a href="#">
                <span>icon</span>
                    <h3 className="text-2xl">Government</h3>
                    <p>7 jobs</p>              
                </a></li>

                <li className="mx-4 text-center h-32 w-40 flex justify-center items-center rounded-lg hover:bg-cyan-200 transform duration-500 hover:scale-95"><a href="#">
                <span>icon</span>
                    <h3 className="text-2xl">Accounting</h3>
                    <p>4 jobs(dynamic)</p>
                </a></li>

                <li className="mx-4 text-center h-32 w-40 flex justify-center items-center rounded-lg hover:bg-cyan-200 transform duration-500 hover:scale-95"><a href="#">
                <span>icon</span>
                    <h3 className="text-2xl">Medical</h3>
                    <p>7 jobs</p>
                </a></li>

                <li className="mx-4 text-center h-32 w-40 flex justify-center items-center rounded-lg hover:bg-cyan-200 transform duration-500 hover:scale-95"><a href="#">
                <span>icon</span>
                    <h3 className="text-2xl">Restaurants</h3>
                    <p>5 jobs</p>
                </a></li>

                <li className="mx-4 text-center h-32 w-40 flex justify-center items-center rounded-lg hover:bg-cyan-200 transform duration-500 hover:scale-95"><a href="#">
                <span>icon</span>
                    <h3 className="text-2xl">Industrial</h3>
                    <p>9 jobs</p>
                </a></li>
            </ul>
        </div>
    );
};

export default CategoryJobs;