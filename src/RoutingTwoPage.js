import { useState } from "react";
import './RoutingTwoPage.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [players, setPlayers] = useState([
        { id: 1, name: "Virat Kohli", role: "Batsman" },
        { id: 2, name: "MS Dhoni", role: "Wicketkeeper" },
        { id: 3, name: "Jasprit Bumrah", role: "Bowler" },
        { id: 4, name: "Rohit Sharma", role: "Batsman" },
        { id: 5, name: "Hardik Pandya", role: "All-rounder" },
    ]);

    const [team, setTeam] = useState([]);

    const handleLogin = () => {
        if (username === "Ashwith" && password === "Ashwith@45") {
            setIsLoggedIn(true);
        } else {
            alert("Invalid credentials");
        }
    };

    const addToTeam = (player) => {
        setTeam([...team, player]);
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
        h1 className = "title" > Cricket Team Selection < /h1> <
        h2 > Players < /h2> <
        ul className = "list" > {
            players.map(player => ( <
                li key = { player.id }
                className = "list-item" > { player.name } - { player.role } <
                button onClick = {
                    () => addToTeam(player) }
                className = "button" >
                Add to Team <
                /button> <
                /li>
            ))
        } <
        /ul> <
        h2 > Selected Team < /h2> <
        ul className = "list" > {
            team.map((player, index) => ( <
                li key = { index }
                className = "list-item" > { player.name } - { player.role } < /li>
            ))
        } <
        /ul> <
        /div>
    );
}

export default App;