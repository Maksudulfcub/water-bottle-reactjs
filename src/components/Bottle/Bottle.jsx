import './Bottle.css';

const Bottle = ({ bottle, handleAddToCart }) => {
    const { img, name, price, ratings, seller, stock } = bottle;
    return (
        <div className='bottle'>
            <h3>{name}</h3>
            <img src={img} alt="" />
            <h4>Price : ${price}</h4>
            <p>Rating : {ratings}</p>
            <p>Seller : {seller}</p>
            <p>Stock available: {stock}</p>
            <button onClick={() => handleAddToCart(bottle)}>Purchase Now</button>
        </div>
    );
};

export default Bottle;