import { useState } from "react";

const CakeForm = ({listOfCakes, addNewCake}) => {

    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [rating, setRating] = useState("");
    const [price, setPrice] = useState("");
    const [error, setError] = useState("");

    const handleValidation = () => {
        let failedValidation = false;

        if(listOfCakes.some((cake) => cake.cakeName === cakeName)){
            failedValidation = true;
            setError("Cake already exists")
        }

        return failedValidation;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!handleValidation()){
            const newCake = {
                cakeName: cakeName,
                ingredients: ingredients,
                rating: rating,
                price: price
            };

            addNewCake(newCake);
            

            setCakeName("");
            setIngredients("");
            setRating("");
            setPrice("");
            setError("");

        }
    }

    return (
        <>
        <h2>Create your own cake</h2>
        <p>{error}</p>

        <form onSubmit={handleSubmit}>
            <input
                type = "text"
                name = "cakeName"
                placeholder="Cake Name"
                value = {cakeName}
                onChange = {(e) => setCakeName(e.target.value)}
            />
            <input
                type = "text"
                name = "ingredients"
                placeholder="Ingredients"
                value = {ingredients.split(", ")}
                onChange = {(e) => setIngredients(e.target.value)}
            />
            <input
                type = "number"
                name = "rating"
                placeholder="Rating"
                value = {rating}
                onChange = {(e) => setRating(e.target.value)}
            />
            <input
                type = "number"
                name = "price"
                placeholder="Price"
                value = {price}
                onChange = {(e) => setPrice(e.target.value)}
            />
            <input
                type = "submit"
                value = "Submit"
            />
            
        </form>
        
        
        </>
    )


};

export default CakeForm;