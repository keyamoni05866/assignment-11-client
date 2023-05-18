import React from 'react';
import logo from '../../../assets/logo3.png'
const Navbar = () => {
    return (
        <div className="navbar   ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>All Toys</a></li>
        <li><a>My Toys</a></li>
        <li><a>Add A Toy</a></li>
        <li><a>Blogs</a></li>
      </ul>
    </div>

 <div className=' hidden lg:flex'>
  <img src={logo} alt="" className='w-10' />
  <h5 className='text-2xl mt-2 ms-2  font-semibold italic'>Toys Hub</h5>
 </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    

    <ul className="menu menu-horizontal px-1 text-lg font-semibold">
    <li><a>Home</a></li>
        <li><a>All Toys</a></li>
        <li><a>My Toys</a></li>
        <li><a>Add A Toy</a></li>
        <li><a>Blogs</a></li>
    </ul>
  </div>
  <div className="navbar-end ">
    <a className="btn px-7 bg-purple-600">Login</a>
  </div>
</div>
    );
};

export default Navbar;