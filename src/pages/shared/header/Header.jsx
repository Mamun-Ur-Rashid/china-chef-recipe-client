import React from 'react';
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Header = () => {
    const {user, logOut} =useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error => console.log(error));
    }

    return (
        <div className='navbar relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4 bg-cyan-300 rounded-xl '>
            <nav className='flex justify-between items-center sm:px-3 h-[40px]'>
                <Link to='/'> <div className='md:mr-20 lg:mr-48'>
                    <h1 className='text-3xl font-bold'>Leo Ginyro Recipe</h1>
                </div></Link>
                <div className='md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[60%] md:w-auto px-5'>
                    <ul className='flex md:flex-row flex-col md:items-center gap-[4vw] text-xl'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                        <li><NavLink to='/register'>Register</NavLink></li>
                        {
                            user? <div className='tooltip tooltip-bottom inline-flex gap-4' data-tip={user?.displayName}> <img  className='h-12 w-12 rounded-full' src={user?.photoURL} alt="" /> <button onClick={handleLogOut}>Logout</button></div> :
                            <><FaUserCircle className='text-2xl'></FaUserCircle><li><NavLink to='/login'>Login</NavLink></li></>
                        }
                        
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;