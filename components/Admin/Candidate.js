import React from 'react';

const Candidate = () => {

    const candidates = [
        {name:'Jhon Doe', position:'Project Manager', skill:'Developer', education:'abc university', contact:'abc@gmail.com'},
        {name:'Jhon Doe', position:'Project Manager', skill:'Developer', education:'abc university', contact:'abc@gmail.com'},
        {name:'Jhon Doe', position:'Project Manager', skill:'Developer', education:'abc university', contact:'abc@gmail.com'},
        {name:'Jhon Doe', position:'Project Manager', skill:'Developer', education:'abc university', contact:'abc@gmail.com'},
        {name:'Jhon Doe', position:'Project Manager', skill:'Developer', education:'abc university', contact:'abc@gmail.com'},
        {name:'Jhon Doe', position:'Project Manager', skill:'Developer', education:'abc university', contact:'abc@gmail.com'},
    ]



    return (
        <div>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center">
                                <thead className="border-b bg-gray-800">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                          NAME
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            POSITION
                                        </th>
                            
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            SKILL
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            EDUCATION
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            CONTACT
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
                                       candidates.map(job => (
                                        <tr  className="bg-white border-b">
                                        <td style={{color:'white'}} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b bg-gray-800">{job.name}</td>
                                        <td style={{color:'white'}} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-b bg-gray-800">
                                        {job.position}
                                        </td>
                                        <td style={{color:'white'}} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-b bg-gray-800">
                                            {job.skill}
                                        </td>
                                        <td style={{color:'white'}} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-b bg-gray-800">
                                        {job.education}
                                        </td>
                                        <td style={{color:'white'}} className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-b bg-gray-800">
                                        {job.contact}
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

export default Candidate;