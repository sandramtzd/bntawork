import { useState } from "react";
import Cake from "./Cake.js";
import CakeForm from "./CakeForm.js";

const CakeContainer = () => {

    const [listOfCakes, setListOfCakes] = useState(
		[
			{
				cakeName: "Victoria Sponge",
				   ingredients: [
					   "eggs",
					  "butter",
					  "sugar",
					  "self-raising flour",
					  "baking powder",
					  "milk"
				  ],
				  price: 5,
				   rating: 5
			},
			{
				 cakeName: "Tea Loaf",
				   ingredients: [
					   "eggs",
					  "oil",
					  "dried fruit",
					  "sugar",
					  "self-raising flour",
					  "strong tea",
				  ],
				  price: 2,
				  rating: 3
			},
			{
				 cakeName: "Carrot Cake",
				   ingredients: [
					"carrots",
					  "walnuts",
					  "oil",
					  "cream cheese",
					  "flour",
					  "sugar",
				   ],
				   price: 8,
				   rating: 5
			} 
		]		
	)

	const mappedCakes = listOfCakes.map((cake, index)=> {
		return <Cake cake = {cake} key={index}/>
	})

	const addNewCake = (newCake) => {
		const updateListOfCakes = [...listOfCakes, newCake]
		setListOfCakes(updateListOfCakes)
	}

  return (
    <>
		<h2>My Cakes</h2>
		{mappedCakes}
		<CakeForm listOfCakes = {listOfCakes} addNewCake = {addNewCake}/>
    </>
  )
}

export default CakeContainer;