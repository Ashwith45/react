import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart({ cart, setCart }) {
    const navigate = useNavigate();

    const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
    };

    return ( <
        div className = "cart-container" >
        <
        h2 > Your Shopping Cart < /h2>

        {
            cart.length === 0 ? ( <
                p className = "empty-cart" > Your cart is empty. < /p>
            ) : ( <
                >
                <
                div className = "cart-items" > {
                    cart.map((product) => ( <
                        div key = { product.id }
                        className = "cart-item" >
                        <
                        img src = { product.image }
                        alt = { product.name }
                        className = "cart-image" / >
                        <
                        div className = "cart-details" >
                        <
                        p className = "cart-name" > { product.name } < /p> <
                        p className = "cart-price" > ₹{ product.price } < /p> <
                        button className = "remove-button"
                        onClick = {
                            () => removeFromCart(product.id) } > Remove < /button> <
                        /div> <
                        /div>
                    ))
                } <
                /div>

                <
                div className = "cart-summary" >
                <
                h3 > Total Amount: ₹{ totalAmount } < /h3> <
                button className = "proceed-button"
                onClick = {
                    () => navigate("/payment") } > Proceed
                for Payment < /button> <
                /div> <
                />
            )
        } <
        /div>
    );
}

export default Cart;