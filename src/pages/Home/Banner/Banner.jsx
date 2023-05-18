import React from 'react';
import img4 from '../../../assets/slider4.avif'
const Banner = () => {
    return (
  
    <div className="hero min-h-fit space-y-12  py-12 bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={img4} className=" max-w-md rounded-lg shadow-2xl" />
    <div className='ms-8'>
      <h1 className="text-4xl font-bold">Welcome to "Toys Hub" your ultimate destination for animal toys and fun!</h1>
      <p className="py-6">Explore our vast selection of animal toys, ranging from cuddly plush companions to interactive figures and educational play sets. Our toys are carefully curated to provide a variety of options for every animal lover out there. From farm animals to exotic creatures, we have something for everyone. Each toy is designed with attention to detail, ensuring a lifelike and engaging play experience.</p>
      <button className="btn bg-purple-600 hover:bg-purple-900">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;