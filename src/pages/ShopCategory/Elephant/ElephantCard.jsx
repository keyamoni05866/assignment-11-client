import { Rating } from '@smastrom/react-rating';
import React from 'react';
import "@smastrom/react-rating/style.css";
import { Link } from 'react-router-dom';
const ElephantCard = ({elephant}) => {
    const {_id, productName, photo, price, rating } = elephant;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={photo} className=" w-full  h-44" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Toy Name: {productName}</h2>
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
      <Link to={`/allToys/${_id}`}>    <button className="btn btn-primary btn-block ">
              View Details
          </button></Link>
        </div>
      </div>
    );
};

export default ElephantCard;