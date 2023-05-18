import React from 'react';
import errorImg from '../../assets/2701983 (2).jpg'
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className=' ms-28'>
            <div className='w-1/2 h-1/2 mx-auto' >
                <img src={errorImg} alt="" className='h-96' />
               <div className='text-center me-32 mt-8'>
               <h2 className='text-4xl font-semibold '>Dear Toys Hub Viewer</h2>
                <h3 className='text-xl '>You are in the wrong page!!!!!</h3>
                <Link to="/" className="btn px-7 bg-purple-600 w-1/2 mt-6">Go Back to the home</Link>
               </div>
            </div>
        </div>
    );
};

export default Error;