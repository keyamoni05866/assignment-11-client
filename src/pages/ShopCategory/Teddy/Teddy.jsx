import React, { useEffect, useState } from 'react';
import SingleTeddyCard from './SingleTeddyCard';

const Teddy = () => {
     const [teddys, setTeddys] = useState([])

     useEffect(() =>{
        fetch('https://assignment-11-server-kohl.vercel.app/categories/teddy')
        .then(res => res.json())
        .then(data => setTeddys(data))
     },[])

    return (
        <div className='lg:grid grid-cols-3 gap-10 mx-auto mt-3 mb-10 '>
            {
                teddys.map(teddy => <SingleTeddyCard  key={teddy._id}
                    teddy={teddy}
                ></SingleTeddyCard> )
            }
        </div>
    );
};

export default Teddy;