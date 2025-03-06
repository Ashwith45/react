import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminPanel.css";

function AdminPanel({ setIsAdmin }) {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");

    const addProduct = () => {
        if (productName && productPrice) {
            setProducts([...products, { name: productName, price: parseFloat(productPrice) }]);
            setProductName("");
            setProductPrice("");
        }
    };

    const removeProduct = (name) => {
        setProducts(products.filter(product => product.name !== name));
    };

    return ( <
        div className = "admin-panel" >
        <
        h2 > Admin Panel < /h2> <
        button className = "logout-button"
        onClick = {
            () => { setIsAdmin(false);
                navigate("/"); } } >
        Logout <
        /button>

        <
        h3 > Add Product < /h3> <
        input type = "text"
        placeholder = "Product Name"
        value = { productName }
        onChange = {
            (e) => setProductName(e.target.value) }
        /> <
        input type = "number"
        placeholder = "Price"
        value = { productPrice }
        onChange = {
            (e) => setProductPrice(e.target.value) }
        /> <
        button className = "add-button"
        onClick = { addProduct } > Add < /button>

        <
        h3 > Remove Product < /h3> <
        ul className = "product-list" > {
            products.map((product) => ( <
                li key = { product.name }
                className = "product-item" > { product.name } - ₹{ product.price } <
                button className = "remove-button"
                onClick = {
                    () => removeProduct(product.name) } > Remove < /button> <
                /li>
            ))
        } <
        /ul> <
        /div>
    );
}

export default AdminPanel;