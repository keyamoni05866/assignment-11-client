import React from 'react';
import img4 from '../../../assets/slider4.avif'
const Banner = () => {
    return (
  
    <div className="hero min-h-fit space-y-12  py-12 bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={img4} className=" max-w-md rounded-lg shadow-2xl" />
    <div className=' me-12'>
      <h1 className="text-4xl font-bold">Welcome to "Toys Hub"</h1> 
      <p className='text-xl font-semibold mt-2'> Your ultimate destination for animal toys and fun!</p>
      <p className="py-2">Explore our vast selection of animal toys,  ranging from cuddly plush companions to  <br />
      interactive figures and  educational play sets. Our toys are carefully curated to provide a <br /> variety of options for every animal lover out there. </p>
      <button className="btn bg-purple-600 hover:bg-purple-900">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;