import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';
import { addToLocalStorage, getStoredCart } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    useEffect(() => {
        if (bottles.length > 0) {
            const storedCart = getStoredCart();

            const savedCart = [];
            for (const id of storedCart) {
                const bottle = bottles.find(bottle => bottle.id === id)
                if (bottle) {
                    savedCart.push(bottle)
                }
            }
            setCart(savedCart);
        }
    }, [bottles])

    const handleAddToCart = bottle => {
        console.log('Bottle added to cart', bottle);
        const newItem = [...cart, bottle];
        setCart(newItem);
        addToLocalStorage(bottle.id);
    }

    return (
        <div>
            <h2>Total Bottles : {bottles.length}</h2>
            <Cart cart={cart}></Cart>
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