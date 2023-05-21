import React, { useEffect, useState } from 'react';
import UnicornCard from './UnicornCard';

const Unicorn = () => {
    const [unicorns, setUnicorns] = useState([])

    useEffect(() =>{
        fetch('https://assignment-11-server-kohl.vercel.app/categories/unicorn')
        .then(res => res.json())
        .then(data => setUnicorns(data))
     },[])
    return (
        <div className='lg:grid grid-cols-2 gap-8 lg:w-3/4 mx-auto mt-8'>
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