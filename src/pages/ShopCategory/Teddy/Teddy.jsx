import React, { useEffect, useState } from 'react';
import SingleTeddyCard from './SingleTeddyCard';

const Teddy = () => {
     const [teddys, setTeddys] = useState([])

     useEffect(() =>{
        fetch('http://localhost:5000/categories/teddy')
        .then(res => res.json())
        .then(data => setTeddys(data))
     },[])

    return (
        <div className='grid grid-cols-2 gap-8 w-3/4 mx-auto mt-8'>
            {
                teddys.map(teddy => <SingleTeddyCard key={teddy._id}
                    teddy={teddy}
                ></SingleTeddyCard> )
            }
        </div>
    );
};

export default Teddy;