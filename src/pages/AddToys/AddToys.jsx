import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import swal from "sweetalert";

const AddToys = () => {
  const { user } = useContext(AuthContext);
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
    fetch('http://localhost:5000/addToys', {
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
    })
  };

  return (
    <div className=" max-w-7xl  bg-base-200 rounded-lg pt-3 pb-7">
      <h2 className="text-2xl text-center mb-5  text-purple-500 font-semibold italic uppercase">
        Add A Toy Please
      </h2>
      <form
        onSubmit={handleAddToys}
        className="shadow-2xl bg-base-100  max-w-5xl   mx-auto px-9  py-4 rounded-lg"
      >
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-2 ">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Name</span>
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
              <span className="label-text">Photo URL</span>
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
            className="btn btn-block bg-purple-600"
            value="Add A Toy"
          />
        </div>
      </form>
    </div>
  );
};

export default AddToys;
