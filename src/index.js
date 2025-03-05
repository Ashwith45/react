import React from "react";
import ReactDOM from "react-dom/client";
import App from "./RoutingTwoPage";
import './RoutingTwoPage.css';
//import App from "./App"; // Ensure you're importing the correct component
//import "./employee.css"; // Import CSS if needed

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <
    React.StrictMode >
    <
    App / >
    <
    /React.StrictMode>
);