import React from "react";

import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://img.freepik.com/premium-photo/cute-puppy-with-red-heart-balloons_6529-1778.jpg?size=626&ext=jpg&ga=GA1.1.1498671356.1683020323&semt=ais")`,
      }}
    >
      <div className="hero min-h-full py-6 rounded-none bg-opacity-60">
        <div>
          <div>
            <h1 className="text-center text-3xl font-semibold mt-2 mb-5 italic">
              Please Register
            </h1>
            <div className="card ms-3 me-3  max-w-sm shadow-2xl bg-base-100">
              <div className="card-body  ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <p className="text-sm">
                      Already Have an Account{" "}
                      <Link
                        to="/login"
                        className=" text-purple-600 font-semibold ps-1"
                      >
                        Please Login
                      </Link>
                    </p>
                  </label>
                </div>
                <div className="flex mt-6 gap-2">
                  <button className="btn px-7 bg-purple-600 w-1/2 ">
                    Sign Up
                  </button>
                  <button className="btn px-7 bg-purple-600 w-1/2 ">
                    Sign Up With Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
