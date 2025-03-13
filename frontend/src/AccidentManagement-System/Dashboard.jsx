// Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <h2>Welcome to the Dashboard</h2>
            <p>Here you can access all modules</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/accident-reporting">Report Accident</Link>
                    </li>
                    <li>
                        <Link to="/incident-tracking">Track Incidents</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Dashboard;
