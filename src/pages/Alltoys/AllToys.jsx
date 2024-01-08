import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Toys from "./Toys";

const AllToys = () => {
  const toys = useLoaderData();
  console.log(toys);
  useEffect(()=>{
    document.title = " Toys Hub | All Toys";
},[])

  return (
    <div className="overflow-x-auto w-full bg-[#092635] pb-24" >
      <h2 className="text-purple-500 text-center font-medium text-2xl py-3 italic">---All Toys---</h2>
      <table className="mx-auto font-dark ">
     
        <tbody>
        <div className="grid lg:grid-cols-2 gap-9 justify-center items-center mb-8 mt-3">
            {toys.map((toy) => (
              <Toys key={toy._id} toy={toy}></Toys>
            ))}
      </div>
        </tbody>
        
      </table>
    </div>
  );
};

export default AllToys;
