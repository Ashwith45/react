import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === "admin" && password === "admin123") {
            navigate("/admin-panel");
        } else {
            setError("Invalid Credentials");
        }
    };

    return ( <
        div className = "login-container" >
        <
        h2 > Admin Login < /h2> <
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
        button onClick = { handleLogin } > Login < /button> {
            error && < p className = "error" > { error } < /p>} <
                /div>
        );
    }

    export default AdminLogin;