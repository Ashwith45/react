import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider, useTheme } from "./ThemeContext/ThemeContext";
import "./styles.css";
import "./ThemeContext/ThemeContext.css";

// Lazy Loaded Pages
const About = React.lazy(() => new Promise(resolve => {
    setTimeout(() => resolve(
        import ("./ThemeContext/About")), 2000);
}));

const Contact = React.lazy(() => new Promise(resolve => {
    setTimeout(() => resolve(
        import ("./ThemeContext/Contact")), 2000);
}));

const App = () => {
        return ( <
            ThemeProvider >
            <
            Router >
            <
            div className = "app-container" >
            <
            Navbar / >
            <
            Suspense fallback = { < div className = "loading" > Loading... < /div>}> <
                Routes >
                <
                Route path = "/"
                element = { < Home / > }
                /> <
                Route path = "/about"
                element = { < About / > }
                /> <
                Route path = "/contact"
                element = { < Contact / > }
                /> <
                /Routes> <
                /Suspense> <
                /div> <
                /Router> <
                /ThemeProvider>
            );
        };

        // Navbar Component with Buttons
        const Navbar = () => {
            const navigate = useNavigate();

            return ( <
                nav className = "navbar" >
                <
                button onClick = {
                    () => navigate("/") } > Home < /button> <
                button onClick = {
                    () => navigate("/about") } > About < /button> <
                button onClick = {
                    () => navigate("/contact") } > Contact < /button> <
                /nav>
            );
        };

        // Home Component
        const Home = () => {
            const { theme, toggleTheme } = useTheme();

            return ( <
                div className = "home-container" >
                <
                h1 > Welcome to the { theme }
                theme! < /h1> <
                button className = { `toggle-theme-btn ${
          theme === "light" ? "dark-theme-btn" : "light-theme-btn"
        }` }
                onClick = { toggleTheme } >
                { theme === "light" ? "Dark Theme" : "Light Theme" } <
                /button> <
                /div>
            );
        };

        export default App;