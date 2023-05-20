import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const ShopCategory = () => {
    const [toys, setToys] = useState([])

    useEffect(() =>{
        fetch('toyData.json')
        .then(res => res.json())
        .then(data =>setToys(data) )
    },[])
   
  return (
  <div className="mt-9">
      <Tabs className="text-center   ">
    <TabList className="border-none text-purple-500 ">
    <Tab>Elephant Toys</Tab>
      <Tab>Lion Toys</Tab>
      <Tab>Monkey Toys</Tab>
    </TabList>

    <TabPanel>
        {
            toys.forEach(toy => <p>{toy.name}</p>)
        }
     </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
  </div>
  );
};

export default ShopCategory;
