import { useState } from "react";
import Button from "./Button";
import './DynamicLogin.css';



function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [employees, setEmployees] = useState([
        { id: 1, name: "Arjun", role: "Developer" },
        { id: 2, name: "Yudhister", role: "Project Manager" },
        { id: 3, name: "Bheema", role: "Backend Developer" },
        { id: 4, name: "Nakul", role: "Frontend Developer" },
        { id: 5, name: "Sahadev", role: "QA Engineer" },
    ]);

    const handleLogin = () => {
        if (username === "admin" && password === "password") {
            setIsLoggedIn(true);
        } else {
            alert("Invalid credentials");
        }
    };

    const addEmployee = () => {
        const newEmployee = { id: employees.length + 1, name: "New Employee", role: "Intern" };
        setEmployees([...employees, newEmployee]);
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
            Button onClick = { handleLogin } > Login < /Button> <
            /div>
        );
    }

    return ( <
        div className = "container" >
        <
        h1 className = "title" > Employee Management App < /h1> <
        ul className = "list" > {
            employees.map(emp => ( <
                li key = { emp.id }
                className = "list-item" > { emp.name } - { emp.role } < /li>
            ))
        } <
        /ul> <
        Button onClick = { addEmployee }
        className = "button" >
        Add Employee <
        /Button> <
        /div>
    );
}

export default App;