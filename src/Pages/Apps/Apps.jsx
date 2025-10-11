import React from 'react';
import App from '../App/App';

const Apps = ({ appData }) => {

    return (
        <div className='mb-20'>
            <div>
                <div className='text-center'>
                    <h1 className='text-7xl font-semibold'>Trending App</h1>
                    <p className='text-gray-500 pt-5 pb-10 text-xl'>
                        Explore All Trending Apps On The Market Developed By Us
                    </p>
                </div>
                <div className=' mx-auto grid md:grid-cols-4 md:gap-6  grid-cols-1 gap-3'>
                    {
                        appData.map(app => <App key={app.id} app={app}></App>)
                    }
                </div>
                <div className=''>
                    <a
                        href="http://localhost:5173/allApps"
                        className="md:ml-[45%] ml-[35%] px-12 py-1 mt-4 bg-gradient-to-r from-[#6530E4] to-[#a570f1] rounded-lg text-white inline-block text-center"
                    >
                        Show All
                    </a>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Apps;
