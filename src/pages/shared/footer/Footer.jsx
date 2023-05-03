import React from 'react';

const Footer = () => {
    return (
        <div className='my-container'>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">All Food all time available</a>
                    <a className="link link-hover">Best chef all time present</a>
                    <a className="link link-hover">Home delivery</a>
                    <a className="link link-hover">Setting best places</a>
                </div>
                <div>
                    <span className="footer-title">Quick Links</span>
                    <a className="link link-hover">Latest New</a>
                    <a className="link link-hover">Recipes</a>
                    <a className="link link-hover">Our Products</a>
                    <a className="link link-hover">Our Authors</a>
                    <a className="link link-hover">Recipe Details</a>
                </div>
                <div>
                    <span className="footer-title">Leo Ginyro Recipe House</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                   </div> 
            </footer>
        </div>
    );
};

export default Footer;