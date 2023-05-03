import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const PrivateRouter = ({children}) => {
    const { user} = useContext(AuthContext);
    if(user){
        return children;
    }
    return <navigate to='/login'></navigate>
    return (
        <div>
            
        </div>
    );
};

export default PrivateRouter;