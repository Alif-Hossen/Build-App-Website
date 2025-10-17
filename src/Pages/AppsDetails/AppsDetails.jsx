// import React from 'react';
// import { FaDownload, FaStar } from 'react-icons/fa';
// import { TbFileLike } from "react-icons/tb";
// import { useLoaderData, useParams } from 'react-router';
// // import { Line, LineChart, XAxis, YAxis } from 'recharts';

// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const AppsDetails = () => {
//     const { id } = useParams();
//     const appId = parseInt(id)

//     const data = useLoaderData();
//     const singleApp = data.find(app => app.id === appId);

//     const { image, title, downloads, shortSummary, developedBy, size, ratingAvg, reviews, description, ratings } = singleApp;

//     // START 

//     const parseMValue = (value) => {
//         if (typeof value === 'string') {
//             const num = parseFloat(value);
//             if (value.toLowerCase().includes('m')) {
//                 return num * 1000000;
//             }
//             return num;
//         }
//         return value;
//     };

//     const processedRatings = ratings.map(item => ({
//         ...item,
//         count: parseMValue(item.count)
//     }));

//     const CustomLabel = (props) => {
//         const { x, y, width, height, value } = props;

//         const formattedValue = (value / 1000000).toFixed(1) + 'M';

//         return (
//             <text
//                 x={x + width}
//                 y={y + height / 2}
//                 dx={5} 
//                 dy={5}
//                 fill="#ff9900" 
//                 fontSize={12}
//                 fontWeight="bold"
//                 textAnchor="start"
//             >
//                 {formattedValue}
//             </text>
//         );
//     };

//     return (
//         <>
//             <div className='my-10'>
//                 <div className=' md:flex max-w[1480px] mx-10'>
//                     <img className='pl-9 h-[350px] w-[350px] rounded-xl' src={image} alt="" />
//                     <div className='pt-8'>
//                         <div className='md:pl-30 pl-12 '>
//                             <h3 className='md:text-4xl text-2xl font-bold'>{title}: {shortSummary}</h3>
//                             <p className='text-xl pt-4'><span className='text-gray-400 md:text-2xl text-lg'>Developed By: </span><span className='text-violet-500 font-bold'>{developedBy}</span></p>
//                             <div className='pt-6 text-gray-400'>
//                                 <hr />
//                             </div>
//                         </div>
//                         <div className='md:flex justify-between md:pl-30 pt-6 pl-12'>
//                             <div>
//                                 <FaDownload></FaDownload>
//                                 <small className='md:text-lg text-gray-400'>Downloads</small>
//                                 <h1 className='md:text-4xl text-2xl font-bold'>{downloads}</h1>
//                             </div>
//                             <div>
//                                 <FaStar></FaStar>
//                                 <small className='md:text-lg text-gray-400'>Average Ratings</small>
//                                 <h1 className='md:text-4xl text-2xl font-bold'>{ratingAvg}</h1>
//                             </div>
//                             <div>
//                                 <TbFileLike />
//                                 <small className='md:text-lg text-gray-400'>Total Reviews</small>
//                                 <h1 className='md:text-4xl text-2xl font-bold'>{reviews}</h1>
//                             </div>
//                         </div>
//                         <button className="ml-30 mt-6 btn btn-active btn-success text-white">Install Now ({size})</button>
//                     </div>
//                 </div>
//             </div>

//             <div className='h-[200px] max-w-[1280px] '>

//                 <div className='h-[400px] max-w-[1280px]  p-4'>
//                     <h3 className='text-lg font-bold mb-4 pl-25'>Ratings</h3>

//                     <ResponsiveContainer width="100%" height="100%">
//                         <BarChart
//                             data={processedRatings} 
//                             layout="vertical"
//                             margin={{ top: 20, right: 70, left: 20, bottom: 5 }}
//                         >
//                             <CartesianGrid strokeDasharray="3 3" />

//                             <YAxis
//                                 dataKey="name"
//                                 type="category"
//                                 tick={{ fontSize: 14 }}
//                                 width={80}
//                             />

//                             <XAxis
//                                 dataKey="count"
//                                 type="number"
//                                 hide={true} 
//                             />

//                             <Bar
//                                 dataKey="count"
//                                 fill="#ff9900"
//                                 name="Review Count"
//                                 barSize={30}
//                                 label={<CustomLabel />}  
//                             />
//                         </BarChart>
//                     </ResponsiveContainer>
//                 </div>

//             </div>


//             <div className='mt-70  md:h-[250px] max-w-[1280px] mx-10 '>
//                 <div>
//                     <p className='text-2xl font-bold'>
//                         Description
//                     </p>
//                     <p className=' text-gray-500 pt-4'>
//                         {description}
//                     </p>
//                 </div>
//             </div>


//         </>
//     );
// };

// export default AppsDetails;

import React, { useState } from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { TbFileLike } from "react-icons/tb";
import { useLoaderData, useParams } from 'react-router';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const AppsDetails = () => {
    const { id } = useParams();
    const appId = parseInt(id)

    const data = useLoaderData();
    const singleApp = data.find(app => app.id === appId);

    const { image, title, downloads, shortSummary, developedBy, size, ratingAvg, reviews, description, ratings } = singleApp;

    const APP_STORAGE_KEY = `app_installed_status_${appId}`;

    const [isInstalled, setIsInstalled] = useState(() => {
        const storedStatus = localStorage.getItem(APP_STORAGE_KEY);
        return storedStatus === 'installed'; 
    });

    const handleInstallClick = () => {
        if (!isInstalled) {
            setIsInstalled(true);
            localStorage.setItem(APP_STORAGE_KEY, 'installed');
        }
    };

    const buttonText = isInstalled 
        ? 'Installed' 
        : `Install Now (${size})`;

    const buttonClass = isInstalled 
        ? 'btn-disabled bg-gray-500 hover:bg-gray-500' 
        : 'btn-success'; 


    const parseMValue = (value) => {
        if (typeof value === 'string') {
            const num = parseFloat(value);
            if (value.toLowerCase().includes('m')) {
                return num * 1000000;
            }
            return num;
        }
        return value;
    };

    const processedRatings = ratings.map(item => ({
        ...item,
        count: parseMValue(item.count)
    }));

    const CustomLabel = (props) => {
        const { x, y, width, height, value } = props;

        const formattedValue = (value / 1000000).toFixed(1) + 'M';

        return (
            <text
                x={x + width}
                y={y + height / 2}
                dx={5} 
                dy={5}
                fill="#ff9900" 
                fontSize={12}
                fontWeight="bold"
                textAnchor="start"
            >
                {formattedValue}
            </text>
        );
    };

    return (
        <>
            <div className='my-10'>
                <div className=' md:flex max-w[1480px] mx-10'>
                    <img className='pl-9 h-[350px] w-[350px] rounded-xl' src={image} alt="" />
                    <div className='pt-8'>
                        <div className='md:pl-30 pl-12 '>
                            <h3 className='md:text-4xl text-2xl font-bold'>{title}: {shortSummary}</h3>
                            <p className='text-xl pt-4'><span className='text-gray-400 md:text-2xl text-lg'>Developed By: </span><span className='text-violet-500 font-bold'>{developedBy}</span></p>
                            <div className='pt-6 text-gray-400'>
                                <hr />
                            </div>
                        </div>
                        <div className='md:flex justify-between md:pl-30 pt-6 pl-12'>
                            <div>
                                <FaDownload></FaDownload>
                                <small className='md:text-lg text-gray-400'>Downloads</small>
                                <h1 className='md:text-4xl text-2xl font-bold'>{downloads}</h1>
                            </div>
                            <div>
                                <FaStar></FaStar>
                                <small className='md:text-lg text-gray-400'>Average Ratings</small>
                                <h1 className='md:text-4xl text-2xl font-bold'>{ratingAvg}</h1>
                            </div>
                            <div>
                                <TbFileLike />
                                <small className='md:text-lg text-gray-400'>Total Reviews</small>
                                <h1 className='md:text-4xl text-2xl font-bold'>{reviews}</h1>
                            </div>
                        </div>
                        
                        <button 
                            className={`ml-30 mt-6 btn text-white ${buttonClass}`}
                            onClick={handleInstallClick}
                            disabled={isInstalled} 
                        >
                            {buttonText}
                        </button>

                    </div>
                </div>
            </div>

            <div className='h-[200px] max-w-[1280px] '>

                <div className='h-[400px] max-w-[1280px] p-4'>
                    <h3 className='text-lg font-bold mb-4 pl-25'>Ratings</h3>

                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={processedRatings} 
                            layout="vertical"
                            margin={{ top: 20, right: 70, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />

                            <YAxis
                                dataKey="name"
                                type="category"
                                tick={{ fontSize: 14 }}
                                width={80}
                            />

                            <XAxis
                                dataKey="count"
                                type="number"
                                hide={true} 
                            />

                            <Bar
                                dataKey="count"
                                fill="#ff9900"
                                name="Review Count"
                                barSize={30}
                                label={<CustomLabel />} 
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

            </div>


            <div className='mt-70 md:h-[250px] max-w-[1280px] mx-10 '>
                <div>
                    <p className='text-2xl font-bold'>
                        Description
                    </p>
                    <p className=' text-gray-500 pt-4'>
                        {description}
                    </p>
                </div>
            </div>


        </>
    );
};

export default AppsDetails;


