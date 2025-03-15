import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';

const Bottles = () => {

    const [bottles, setBottles] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    const handleAddToCart = bottle => {
        console.log('Bottle added to cart', bottle);
        const newItem = [...cart, bottle];
        setCart(newItem);
    }

    return (
        <div>
            <h2>Total Bottles : {bottles.length}</h2>
            <h2>Cart : {cart.length}</h2>
            <div className="bottles-container">
                {
                    bottles.map(bottle =>
                        <Bottle
                            key={bottle.id}
                            bottle={bottle}
                            handleAddToCart={handleAddToCart}
                        ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;