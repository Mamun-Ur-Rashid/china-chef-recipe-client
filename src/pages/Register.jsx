import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError ] = useState("");
    const [success, setSuccess] = useState("");
    

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo_url = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo_url, email, password);
       
    
        setSuccess("")
        setRegisterError('');
        if(password.length < 6 ){
            setError("The password is less then 6 characters!!")
        }
        

        createUser(email, password)
            .then(result => {
            const  loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                setSuccess("User Account Created Successfully!!");
                
            })
            .catch(error => {
                console.log(error);
            })
         
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-[650px] max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                            </div>
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
                            <p className='text-amber-400 text-2xl'>
                                {registerError}
                            </p>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent justify-center ">Register</button>
                            </div>
                            <p><small>Already have an Account? Please</small> <Link to='/login'><button className='link link-accent'>Login</button></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;