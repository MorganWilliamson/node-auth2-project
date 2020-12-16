import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../stylesheets/Navbar.css";

function Navbar() {
    return (
        <Router>
            <nav className="navbar">
                <div className="unlist">
                    <ul>
                        <p>Navbar rendering here.</p>
                        <li>
                            <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                        </li>
                        <li>
                            <Link to="/register" style={{ textDecoration: 'none' }}>Register</Link>
                        </li>
                        <li>
                            <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
                        </li>
                        <li>
                            <Link to="/users" style={{ textDecoration: 'none' }}>Users</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Router>
    )
};

export default Navbar;