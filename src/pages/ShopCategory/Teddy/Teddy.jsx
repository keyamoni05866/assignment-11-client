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
        <div className='lg:grid grid-cols-2 gap-8 lg:w-3/4 mx-auto mt-8'>
            {
                teddys.map(teddy => <SingleTeddyCard key={teddy._id}
                    teddy={teddy}
                ></SingleTeddyCard> )
            }
        </div>
    );
};

export default Teddy;