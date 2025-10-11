import React from 'react';

const App = ({app}) => {
    const {title,companyName} = app;
    return (
        <div style={{border: '2px solid gray'}}>
            <h3>Title : {title}</h3>
            <h5>Company : {companyName}</h5>
            
        </div>
    );
};

export default App;