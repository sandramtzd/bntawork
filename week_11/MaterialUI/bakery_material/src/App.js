
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { useState } from 'react';
import CakeContainer from './containers/CakeContainer';
import CakeProfile from './components/CakeProfile';

function App() {
  const [cakes, setCakes] = useState([
    {
      id: 1,  
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
        id: 2,
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
        id: 3,
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
]);
  return (
    <BrowserRouter>
    <div className="App">
        <h1>BNTA Bakery</h1>

        <Route index element={<CakeContainer cakes={cakes} />} />
        <Route path='/cakes/:id' element={<CakeProfile cakes={cakes} />} />
        <CakeContainer />
    </div>
    </BrowserRouter>
  );
}

export default App;
