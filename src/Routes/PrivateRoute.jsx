import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import swal from 'sweetalert';

const PrivateRoute = ({children}) => {
    const{ user, loading} = useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return <div className='w-full bg-[#092635]  h-screen'>
            <span className="loading loading-spinner text-secondary"></span>
        </div>
    }
    if(user){
        return children;
    }
 
    return  <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivateRoute;