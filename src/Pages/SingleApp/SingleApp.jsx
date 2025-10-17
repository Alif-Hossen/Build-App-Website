import React from 'react';
import UniqueApp from '../UniqueApp/UniqueApp';

const SingleApp = ({ totalAppsData }) => {
    return (
        <div>

            <div className='flex justify-between max-w-[1480px] mx-10 my-10'>
                <h1 className='text-xl font-bold'>(132) Apps Found </h1>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search Apps" />
                </label>
            </div>

            <div className='bg-[##627382] mx-10 grid md:grid-cols-4 md:gap-6  grid-cols-1 gap-3 m-4 max-w-[1480px] mb-14'>
                {
                    totalAppsData.map(app => <UniqueApp kwy={app.id} app={app}></UniqueApp>)
                }
            </div>
        </div>
    );
};

export default SingleApp;