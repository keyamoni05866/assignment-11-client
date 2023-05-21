import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import MyToy from './MyToy';
import Swal from 'sweetalert2';

const MyToys = () => {
    const {user} = useContext(AuthContext);
    // console.log(user?.email)
    // console.log(email)
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
      <div className='mb-9 mt-9'>
          <div className=' rounded-lg'>
            <h2 className='text-2xl  mb-3 text-center text-purple-500 font-semibold italic uppercase underline'>Your Toys</h2>
     

<div className="overflow-x-auto w-full ms-11">
  <table className=" table w-full ">

  
    <tbody className=''>
  
 {
    myToys.map(myToy => <MyToy
      key={myToy._id}
      myToy={myToy}
      handleDelete={handleDelete}
    ></MyToy>)
 }
  

  
    </tbody>

    
  </table>
</div>
        </div>
      </div>
    );
};

export default MyToys;