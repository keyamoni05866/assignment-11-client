import React, { useEffect, useState } from 'react';
import UnicornCard from './UnicornCard';

const Unicorn = () => {
    const [unicorns, setUnicorns] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/categories/unicorn')
        .then(res => res.json())
        .then(data => setUnicorns(data))
     },[])
    return (
        <div className='grid grid-cols-2 gap-8 w-3/4 mx-auto mt-8'>
            {
                 unicorns.map(unicorn => <UnicornCard
                  key={unicorn._id}
                  unicorn={unicorn}
                 ></UnicornCard>)
            }
        </div>
    );
};

export default Unicorn;