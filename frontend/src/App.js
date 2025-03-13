import React, { useState } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './AccidentManagementSystem/Home';
import Authentication from './AccidentManagementSystem/Authentication';
import AccidentReporting from './AccidentManagementSystem/AccidentReporting';
import IncidentTracking from './AccidentManagementSystem/IncidentTracking';
import Notifications from './AccidentManagementSystem/Notifications';
import UserManagement from './AccidentManagementSystem/UserManagement';
import MappingLocation from './AccidentManagementSystem/MappingLocation';
import AnalyticsReporting from './AccidentManagementSystem/AnalyticsReporting';
import './App.css';

const App = () => {
        const [isAuthenticated, setIsAuthenticated] = useState(false);

        return ( <
            div >
            <
            nav >
            <
            ul >
            <
            li > < Link to = "/" > Home < /Link></li >
            <
            li > < Link to = "/auth" > Authentication < /Link></li > {
                isAuthenticated && ( <
                    >
                    <
                    li > < Link to = "/report" > Accident Reporting < /Link></li >
                    <
                    li > < Link to = "/track" > Incident Tracking < /Link></li >
                    <
                    li > < Link to = "/notifications" > Notifications < /Link></li >
                    <
                    li > < Link to = "/users" > User Management < /Link></li >
                    <
                    li > < Link to = "/map" > Mapping & Location < /Link></li >
                    <
                    li > < Link to = "/analytics" > Analytics & Reporting < /Link></li >
                    <
                    />
                )
            } <
            /ul> <
            /nav> <
            Routes >
            <
            Route path = "/"
            element = { < Home / > }
            /> <
            Route path = "/auth"
            element = { < Authentication setIsAuthenticated = { setIsAuthenticated }
                />} / >

                { /* Protected Routes */ } <
                Route path = "/report"
                element = { isAuthenticated ? < AccidentReporting / > : < Navigate to = "/auth" / > }
                /> <
                Route path = "/track"
                element = { isAuthenticated ? < IncidentTracking / > : < Navigate to = "/auth" / > }
                /> <
                Route path = "/notifications"
                element = { isAuthenticated ? < Notifications / > : < Navigate to = "/auth" / > }
                /> <
                Route path = "/users"
                element = { isAuthenticated ? < UserManagement / > : < Navigate to = "/auth" / > }
                /> <
                Route path = "/map"
                element = { isAuthenticated ? < MappingLocation / > : < Navigate to = "/auth" / > }
                /> <
                Route path = "/analytics"
                element = { isAuthenticated ? < AnalyticsReporting / > : < Navigate to = "/auth" / > }
                /> <
                /Routes> <
                /div>
            );
        };

        export default App;