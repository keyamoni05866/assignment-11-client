import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Toys from './Toys';

const AllToys = () => {
    const toys = useLoaderData()
    console.log(toys)
    
    return (
        <div className="overflow-x-auto w-full">
        <table className="mx-auto ">
    
          <tbody>
            <div className='grid grid-cols-2 gap-9 justify-center items-center mb-8 mt-3'>
                {
                    toys.map(toy =><Toys
                     key={toy._id}
                     toy= {toy}
                    ></Toys> )
                }
            </div>

      
         
       
        
        
          </tbody>
      
          
        </table>
      </div>
    );
};

export default AllToys;