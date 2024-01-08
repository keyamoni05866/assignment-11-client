import React, { useEffect, useState } from 'react';
import ElephantCard from './ElephantCard';

const Elephant = () => {
    const [elephants, setElephants] = useState([])

    useEffect(() =>{
       fetch('https://assignment-11-server-kohl.vercel.app/categories/elephant')
       .then(res => res.json())
       .then(data => setElephants(data))
    },[])
    return (
        <div className='lg:grid grid-cols-2 gap-8 lg:w-3/4 mx-auto mt-8' >
            {
                elephants.map(elephant => <ElephantCard key={ elephant._id} 
                   elephant={elephant}
                ></ElephantCard> )
            }
        </div>
    );
};

export default Elephant;