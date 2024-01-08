import React from "react";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
const SingleTeddyCard = ({ teddy }) => {

  const {_id, productName, photo, price, rating } = teddy;
  return (
    <div className="card card-compact w-96 bg-base-100 text-black shadow-xl mt-5"  data-aos="fade-right"
    data-aos-easing="linear"
    data-aos-duration="2000" >
      <figure>
        <img src={photo} className=" w-full  h-44" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title ">Toy Name: {productName}</h2>
        <div className="flex space-x-24 justify-center items-center">
          <p className="text-lg">price: {price}</p>

          <div className="rating">
            <span className="flex">
              Rating: {rating}
              <Rating
                value={rating}
                style={{ maxWidth: 100 }}
                readOnly
              ></Rating>
            </span>
          </div>
        </div>
      </div>
      <div className="card-actions justify-end p-3">
    <Link to={`/allToys/${_id}`}>    <button className="btn bg-purple-600 btn-block  normal-case">
            View Details
        </button></Link>
      </div>
    </div>
  );
};

export default SingleTeddyCard;
