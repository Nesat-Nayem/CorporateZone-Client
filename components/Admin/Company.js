import React from 'react';

const Company = () => {

    const companies = [
        {logo:'https://demoapus2.com/entaro/wp-content/uploads/2017/12/c1.jpg', name:'Akshay INC.', position:'IT Project Manager', address:' 12 Lane No 5 Jain ', website:'www.abc.com',salary:'$15k - $25K'},
        {logo:'https://demoapus2.com/entaro/wp-content/uploads/2017/12/c1.jpg', name:'Akshay INC.', position:'IT Project Manager', address:' 12 Lane No 5 Jain ', website:'www.abc.com',salary:'$15k - $25K'},
        {logo:'https://demoapus2.com/entaro/wp-content/uploads/2017/12/c1.jpg', name:'Akshay INC.', position:'IT Project Manager', address:' 12 Lane No 5 Jain i', website:'www.abc.com',salary:'$15k - $25K'},
        {logo:'https://demoapus2.com/entaro/wp-content/uploads/2017/12/c1.jpg', name:'Akshay INC.', position:'IT Project Manager', address:' 12 Lane No 5 Jain ', website:'www.abc.com',salary:'$15k - $25K'},
        
    ]



    return (
        <div>
           <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden shadow-md sm:rounded-lg">
                <table class="min-w-full">
                    <thead class="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            Logo
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            COMPANY NAME
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            POSITION
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            ADDRESS
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            SALARY
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            WEBSITE
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            Update 
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            action
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            companies.map(job => (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <img src={job.logo} alt='' />
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {job.name}
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {job.position}
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {job.address}
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {job.salary}
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {job.website}
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Edit</button>
                            </td>
                            <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Remove</button>
                            </td>
                           
                        </tr>
                            ))
                        }
                        
                       
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    </div>
        </div>
    );
};

export default Company;


{/* <div  className="flex flex-col">
<div  className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div  className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
        <div  className="overflow-hidden">
            <table  className="min-w-full text-center">
                <thead className="border-b bg-gray-800">
                    <tr>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                            Logo
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                          COMPANY NAME
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                            POSITION
                        </th>
            
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                            ADDRESS
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                            SALARY
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                            WEBSITE
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                            UPDATE
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                            ACTION
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                   {
                       companies.map(job => (
                        <tr  className="bg-white border-b">
                             <td style={{color:'white'}} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b bg-gray-800"> <img src={job.logo} alt='' /> </td>
                        <td style={{color:'white'}} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b bg-gray-800">{job.name}</td>
                        <td style={{color:'white'}} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-b bg-gray-800">
                        {job.position}
                        </td>
                        <td style={{color:'white'}} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-b bg-gray-800">
                            {job.address}
                        </td>
                        <td style={{color:'white'}} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-b bg-gray-800">
                        {job.salary}
                        </td>
                        <td style={{color:'white'}} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-b bg-gray-800">
                        {job.website}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700">Edit</button>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700">Remove</button>
                        </td>
                    </tr>
                       ))
                   }
                    
                </tbody>
            </table>
        </div>
    </div>
</div>
</div> */}