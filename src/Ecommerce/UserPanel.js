import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserPanel.css";

function UserPanel({ cart, setCart }) {
    const navigate = useNavigate();

    const products = [
        { id: 1, name: "Dell Inspiron", price: 60000, image: "/images/delllaptop.png" },
        { id: 2, name: "HP Pavilion", price: 65000, image: "/images/hplaptop.png" },
        { id: 3, name: "MacBook Air", price: 90000, image: "/images/mac.png" },
        { id: 4, name: "iPhone 13", price: 75000, image: "/images/iphone.png" },
        { id: 5, name: "Samsung Galaxy S21", price: 70000, image: "/images/s21.png" },
        { id: 6, name: "OnePlus 9", price: 50000, image: "/images/oneplus.png" },
        { id: 7, name: "Apple Watch", price: 40000, image: "/images/applewatch.png" },
        { id: 8, name: "Samsung Galaxy Watch", price: 30000, image: "/images/samsungwatch.png" },
        { id: 9, name: "Fossil Gen 5", price: 20000, image: "/images/fossilwatch.png" },
    ];

    const addToCart = (product) => {
        setCart([...cart, product]); // Ensure cart is iterable
    };

    return ( <
        div className = "user-panel" >
        <
        h2 > Products < /h2> <
        div className = "product-list" > {
            products.map((product) => ( <
                div key = { product.id }
                className = "product-card" >
                <
                img src = { product.image }
                alt = { product.name }
                className = "product-image" / >
                <
                p > { product.name } - ₹{ product.price } < /p> <
                button className = "add-to-cart"
                onClick = {
                    () => addToCart(product) } > Add to Cart < /button> <
                /div>
            ))
        } <
        /div> <
        button className = "go-to-cart"
        onClick = {
            () => navigate("/cart") } > Go to Cart < /button> <
        /div>
    );
}

export default UserPanel;