import { useState } from "react";
import './ecommercepage.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cart, setCart] = useState([]);

    const laptops = [
        { id: 1, name: "Dell Inspiron", price: "₹60,000" },
        { id: 2, name: "HP Pavilion", price: "₹65,000" },
        { id: 3, name: "MacBook Air", price: "₹90,000" }
    ];

    const smartphones = [
        { id: 4, name: "iPhone 13", price: "₹75,000" },
        { id: 5, name: "Samsung Galaxy S21", price: "₹70,000" },
        { id: 6, name: "OnePlus 9", price: "₹50,000" }
    ];

    const watches = [
        { id: 7, name: "Apple Watch", price: "₹40,000" },
        { id: 8, name: "Samsung Galaxy Watch", price: "₹30,000" },
        { id: 9, name: "Fossil Gen 5", price: "₹20,000" }
    ];

    const handleLogin = () => {
        if (username.trim() !== "" && password.trim() !== "") {
            setIsLoggedIn(true);
        } else {
            alert("Please enter valid credentials");
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername("");
        setPassword("");
        setCart([]);
    };

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    if (!isLoggedIn) {
        return ( <
            div className = "login-container" >
            <
            h2 > Login < /h2> <
            input type = "text"
            placeholder = "Username"
            value = { username }
            onChange = {
                (e) => setUsername(e.target.value) }
            /> <
            input type = "password"
            placeholder = "Password"
            value = { password }
            onChange = {
                (e) => setPassword(e.target.value) }
            /> <
            button onClick = { handleLogin }
            className = "button" > Login < /button> <
            /div>
        );
    }

    return ( <
        div className = "container" >
        <
        h1 className = "title" > E - commerce Store < /h1> <
        button className = "logout-button"
        onClick = { handleLogout } > Logout < /button>

        <
        h2 > Laptops < /h2> <
        ul className = "list" > {
            laptops.map(product => ( <
                li key = { product.id }
                className = "list-item" > { product.name } - { product.price } <
                button className = "button"
                onClick = {
                    () => addToCart(product) } > Add to Cart < /button> <
                /li>
            ))
        } <
        /ul>

        <
        h2 > Smartphones < /h2> <
        ul className = "list" > {
            smartphones.map(product => ( <
                li key = { product.id }
                className = "list-item" > { product.name } - { product.price } <
                button className = "button"
                onClick = {
                    () => addToCart(product) } > Add to Cart < /button> <
                /li>
            ))
        } <
        /ul>

        <
        h2 > Watches < /h2> <
        ul className = "list" > {
            watches.map(product => ( <
                li key = { product.id }
                className = "list-item" > { product.name } - { product.price } <
                button className = "button"
                onClick = {
                    () => addToCart(product) } > Add to Cart < /button> <
                /li>
            ))
        } <
        /ul>

        <
        h2 > Cart < /h2> <
        ul className = "list" > {
            cart.length === 0 ? ( <
                p > Your cart is empty < /p>
            ) : (
                cart.map((item, index) => ( <
                    li key = { index }
                    className = "list-item" > { item.name } - { item.price } < /li>
                ))
            )
        } <
        /ul> <
        /div>
    );
}

export default App;