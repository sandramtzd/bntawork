const Cake = ({cake}) => {

  const mappedIngredients = cake.ingredients.map((item, index)){
    return <li>key={index} </li>
  }



  return (
    <div className="cake">
        <h2>{cake.cakeName}</h2>
        <h3>Ingredients: </h3>
        <ul>
          {cake.ingredients.map(ingredient => {
            return <li>{ingredient}</li>
          })}
        </ul>
        <p>Rating: {cake.rating}</p>
        <p>Price: £{cake.price}</p>
    </div>
  )
}

export default Cake;