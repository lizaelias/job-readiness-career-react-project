

import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mt-60'>
            <h1>opps!</h1>
             <button className='btn'> <Link to="/"> Back to Home</Link> </button>
        </div>
    );
};

export default ErrorPage;