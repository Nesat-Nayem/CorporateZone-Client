import React from 'react';

const JobPost = () => {
    return (
        <>
            <div>
                <div className="md:grid md:grid-cols-1 px-32 py-8 md:gap-6">
                    <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg md:text-xl italic font-bold animate-bounce leading-6 text-center text-gray-900">Post You Job</h3>
                    </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-4 sm:col-span-3">
                                <label  className="block text-sm font-medium text-gray-700">Job Title</label>
                                <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" placeholder='Enter your job title'/>
                            </div>
                            <div className="col-span-4 sm:col-span-3">
                                <label  className="block text-sm font-medium text-gray-700">Company Name</label>
                                <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" placeholder='Enter your company name'/>
                            </div>
                                        
                            <div className="col-span-4 sm:col-span-3">
                                <label  className="block text-sm font-medium text-gray-700">Company Email</label>
                                <input type="email" name="first_name" id="first_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" placeholder='Enter your company email'/>
                            </div>
                                        
                            <div className="col-span-3 sm:col-span-2">
                                <label className="block text-sm font-medium text-gray-700">
                                 Company Website
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    http://
                                </span>
                                <input type="text" name="company_website" id="company_website" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.example.com"/>
                                </div>
                            </div>
                            </div>
                                    
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">Company Size</label>
                                    <select id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option>10-20 employees</option>
                                        <option>20-50 employees</option>
                                        <option>50-100 employees</option>
                                        <option>100-250 employees</option>
                                        <option>250+ employees</option>
                                    </select>
                                </div>
                                    
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">Business Type</label>
                                    <select id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option>IT Farm</option>
                                        <option>IT Company</option>
                                        <option>Multinational Company</option>
                                        <option>Intern School</option>
                                    </select>
                                </div>
                                    
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">Job Type</label>
                                    <select id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option>Internship</option>
                                        <option>Part-Time</option>
                                        <option>Full-Time</option>
                                    </select>
                                </div>
                                    
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">Salary</label>
                                    <select id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option>$24k - $25k</option>
                                        <option>$26k - $50k</option>
                                        <option>$51k - $80k</option>
                                        <option>$81k - $100k</option>
                                        <option>$2LPA - $3LPA</option>
                                    </select>
                                </div>
                                    
                                <div className="col-span-4 sm:col-span-3">
                                    <label  className="block text-sm font-medium text-gray-700">Location</label>
                                    <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" placeholder='Enter the location'/>
                                </div>
                                    
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">Experience</label>
                                    <select id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option>1+ Years Experience</option>
                                        <option>2+ Years Experience</option>
                                        <option>3+ Years Experience</option>
                                        <option>4+ Years Experience</option>
                                        <option>5+ Years Experience</option>
                                        <option>6+ Years Experience</option>
                                        <option>7+ Years Experience</option>
                                    </select>
                                </div>

                            <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Job Description
                            </label>
                            <div className="mt-1">
                                <textarea id="about" name="about" rows="5" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full p-2 sm:text-sm border-gray-300 rounded-md" placeholder="Please Write Job Description"></textarea>
                            </div>
                            </div>
                                    
                            <div className="col-span-4 sm:col-span-3">
                                <label  className="block text-sm font-medium text-gray-700">Last Date</label>
                                <input type="date" name="first_name" id="first_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" placeholder='Enter the location'/>
                            </div>

                            <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Logo photo
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="True">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className="flex text-sm text-gray-600">
                                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">
                                    PNG, JPG, GIF up to 1MB
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Save
                            </button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobPost;