import React from 'react';

const Toys = ({toy}) => {
    const {_id,category,productName,price,quantity,sellerName,photo} = toy;
    return (
        <div className=''>
                 
                  <tr className=' max-w-11/12  bg-base-100 shadow-xl'>
           
           <td >
             <div className="flex items-center  rounded-lg p-8 ">
         
               <div >
                <img src={photo} alt="" className='rounded-lg h-32 w-44'/>
               </div>
               <div className='ms-9'>
                <h2 className='text-lg font-semibold'>Seller Name: <span className=' font-normal'>{sellerName}</span></h2>
                <h2 className='text-lg font-semibold'>Toy Name: <span className=' font-normal'>{productName}</span></h2>
                <p className='font-semibold text-lg'>Price: <span className='font-normal'>{price}</span></p>
           <p className='font-semibold text-lg'> Available Quantity: <span className='font-normal'>{quantity}</span></p>
           <p className='font-semibold text-lg'>Sub-Category: <span className='font-normal'>{category}</span></p>
       
               </div>
            
             </div>
             <button className="px-3 py-2 rounded text-white ms-96 mr-3 mb-3 bg-purple-500  "> View Details</button>
           </td>
       

          
       
         </tr>
        </div>
    );
};

export default Toys;