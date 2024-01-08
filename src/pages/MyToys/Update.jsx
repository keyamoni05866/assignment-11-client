import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import image from '../../assets/slider4.avif'


const Update = () => {
  const {user} = useContext(AuthContext);
  const toy = useLoaderData();
  const {
    _id,
    description,
    productName,
    price,
    quantity,
    sellerName,
    photo,
    sellerEmail,
    rating,
    category,
  } = toy;
  // console.log(toy)

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const sellerName = user?.displayName;
    const sellerEmail = user?.email;
    const photo = form.photo.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const UpdateToys = {
     
      productName: name,
      sellerName,
      sellerEmail,
      photo,
      category,
      price,
      rating,
      quantity,
      description,
    };

   
    fetch(`https://assignment-11-server-kohl.vercel.app/myToys/${_id}`, {
      method: 'PUT',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(UpdateToys)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.modifiedCount > 0){
        swal({
          title: "Update",
          text: "Your Toy Updated!",
          icon: "success",
          button: "Ok",
        });
      }
    
    })
  };
  return (
    <div className=" bg-[#092635] mx-auto  pt-3 pb-8">
    <h2 className="text-2xl text-center   text-purple-500 font-semibold italic " data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="2000">
      ---Update Toy Detail Please---
    </h2>
<div className="  w-full lg:flex py-14 lg:px-[230px]">




<div className="shadow-xl lg:mx-auto  lg:ms-10  lg:w-1/2 mx-2 " data-aos="fade-left"
    data-aos-easing="linear"
    data-aos-duration="2000">
<form onSubmit={handleUpdateToy} className=" bg-base-100   mx-auto px-9  py-4 rounded-lg">
<div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-2 ">
  <div className="form-control ">
    <label className="label">
      <span className="label-text">Toy Name</span>
    </label>
    <input
      type="text"
      placeholder="name"
      defaultValue={productName}
      name="name"
      className="input input-bordered"
    />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Seller Name</span>
    </label>
    <input
      type="text"
      placeholder="seller name"
      name="sellerName"
      defaultValue={sellerName}
      className="input input-bordered"
    />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Seller Email</span>
    </label>
    <input
      type="text"
      placeholder="seller email"
      name="seller email"
      defaultValue={sellerEmail}
      className="input input-bordered"
    />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Photo URL</span>
    </label>
    <input
      type="text"
      placeholder="photo URL"
      name="photo"
      defaultValue={photo}
      className="input input-bordered"
    />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Sub-Category</span>
    </label>
    <select
      className="select select-bordered"
      defaultValue={category}
      name="category"
    >
      <option>Elephant Toys</option>
      <option>Teddy Toys</option>
      <option>Unicorn Toys</option>
    </select>
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Price</span>
    </label>
    <input
      type="text"
      placeholder="price"
      name="price"
      defaultValue={price}
      className="input input-bordered"
    />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Rating</span>
    </label>
    <input
      type="text"
      placeholder="rating"
      name="rating"
      defaultValue={rating}
      className="input input-bordered"
    />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Available Quantity</span>
    </label>
    <input
      type="text"
      placeholder="available quantity"
      name="quantity"
      defaultValue={quantity}
      className="input input-bordered"
    />
  </div>
</div>
<div className="form-control ">
  <label className="label">
    <span className="label-text">Detail Description </span>
  </label>
  <textarea
    className="textarea textarea-bordered h-28 w-full"
    placeholder="Description"
    name="description"
    defaultValue={description}
  ></textarea>
</div>
<div className="form-control mt-6">
  <input
    type="submit"
    className="btn btn-block bg-purple-600"
    value="Update Toy"
  />
</div>
</form>
</div>
<div className="shadow-2xl lg:w-1/2 mx-2 lg:mx-0" data-aos="fade-right"
    data-aos-easing="linear"
    data-aos-duration="2000">
<img src={image} alt=""  className="h-[612px] rounded-sm shadow-2xl"/>
</div>
</div>
  </div>
  );
};

export default Update;

