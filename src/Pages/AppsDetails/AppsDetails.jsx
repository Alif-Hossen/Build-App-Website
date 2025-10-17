import React from 'react';
import { useParams } from 'react-router';

const AppsDetails = () => {
    const id = useParams();
    console.log(id)
    return (
        <div className='my-10'>
            <h2>kaj kore naki check kori</h2>
        </div>
    );
};

export default AppsDetails;