import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Circles } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const { user ,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    }
    if(user){
        return children;
    }
    return <Navigate state={{from : location}} to='/login' replace></Navigate>
};

export default PrivateRouter;