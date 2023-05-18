import React, { useContext } from "react";
import loginImg from "../../assets/login.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
const Login = () => {
    const {logIn} = useContext(AuthContext);
       const  handleLogin = event =>{
           event.preventDefault();
           const form = event.target;
           const email = form.email.value;
           const password = form.password.value;
           logIn(email, password)
           .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
           })
           .catch(error => {
            console.error(error)
        })
       }
  return (
    <div className="">
        <h1 className="text-center text-3xl font-semibold mt-2 italic">Login Now</h1>
      <div className="hero min-h-full py-12 rounded-none">
        
        <div className=" ">
          <div className="flex h-full">
            <div className=" w-1/2 h-96   shadow-2xl">
              <img src={loginImg} alt="" className="h-96 " />
            </div>
            <div className="card rounded-none w-full    max-w-sm shadow-2xl bg-base-100">
              <div className="card-body ">
             <form onSubmit={handleLogin}>
             <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
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
                  <label className="label">
                 <p className="text-sm">Don't have an account <Link to="/register" className=" text-purple-600 font-semibold ps-1">Sign Up</Link></p>
                  </label>
                </div>
                <div className="flex mt-6 gap-2 ">
                
                  <input type="submit" value="Login" className="btn px-7 bg-purple-600 w-1/2"/>
                  <button className="btn px-7 bg-purple-600 w-1/2 ">Login With Google</button>
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

export default Login;
