import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Teddy from "./Teddy";
import Elephant from "../Elephant/Elephant";
import Unicorn from "../Unicorn/Unicorn";

const ShopCategory = () => {
  

   
  return (
  <div className="mt-32 max-w-7xl mx-auto text-black">
    <h2 className="text-center text-xl text-lime-100 mb-8">------Category Wise Toys-----</h2>
      <Tabs className="text-center">
      
    <TabList className="border-none text-purple-500  ">
   
    <Tab className="btn  bg-purple-600 normal-case me-6">Teddy Toys</Tab>
      <Tab className="btn  bg-purple-600 normal-case me-6">Elephant Toys</Tab>
      <Tab className="btn  bg-purple-600 normal-case me-6">Unicorn Toys</Tab>
    </TabList>
    
    <TabPanel>
     <Teddy></Teddy>
     </TabPanel>
    <TabPanel>
      <Elephant></Elephant>
    </TabPanel>
    <TabPanel>
    <Unicorn></Unicorn>
    </TabPanel>
  </Tabs>
  </div>
  );
};

export default ShopCategory;
