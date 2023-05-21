import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const MyToy = ({myToy, handleDelete}) => {
    const {_id,description,productName,price,quantity,sellerName,photo,sellerEmail,rating} = myToy;

    useEffect(()=>{
      document.title = " Toys Hub | My Toys";
  },[])
   
    return (
        <tr>

        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo}  />
              </div>
            </div>
            <div>
              <div className="font-bold">Toy Name: {productName}</div>
              <div className="text-sm opacity-50">Seller Email: {sellerEmail}</div>
            </div>
          </div>
        </td>
        <td>
     price: {price}
        
        </td>
        <td>Available Quantity: {quantity}</td>
        <th>
         <Link to={`/updateToy/${_id}`}> <button className="btn bg-purple-500 btn-xs me-9">Update</button></Link>
          <button onClick={()=>handleDelete(_id)} className="btn bg-purple-500 btn-xs">Delete</button>
        </th>
      </tr>
    );
};

export default MyToy;








