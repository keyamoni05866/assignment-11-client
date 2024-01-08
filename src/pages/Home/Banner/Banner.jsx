import React from 'react';
import img4 from '../../../assets/slider4.avif'
import { Player} from '@lottiefiles/react-lottie-player';
import Typewriter from "typewriter-effect";
const Banner = () => {
    return (
  
    
  <div className=" lg:flex justify-center items-center  mx-auto" data-aos="fade-up"
  data-aos-easing="linear"
  data-aos-duration="2000" >
  <div className=' ms-5 pt-8  lg:me-12 lg:ms-28' >
      <h2 className="text-2xl flex lg:text-4xl font-bold text-purple-500">Welcome to "Toys Hub"
       </h2> 
    
    
      <p className='text-sm flex lg:text-2xl font-semibold mt-2'> Your ultimate destination for <span className='ms-2'>
      <Typewriter
              options={{
                strings: ["animal toys and fun!!!"],
                autoStart: true,
                loop: true,
              }}
            />
        </span></p>
      <p className="py-2 text-justify">Explore our vast selection of animal toys,  ranging from cuddly plush companions to  <br />
      interactive figures and  educational play sets. Our toys are carefully curated to provide a <br /> variety of options for every animal lover out there. </p>
      <button className="btn bg-purple-600 hover:bg-purple-900">Get Started</button>
    </div>
<div  className='height-[500px] width-[500px]' >
<Player
  autoplay
  loop
  src="https://lottie.host/56c4b7d9-ee26-4a98-9cf1-583ed0e0ee0c/htMDh64OBb.json"
  
>
 
</Player>
</div>
    {/* <img src={img4} className=" lg:max-w-md rounded-lg shadow-2xl" /> */}
 
  </div>

    );
};

export default Banner;