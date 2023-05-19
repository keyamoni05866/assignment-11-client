import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Register = () => {
    const {createUser,SignUpOrLoginWithGoogle, userProfileUpdate} = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleRegister = event =>{
        event.preventDefault();
        const form= event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        if(password.length < 6){
          setError('Please Enter at least 6 character password')
        }
        // console.log(name, email, password, photo)
        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser)
            setError('')
            userProfileUpdate(createdUser, {
              displayName: name,
              photoURL: photo,
            })
            
            .then(() =>{})
            .catch(error => console.error(error))
            form.reset()
        })
    
        .catch(error => console.error(error))
    }
    const handleForGoogle =() =>{
      SignUpOrLoginWithGoogle()
      .then(result =>{
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error))
     }
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
               <form onSubmit={handleRegister}>
               <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                  required
                    type="email"
                    placeholder="email"
                    name="email"
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
                    name="photo"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                  />
                  <p className="text-sm  text-orange-500">{error}</p>
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
                  <button onClick={handleForGoogle} className="btn px-7 bg-purple-600 w-1/2 ">
                    Sign Up With Google 
                  </button>
                </div>
               </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
