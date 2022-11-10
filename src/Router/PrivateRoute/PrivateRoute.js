import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className='justify-center pl-28 justify-items-center w-1/4 mx-auto mt-10 mb-10'>
            <button className="btn loading">loading</button>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;