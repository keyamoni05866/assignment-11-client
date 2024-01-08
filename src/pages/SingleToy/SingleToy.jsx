import { Rating } from '@smastrom/react-rating';
import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import '@smastrom/react-rating/style.css'

const SingleToy = () => {
      const singleToy = useLoaderData();
      const {_id,description,productName,price,quantity,sellerName,photo,sellerEmail,rating} = singleToy;
  
      useEffect(()=>{
        document.title = " Toys Hub | Single Toy";
    },[])
    return (
        <div className="   py-36  bg-[#092635] text-white lg:px-[200px]">
        <div className=" lg:flex lg:flex-cols-1 gap-8">
      <div className='lg:w-3/4 ' data-aos="fade-right"
    data-aos-easing="linear"
    data-aos-duration="2000">
      <img src={photo} className=" h-64 w-full rounded-lg shadow-2xl" />
      </div>
          <div className=' w-3/4 ms-8' data-aos="fade-left"
    data-aos-easing="linear"
    data-aos-duration="2000">
            <h1 className="text-2xl mt-8 lg:mt-0 lg:text-4xl font-semibold italic  text-purple-500">Toy Name: {productName}</h1>
            <div className=' mt-5 '>
            <h1 className="text-2xl "><span className='font-semibold'>Seller Name:</span> {sellerName}</h1>
            <h1 className="text-2xl "><span className='font-semibold'>Seller Email:</span> {sellerEmail}</h1>
            
            </div>
          <div className='flex  lg:gap-20 mt-2 items-center  '>
          <p className='text-xl me-1 font-semibold  '>Price: {price}</p>
            <p className='text-xl font-semibold'>Available Quantity: {quantity}</p>
          </div>

            <p className="text-xl mt-2"><span className='font-semibold text-2xl'>Description:</span> {description}</p>
         <div className='rating'>
    <div className='flex text-xl  justify-center items-end lg:ms-64
    '>
    <span className='flex'>Rating: {rating}   
           <Rating value={rating} style={{ maxWidth: 100 }} readOnly >

           </Rating>
            </span>
    </div>
         </div>
          </div>
        </div>
      </div>
    );
};

export default SingleToy;