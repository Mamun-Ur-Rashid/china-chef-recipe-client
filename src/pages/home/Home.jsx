import React, { useEffect, useState } from 'react';
import chefs from '../../assets/chefs.jpg'

const Home = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allData')
            .then(res => res.json())
            .then(data => setAllData(data))
            .catch(error => {
                console.log(error);
            })
            console.log(allData)
    }, []) 
    return (
        <div className='my-container'>
            <div className='flex md:flex-row gap-4 justify-center items-center'>
                <div>
                    <h1 className='text-5xl font-bold mb-4'>The Fastest <br /> Way to making <br /> of Foods </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nostrum rem, eligendi sapiente veniam, eos provident voluptatem non ea libero magni exercitationem omnis placeat magnam veritatis sed voluptas quos unde.</p>
                    <button className="btn btn-active btn-accent mt-4">Details Chef Info</button>
                </div>
                <div>
                    <img src={chefs} alt="" />
                </div>
            </div>
            <div className='grid md:grid-cols-3 gap-4 mt-12'>
                {
                    allData.map(data => <div key={data.id}>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={data.chefPicture} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Chef Name: {data.chefName}</h2>
                                <p>Experience: {data.yearsOfExperience} Years</p>
                                <p>Number of Recipes: {data.numberOfRecipes}</p>
                                <p>Rating: {data.rating}</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary w-full justify-center">View Recipes</button>
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