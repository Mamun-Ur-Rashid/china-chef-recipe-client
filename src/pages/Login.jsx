import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {FaGoogle, FaGithub} from 'react-icons/fa';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
    const {signInUser,signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate('')
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setError('');
        setSuccess('');

        signInUser(email, password)
        .then(result => {
            const loginUser = result.user;
            console.log(loginUser);
            setSuccess("User Successfully login!!");
            navigate('/');
            form.reset();
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message);
        })
    }
    const handleSignInGoogle = () =>{
        signInWithGoogle()
        .then(result => {
            const signInUser = result.user;
            console.log(signInUser);
        })
        .catch(error => {
            setError(error.message);
        })
    }
   const handleSignInGithub = () => {
    signInWithGithub()
    .then(result => {
        const signUser = result.user;
        console.log(signUser);
    })
    .catch(error => {
        setError(error.message);
    })
   }
    return (
        <div className="hero min-h-screen  my-container">
            <div className="hero-content flex-col lg:flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Login!</h1>
                </div>
                <div className="card flex-shrink-0 w-[650px] max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <p className='text-success text-2xl'>
                            {success}
                        </p>
                        <p className='text-amber-700 text-2xl'>
                            {error}
                        </p>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent justify-center ">Login</button>
                        </div>
                        <p><small>Have an Account? Please</small> <Link to='/register'><button className='link link-accent'>Register</button></Link></p>
                    </form>
                    <div className='flex gap-4 pb-4'>
                        <button onClick={handleSignInGoogle} className=" inline-flex items-center gap-2  border-2 border-cyan-400 rounded p-2 hover:bg-cyan-300 w-2/5 ml-7"><FaGoogle></FaGoogle>  Google Login</button>
                        <button onClick={handleSignInGithub} className="inline-flex items-center gap-2 border-2 border-cyan-400 rounded p-2 hover:bg-cyan-300 w-2/5"><small><FaGithub></FaGithub></small> GitHub Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;