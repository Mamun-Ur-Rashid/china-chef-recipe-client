import React, { useEffect, useState } from 'react';
import chefs from '../../assets/chefss.jpg'
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import { FaFacebookF } from 'react-icons/fa';
import pic1 from '../../assets/china-profile-robin-zhu.jpg';
import pic2 from '../../assets/china-profile-yidi-chen.jpg';
import pic3 from '../../assets/istockphoto-1149504274-170667a.jpg';

const Home = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('https://china-chef-recipe-house-server-mamun-ur-rashid.vercel.app/allData')
            .then(res => res.json())
            .then(data => setAllData(data))
            .catch(error => {
                console.log(error);
            })

    }, [])
    return (
        <div className='my-container bg-slate-100'>
            <div className='flex flex-col md:flex-row gap-8 justify-center items-center text-center'>
                <div>
                    <h1 className='text-5xl font-bold mb-4 '>The Fastest <br /> Way to making <br /> of Foods </h1>
                    <p>Preface your recipe with a short intro that shows readers your personal relationship to this dish. For example, write why it's important and what occasion it could be cooked/baked on. This is also a good section to state how many the recipe serves, the prep time, and the overall cook time</p>
                    <button className="btn  btn-primary mt-4">Details Chef Info</button>
                </div>
                <div>
                    <img className='' src={chefs} alt="" />
                </div>
            </div>
            <div className='grid md:grid-cols-3 gap-4 mt-12'>
                {
                    allData.map(data => <div key={data.id}>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <div>
                                <LazyLoad threshold={0.85}>
                                    <img className='image-2' src={data.chefPicture} />
                                </LazyLoad>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title">Chef Name: {data.chefName}</h2>
                                <p>Experience: {data.yearsOfExperience} Years</p>
                                <p>Number of Recipes: {data.numberOfRecipes}</p>
                                <p>Rating: {data.rating}</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary w-full justify-center"><Link to={`/chefRecipeDetails/${data.id}`}>View Recipes</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <section className='grid md:grid-cols-2 gap-4 mt-12 border-4 p-5 bg-cyan-200 rounded-2xl'>
                <div className=' border-r-4 text-center'>
                    <h4 className='text-center text-3xl font-bold text-cyan-800'>About Us</h4>
                    <p className='my-4 text-center px-6'><small>We welcome you to sit back, unwind and appreciate the lovely sights and hints of the ocean while our best gourmet expert sets you up for a scrumptious dinner utilizing the best and freshest ingredients.Our leo Ginyro Recipe House since in 2010.We shall must best service any times. </small></p>
                    <p>phone: ++009582711</p>
                    <p>email: leoginyrorecipehouse@gmail.com</p>
                    <p>Facebook: Leo Ginyro Recipe House</p>

                </div>
                <div>
                    <h4 className='text-center text-3xl font-bold text-gray-800'>Recipe Categories</h4>
                    <div className='grid md:grid-cols-2 m-5 p-4'>
                        <div>
                            <p><a className="link link-hover">Kung Pao Chicken</a></p>
                            <p><a className="link link-hover">Mapo Tofu</a></p>
                            <p><a className="link link-hover">Steamed Fish</a></p>
                            <p><a className="link link-hover">Shrimp Fried rice</a></p>
                            <p><a className="link link-hover">Sesame Balls</a></p>
                            <p><a className="link link-hover">Egg Tarts</a></p>
                            <p><a className="link link-hover">Mooncakes</a></p>
                            <p><a className="link link-hover">Read Bean Pudding</a></p>

                        </div>
                        <div>
                            <p><a className="link link-hover">Dan Dan Noodles</a></p>
                            <p><a className="link link-hover">Kung Pao chicken</a></p>
                            <p><a className="link link-hover">Twice Cooked pork</a></p>
                            <p><a className="link link-hover">Moo Shu Pork</a></p>
                            <p><a className="link link-hover">Str-Fried Bok choy</a></p>
                            <p><a className="link link-hover">Cantonese-Style roast duck</a></p>
                            <p><a className="link link-hover">Hot and Sour Soup</a></p>
                            <p><a className="link link-hover">Crispy Orange Beef</a></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='grid md:grid-cols-3 mt-12 gap-3'>
                <div className='shadow-lg border-2 rounded-2xl'>
                    <div className='flex justify-center items-center gap-3 mt-3'>
                        <img className='h-24 w-24 border rounded-full ' src={pic1} alt="" />
                        <div>
                            <p className='font-bold text-3xl'>Cheng Wei</p>
                            <p>7 Days ago</p>
                        </div>
                    </div>
                    <p className='mt-4 p-4 '>Our mission is to capture the character of our community, boiling down its stocks, foraging its plants, and showcasing its produce; all in an attempt to capture a time and a space in the confines of a plate, but more often in a series of plates. Absolute guest satisfaction. </p>
                </div>
                <div className='shadow-lg border-2 rounded-2xl'>
                    <div className='flex justify-center items-center gap-3 mt-3'>
                        <img className='h-24 w-24 border rounded-full ' src={pic2} alt="" />
                        <div>
                            <p className='font-bold text-3xl'>Sakian Meri</p>
                            <p>1 Days ago</p>
                        </div>
                    </div>
                    <p className='mt-4 p-4 '>We believe the choices we make about what we eat, where it comes from and how it’s prepared have a direct and powerful impact on the health of individuals, communities and the environment. From sprout to plate, we obsess over the details to bring better eating to everyone. </p>
                </div>
                <div className='shadow-lg border-2 rounded-2xl'>
                    <div className='flex justify-center items-center gap-3 mt-3'>
                        <img className='h-24 w-24 border rounded-full ' src={pic3} alt="" />
                        <div>
                            <p className='font-bold text-3xl'>Princes Yeng</p>
                            <p>3 Days ago</p>
                        </div>
                    </div>
                    <p className='mt-4 p-4 '>Our mission is to better the lives and futures of our people. We use ridiculously delicious food to do it, making (restaurant) a better place for both our customers and ourselves. We want to share our family’s authentic recipes with the world. </p>
                </div>
            </section>
        </div>
    );
};

export default Home;