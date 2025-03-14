import React from "react";

function Button({ onClick, children }) {
    return <button onClick = { onClick }
    className = "button" > { children } < /button>;
}

export default Button;