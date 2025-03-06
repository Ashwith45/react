import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import UserLogin from "./UserLogin";
import AdminPanel from "./AdminPanel";
import UserPanel from "./UserPanel";
import Cart from "./Cart";
import Payment from "./Payment";
import "./EcommercePage2.css";

function App() {
    const [cart, setCart] = useState([]); // Initialize as an empty array

    return ( <
            Router >
            <
            div className = "app-container" >
            <
            nav >
            <
            Link to = "/admin-login" > Admin Login < /Link> <
            Link to = "/user-login" > User Login < /Link> <
            Link to = "/cart" > Cart({ cart.length }) < /Link> <
            /nav> <
            Routes >
            <
            Route path = "/admin-login"
            element = { < AdminLogin / > }
            /> <
            Route path = "/admin-panel"
            element = { < AdminPanel / > }
            /> <
            Route path = "/user-login"
            element = { < UserLogin / > }
            /> <
            Route path = "/user-panel"
            element = { < UserPanel cart = { cart }
                setCart = { setCart }
                />} / >
                <
                Route path = "/cart"
                element = { < Cart cart = { cart }
                    setCart = { setCart }
                    />} / >
                    <
                    Route path = "/payment"
                    element = { < Payment / > }
                    /> <
                    /Routes> <
                    /div> <
                    /Router>
                );
            }

            export default App;