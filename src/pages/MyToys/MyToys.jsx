import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import MyToy from './MyToy';

import { Link } from 'react-router-dom';


const MyToys = () => {
    const {user} = useContext(AuthContext);
  
    const [myToys, setMyToys] = useState([]);
    

    useEffect(() =>{
        fetch(`https://assignment-11-server-kohl.vercel.app/myToys?email=${(user?.email)}`)
        .then(res => res.json())
        .then(data => setMyToys(data))
    },[])

   


    const handleDelete = id =>{

        const proceed = confirm('Are You Sure to Delete')
        if(proceed){
         fetch(`https://assignment-11-server-kohl.vercel.app/myToys/${id}`, {
            method: 'DELETE'
         })
         .then(res => res.json())
         .then(data => {
            if(data.deletedCount > 0){
            
                const remaining = myToys.filter( myToy => myToy._id !== id)
                setMyToys(remaining);
              
            }
         })
        }
    }
    return (
 
      
      
<div className="overflow-x-auto bg-[#092635] pb-24  lg:px-[120px]  pt-5 " >


          {
            myToys.length !== 0 ? ( <h2 className='text-xl lg:text-3xl  mb-8 text-center text-purple-400 font-semibold italic '>---Your Added Toys---</h2>)
            : ( <>
               <h2 className=' text-xl lg:text-4xl my-[170px] mb-3 text-center   text-red-400 font-semibold italic normal-case '>NO Toys found </h2>
               <div className=' flex justify-center items-center mt-7'>
    
    <Link to="/addToy"  className='btn lg:px-5 btn-sm bg-purple-500 normal-case mx-auto'>Please Add</Link>
               </div>
         
            </>)
          } 
     

  <table className=" mx-auto font-dark ">

  
    <tbody >
    <div className="grid lg:grid-cols-2 gap-9 justify-center items-center">
    {
  
      myToys.map(myToy => <MyToy
        key={myToy._id}
        myToy={myToy}
        handleDelete={handleDelete}
      ></MyToy>)
     
    
     
     }
</div>
  
    </tbody>

    
  </table>
</div>
       
      
    );
};

export default MyToys;