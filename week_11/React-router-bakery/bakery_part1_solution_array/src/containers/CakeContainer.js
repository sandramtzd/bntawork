import { useState } from "react";
import Cake from "../components/Cake";

const CakeContainer = ({cakes}) => {

    

    // EXTENSION - TRACKING REVENUE

    const [revenue, setRevenue] = useState(0);

    const updateRevenue = (saleValue) => {
        setRevenue(revenue + saleValue);
    }

    const mappedCakes = cakes.map((cake, id) => {
        return <Cake 
                    cake={cake}
                    updateRevenue={updateRevenue}/>
    })

    return(
        <>
            <div className="container">
                {mappedCakes}
            </div>
            <p id="price">Total sales: £{revenue}</p>
        </>
    )

}

export default CakeContainer;
