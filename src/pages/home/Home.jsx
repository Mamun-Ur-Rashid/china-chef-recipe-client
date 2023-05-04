import React, { useEffect, useState } from 'react';
import chefs from '../../assets/chefss.jpg'
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const Home = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allData')
            .then(res => res.json())
            .then(data => setAllData(data))
            .catch(error => {
                console.log(error);
            })

    }, [])
    return (
        <div className='my-container bg-slate-100'>
            <div className='flex flex-col md:flex-row gap-8 justify-center items-center'>
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
                                <LazyLoad   threshold={0.85}>
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
        </div>
    );
};

export default Home;