import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Teddy from "./Teddy";
import Elephant from "../Elephant/Elephant";
import Unicorn from "../Unicorn/Unicorn";

const ShopCategory = () => {
  

   
  return (
  <div className="mt-9">
      <Tabs className="text-center   ">
    <TabList className="border-none text-purple-500 ">
    <Tab>Teddy Toys</Tab>
      <Tab>Elephant Toys</Tab>
      <Tab>Unicorn Toys</Tab>
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
