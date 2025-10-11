import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";



const App = ({ app }) => {
    const { title, description, downloads, ratingAvg, image } = app;
    return (
        <>
            <div  >
                <div className='h-[440px] m-2  shadow-[3px_3px_gray] 
                                hover:shadow-[5px_5px_#4ade80] rounded  transition-all duration-300 
                                hover:scale-[1.02]'
                >
                    <img className=' w-[300px] h-[300px] rounded-2xl items-center md:ml-4 ml-10 pt-2' src={image} alt="" />

                    <h3 className='p-4'>{title}: {description}</h3>
                    <div className='flex justify-between px-8'>
                        <p className='flex text-green-300 items-center  bg-gray-600 px-2 rounded-lg'><MdOutlineFileDownload />
                            {downloads}
                        </p>
                        <p className='flex items-center text-orange-400  bg-[#E7CDB2] px-2 rounded-lg'>
                            <FaStar />
                            {ratingAvg}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;