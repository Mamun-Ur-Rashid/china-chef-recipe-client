import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefRecipeDetails = () => {
    const [disabled, setDisabled] = useState(true);
    const chefRecipe = useLoaderData();
    const { chefPicture, chefName, chefDescription, numberOfRecipes, rating, yearsOfExperience } = chefRecipe;
    // console.log(chefRecipe);
    const recipes = (chefRecipe.recipes);
    // console.log(recipes.map(recipe =>console.log(recipe)))

    // add to favorite button function
    const addToFavorite =(id) =>{
        setDisabled(false);
        toast("Successfully added!!");
    

    }

    return (
        <div className='my-container bg-slate-100'>
            <div className="card card-side bg-base-100 shadow-xl rounded-xl cart">
                <figure><img className='image-2' src={chefPicture} /></figure>
                <div className="card-body bg-cyan-200 rounded">
                    <h2 className="card-title">Chef Name: {chefName}</h2>
                    <p>Chef Description: {chefDescription}</p>
                    <p>Number of Recipes: {numberOfRecipes}</p>
                    <p>Experience: {yearsOfExperience} years</p>
                    <p>Rating: {rating}</p>
                </div>
            </div>
            <div className='mt-8'>
                <h4 className=' font-bold text-center text-2xl mb-4'>My Own made recipes,  it's made in organic ingredients.It's Food very Tasty. <br /> <small className='text-center text-4xl text-cyan-300'>WellCome My Recipe House!!</small></h4>
                <div className='grid md:grid-cols-3 gap-5'>
                {
                    recipes.map(recipe => <div key={recipe.id} >
                        <div className="card card-compact w-96 bg-cyan-300 shadow-xl">
                            <figure><img className='image-2' src={recipe.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{recipe.recipeName}</h2>
                                <p>Ingredients: {recipe.ingredients}</p>
                                <p>Method of cocking: {recipe.methodOfCooking}</p>
                                <p>Rating: {recipe.rating}</p>
                                <button disabled={!disabled} onClick={() =>addToFavorite(recipe.id)} className=' justify-start' ><FaHeart className='text-red-600 text-3xl'></FaHeart></button>
                            </div>
                        </div>
                    </div>)
                }
                </div>
            </div>
            <ToastContainer position='top-center'></ToastContainer>
        </div>
       
    );
};

export default ChefRecipeDetails;