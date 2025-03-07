import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use `react-dom/client` for React 18
import DragDropList from "./DragDrop/DragDropList";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Use `createRoot`
root.render( <
    React.StrictMode >
    <
    DragDropList / >
    <
    /React.StrictMode>
);