import React, { useContext, useEffect, useState } from "react";
import loginImg from "../../assets/login.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
const Login = () => {
    const {logIn, SignUpOrLoginWithGoogle} = useContext(AuthContext);
    const [error , setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useEffect(()=>{
      document.title = " Toys Hub | Login";
  },[])
       const  handleLogin = event =>{
           event.preventDefault();
           const form = event.target;
           const email = form.email.value;
           const password = form.password.value;
           logIn(email, password)
           .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            setError('')
            navigate(from, {replace: true})
           })
           .catch(error => {
            console.error(error)
            setError('Please Enter correct email or password')
        })
       }

       const handleForGoogleLogin =() =>{
         SignUpOrLoginWithGoogle()
         .then(result =>{
          const googleUser = result.user;
          console.log(googleUser);
          setError('')
          navigate(from, {replace: true})
         })
         .catch(error =>{
          console.error(error);
    
         } )
       }
  return (
    <div className="bg-[#092635] text-white pb-16">
        <h2 className="text-center text-2xl font-semibold pt-8 italic text-lime-100" data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="2000">---Login Now--</h2>
      <div className="hero min-h-full py-12 rounded-none">
        
        <div data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="2000">
          <div className="lg:flex h-full mx-5 lg:mx-0">
            <div className=" lg:w-1/2 h-96     shadow-2xl">
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
                  <p className="text-sm text-orange-400">{error}</p>
                  <label className="label">
                 <p className="text-sm text-black">Don't have an account ? <Link to="/register" className=" text-purple-600 font-semibold ps-1">Sign Up</Link></p>
                  </label>
                </div>
                <div className="flex mt-6 gap-2 ">
                
                  <input type="submit" value="Login" className="btn px-7 bg-purple-600 w-1/2"/>
                  <button onClick={handleForGoogleLogin} className="btn px-7 bg-purple-600 w-1/2 ">Login With Google</button>
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
