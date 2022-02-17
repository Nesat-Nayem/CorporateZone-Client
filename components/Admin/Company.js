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
            <div  className="flex flex-col">
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
            </div>
        </div>
    );
};

export default Company;