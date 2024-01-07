import React, { useContext } from 'react';
import logo from '../../../assets/logo3.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
const Navbar = () => {

  const {user,logOut} = useContext(AuthContext);

  const handleLogOut =() =>{
    logOut()
    .then(() =>{})
    .catch(error => console.error(error))
  }
    return (
        <div className="navbar bg-[#092635] text-white lg:px-[90px]">
  <div className="navbar-start">
    <div className="dropdown text-black">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allToys"> All Toys</Link></li>
      

       
             <li><Link to="/myToy">My Toys</Link></li>
        <li><Link to="/addToy">Add A Toy</Link></li>
       
        
        {/* <li><Link to="/blog">Blogs</Link></li> */}
 
      </ul>
    </div>

 <div className=' hidden lg:flex'>
  <img src={logo} alt="" className='w-8 bg-purple-50 rounded-2xl ' />
  <h5 className='text-xl  mt-1 ms-2  font-semibold italic'>Toys Hub</h5>
 </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    

    <ul className="menu menu-horizontal px-1 text-md font-semibold">
    <li><Link to="/">Home</Link></li>
        <li><Link to="/allToys"> All Toys</Link></li>
     
        <li><Link to="/addToy">Add Toy</Link></li>
             <li><Link to="/myToy">My Toys</Link></li>
     
        {/* <li><Link to="/blog">Blogs</Link></li> */}
       
    </ul>
  </div>
  <div className="navbar-end ">
    {
      user && (
 
          <img src={user?.photoURL
        }
        data-toggle="tooltip"
        title={user?.displayName}
        className=' w-12 h-12 mr-4 rounded-full '
       />

      )
    }
   {
    user ? (
      <button onClick={handleLogOut}  className="btn btn-sm px-5  normal-case bg-purple-600" >Log Out</button>
   
    ):
    (   <Link to="/login" className="btn btn-sm px-5  normal-case bg-purple-600" >Login</Link>)
   }
  </div>
</div>
    );
};

export default Navbar;