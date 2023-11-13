import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"


const CakeProfile = ({cakes}) => {
const [cake, setCake] = useState(null);

    const {id} = useParams();
    useEffect(()=> {
        const foundCake = cakes.find((cake) => cake.id == id)
        setCake(foundCake);


    }, [])


    if (cake) {



    return(
        
        <div className="cake">
            <h2> Cake Profile</h2>
            <h3>{cake.cakeName}</h3>
            <h4>Ingredients:</h4>
            <ul>
                {cake.ingredients.map( ingredient => {
                    return <li>{ingredient}</li>
                })}
            </ul>
            <p>Rating: {cake.rating}</p>
            <p>Price: £{cake.price}</p>
            <Link to={"/"}>Home</Link>

            
        </div>
       
    )

    }else{
        return(
            <h2>Cake is loading ...</h2>
        )
    }}

export default CakeProfile;