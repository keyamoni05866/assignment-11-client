import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const MyToy = ({myToy, handleDelete}) => {
    const {_id,description,productName,price,quantity,sellerName,photo,sellerEmail,rating} = myToy;

    useEffect(()=>{
      document.title = " Toys Hub | My Toys";
  },[])
   
    return (

   
        
      <tr className='lg:max-w-11/13   bg-base-100 shadow-xl  rounded-lg' data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="2000">
           
      <td >
        <div className="flex items-center  rounded-lg lg:p-8 ">
    
          <div >
           <img src={photo} alt="" className='rounded-lg   h-32 w-44'/>
          </div>
          <div className='ms-9'>
           <h2 className=' text-lg font-semibold'>Seller Email: <span className=' font-normal'>{sellerEmail}</span></h2>
           <h2 className=' text-lg font-semibold'>Seller Name: <span className=' font-normal'>{sellerName}</span></h2>
           <h2 className='text-lg font-semibold'>Toy Name: <span className=' font-normal'>{productName}</span></h2>
           <p className='font-semibold text-lg'>Price: <span className='font-normal'>{price}</span></p>
      <p className='font-semibold text-lg'> Available Quantity: <span className='font-normal'>{quantity}</span></p>
     
  
          </div>
       
        </div>
    <div className=' lg:flex lg:justify-end'>
    <Link to={`/updateToy/${_id}`}> <button className="px-3 py-2 rounded text-white mr-3 mb-3 bg-purple-500  ">Update</button></Link>
          <button onClick={()=>handleDelete(_id)} className="px-3 py-2 rounded text-white  mr-3 mb-3 bg-purple-500  ">Delete</button>
      <Link to={`/allToys/${_id}`}>  <button className="px-3 py-2 rounded text-white  mr-3 mb-3 bg-purple-500  "> View Details</button></Link>
    </div>
      </td>
  

     
  
    </tr>
    );
};

export default MyToy;








