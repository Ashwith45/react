import { useState } from "react";
import './ecommercepage.css';


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cart, setCart] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [products, setProducts] = useState({
        laptops: [
            { id: 1, name: "Dell Inspiron", price: 60000, image: "/images/delllaptop.png" },
            { id: 2, name: "HP Pavilion", price: 65000, image: "/images/hplaptop.png" },
            { id: 3, name: "MacBook Air", price: 90000, image: "/images/mac.png" }
        ],
        smartphones: [
            { id: 4, name: "iPhone 13", price: 75000, image: "/images/iphone.png" },
            { id: 5, name: "Samsung Galaxy S21", price: 70000, image: "/images/s21.png" },
            { id: 6, name: "OnePlus 9", price: 50000, image: "/images/oneplus.png" }
        ],
        watches: [
            { id: 7, name: "Apple Watch", price: 40000, image: "/images/applewatch.png" },
            { id: 8, name: "Samsung Galaxy Watch", price: 30000, image: "/images/samsungwatch.png" },
            { id: 9, name: "Fossil Gen 5", price: 20000, image: "/images/fossilwatch.png" }
        ]
    });

    const handleLogin = () => {
        if (username === "admin" && password === "password") {
            setIsLoggedIn(true);
        } else {
            alert("Invalid credentials");
        }
    };

    const addToCart = (product) => {
        setCart([...cart, product]);
        setTotalAmount(totalAmount + product.price);
    };

    const removeFromCart = (product) => {
        const updatedCart = cart.filter(item => item.id !== product.id);
        setCart(updatedCart);
        setTotalAmount(totalAmount - product.price);
    };

    const addProduct = (category, name, price, image) => {
        const newProduct = {
            id: Date.now(),
            name,
            price: parseInt(price),
            image: image || "https://via.placeholder.com/150"
        };
        setProducts({
            ...products,
            [category]: [...products[category], newProduct]
        });
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
        h1 className = "title" > E - commerce Store < /h1> {
            Object.keys(products).map(category => ( <
                div key = { category } >
                <
                h2 > { category.charAt(0).toUpperCase() + category.slice(1) } < /h2> <
                ul className = "list" > {
                    products[category].map(product => ( <
                        li key = { product.id }
                        className = "list-item" >
                        <
                        img src = { product.image }
                        alt = { product.name }
                        className = "product-image" / > { product.name } - ₹{ product.price } <
                        button className = "button"
                        onClick = {
                            () => addToCart(product) } > Add to Cart < /button> <
                        /li>
                    ))
                } <
                /ul> <
                /div>
            ))
        } <
        h2 > Cart < /h2> <
        ul className = "list" > {
            cart.map(product => ( <
                li key = { product.id }
                className = "list-item" > { product.name } - ₹{ product.price } <
                button className = "button"
                onClick = {
                    () => removeFromCart(product) } > Remove < /button> <
                /li>
            ))
        } <
        /ul> <
        h3 > Total Amount: ₹{ totalAmount } < /h3>

        <
        div className = "admin-panel" >
        <
        h2 > Add New Product < /h2> <
        input type = "text"
        placeholder = "Category (laptops/smartphones/watches)"
        id = "category" / >
        <
        input type = "text"
        placeholder = "Product Name"
        id = "name" / >
        <
        input type = "number"
        placeholder = "Price"
        id = "price" / >
        <
        input type = "text"
        placeholder = "Image URL"
        id = "image" / >
        <
        button className = "button"
        onClick = {
            () =>
            addProduct(
                document.getElementById('category').value,
                document.getElementById('name').value,
                document.getElementById('price').value,
                document.getElementById('image').value
            )
        } > Add Product < /button> <
        /div> <
        /div>
    );
}

export default App;