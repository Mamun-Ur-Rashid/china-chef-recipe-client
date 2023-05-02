import React from 'react';
import { Link } from 'react-router-dom';
import {FaGoogle, FaGithub} from 'react-icons/fa';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Login!</h1>
                </div>
                <div className="card flex-shrink-0 w-[650px] max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={""} className="card-body">
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

                        </p>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent justify-center ">Login</button>
                        </div>
                        <p><small>Have a Account? Please</small> <Link to='/register'><button className='link link-accent'>Register</button></Link></p>
                    </form>
                    <div className='flex gap-4 pb-4'>
                        <button className=" inline-flex items-center gap-2  border-2 border-cyan-400 rounded p-2 hover:bg-cyan-300 w-2/5 ml-7"><FaGoogle></FaGoogle>  Google Login</button>
                        <button className="inline-flex items-center gap-2 border-2 border-cyan-400 rounded p-2 hover:bg-cyan-300 w-2/5"><small><FaGithub></FaGithub></small> GitHub Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;