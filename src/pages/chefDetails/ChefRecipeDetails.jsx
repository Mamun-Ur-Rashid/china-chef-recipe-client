import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ChefRecipeDetails = () => {

    const chefRecipe = useLoaderData();
    const { chefPicture, chefName, chefDescription, numberOfRecipes, rating, yearsOfExperience } = chefRecipe;
    // console.log(chefRecipe);
    const recipes = (chefRecipe.recipes);
    console.log(recipes.map(recipe =>console.log(recipe)))

    return (
        <div className='my-container'>
            <div className="card card-side bg-base-100 shadow-xl rounded-xl cart">
                <figure><img className='image-2' src={chefPicture} /></figure>
                <div className="card-body bg-cyan-50 rounded-xl">
                    <h2 className="card-title">Chef Name: {chefName}</h2>
                    <p>Chef Description: {chefDescription}</p>
                    <p>Number of Recipes: {numberOfRecipes}</p>
                    <p>Experience: {yearsOfExperience} years</p>
                    <p>Rating: {rating}</p>
                </div>
            </div>
            <div className='mt-8'>
                <h4 className=' font-bold text-center text-2xl mb-4'>My Own made recipes, <br /> it's made in organic ingredients. <br /> It's Food very Tasty. <br /> <small className='text-center text-4xl text-cyan-300'>WellCome My Recipe House!!</small></h4>
                <div className='grid md:grid-cols-3 gap-5'>
                {
                    recipes.map(recipe => <div key={recipe.id} >
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img className='image-2' src={recipe.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{recipe.recipeName}</h2>
                                <p>Ingredients: {recipe.ingredients}</p>
                                <p>Method of cocking: {recipe.methodOfCooking}</p>
                                <p>Rating: {recipe.rating}</p>
                                <p><small className='inline-flex items-center gap-2'><FaHeart className='text-red-600 text-3xl'></FaHeart> 560</small></p>
                            </div>
                        </div>
                    </div>)
                }
                </div>
            </div>
        </div>
    );
};

export default ChefRecipeDetails;