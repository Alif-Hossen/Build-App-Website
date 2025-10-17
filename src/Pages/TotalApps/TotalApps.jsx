import React from 'react';
import SingleApp from '../SingleApp/SingleApp';
import { useLoaderData } from 'react-router';

const TotalApps = () => {
    const totalAppsData = useLoaderData();
    console.log(totalAppsData);
    return (
        <div>
            <SingleApp totalAppsData={totalAppsData}></SingleApp>
        </div>
    );
};

export default TotalApps;