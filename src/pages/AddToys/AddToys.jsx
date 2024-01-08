import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import swal from "sweetalert";
import image from '../../assets/slider4.avif'

const AddToys = () => {
  const { user } = useContext(AuthContext);

  useEffect(()=>{
    document.title = " Toys Hub | Add Toy";
},[])
  const handleAddToys = (event) => {
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
    const toys = {
     
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

    console.log(toys);
    fetch('https://assignment-11-server-kohl.vercel.app/addToys', {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(toys)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        swal({
          title: "Thanks for Adding Toy",
          text: "Your product added Successfully!",
          icon: "success",
          button: "Ok",
        });
      }
      form.reset()
    })
  };

  return (
    <div className=" bg-[#092635] mx-auto  pt-3 pb-8">
      <h2 className="text-2xl text-center   text-purple-500 font-semibold italic "  data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="2000">
        ---Fill Toy Detail Please---
      </h2>
<div className="  w-full lg:flex py-14 lg:px-[230px]">
  



  <div className="shadow-xl lg:mx-auto  lg:ms-10  lg:w-1/2 mx-2 "  data-aos="fade-left"
    data-aos-easing="linear"
    data-aos-duration="2000">
  <form
        onSubmit={handleAddToys}
        className="shadow-2xl bg-base-100 rounded-sm  mx-auto px-9  py-4 "
      >
        <div className="grid  w-full grid-cols-2 lg:grid-cols-2 gap-2 ">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
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
              defaultValue={user?.displayName}
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
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="photo URL"
              name="photo"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub-Category</span>
            </label>
            <select className="select select-bordered" name="category">
              <option disabled selected>
                Select Category
              </option>
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
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            className="btn btn-md px-12 ms-1  normal-case  bg-purple-600"
            value="Add A Toy"
          />
        </div>
      </form>
  </div>
  <div className="shadow-2xl lg:w-1/2 mx-2 lg:mx-0"  data-aos="fade-right"
    data-aos-easing="linear"
    data-aos-duration="2000">
  <img src={image} alt=""  className="h-[612px] rounded-sm shadow-2xl"/>
</div>
</div>
    </div>
  );
};

export default AddToys;
