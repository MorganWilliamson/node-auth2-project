import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Navbar() {

    return (
        <Router>
            <nav>
                <div>
                    <ul>
                    <p>Navbar rendering here.</p>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    </ul>
                </div>
            </nav>

            {/* <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/users">
                    <Users />
                </Route>
            </Switch> */}

        </Router>
    )
};

export default Navbar;