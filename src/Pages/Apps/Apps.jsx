import React from 'react';
import App from '../App/App';

const Apps = ({appData}) => {

    // const {image, title,companyName,id,description,size,reviews,ratingAvg,downloads} = appData
    return (
        <div className='mb-20'>
            <div>
                <h1>Trending App</h1>
                <p>
                    Explore All Trending Apps On The Market Developed By Us
                </p>
                <div>
                    {
                        appData.map(app => <App key={app.id} app={app}></App>)
                    }
                </div>
                
            </div>
            <div>

            </div>
        </div>
    );
};

export default Apps;
