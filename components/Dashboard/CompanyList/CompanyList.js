import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import logo from "../../../public/favicon.ico";

const handleDelete = (id) =>
{
    console.log(id)
};

const CompanyList = ({ data }) =>
{
    return (
        <>
            <p className='bg-gray-600 rounded-md shadow-md py-3 text-white text-center text-xl font-semibold mb-3'>
                TOTAL REGISTERED COMPANY - {data.length}
            </p>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className=" min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            COMPANY NAME
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            COMPANY CATEGORY
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            CONTACT
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            JOB POST
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            MANAGEMENT
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {data.map((company) => (
                                        <tr key={company._id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <Image className="rounded-full" src={company.logo || logo} alt="company logo" width={40} height={40} />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="flex justify-center items-center text-sm font-medium text-gray-900">
                                                            {company.name}
                                                            <a href={`${company.link}`} title={company.link} className="hover:text-green-600 hover:animate-bounce">
                                                                <FaExternalLinkAlt className="ml-3 w-3 h-3" />
                                                            </a>
                                                        </div>
                                                        <div className="text-sm text-gray-500">{company.address}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{company.category}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{company.contact}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                <div className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {company.job}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium">
                                                <button onClick={() => handleDelete(company._id)} className="bg-red-700 rounded shadow-md px-3 py-1 text-white hover:animate-pulse">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyList

export async function getStaticProps ()
{
    const res = await fetch('https://joynool.github.io/fitness-club-data/fitness.json')
    const data = await res.json()
    return {
        props: { data }
    }
};