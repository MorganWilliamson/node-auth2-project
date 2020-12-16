import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./components/Register";


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          If you're seeing this, the app <em>is</em> rendering! Good job!
        </p>
      </header>

      <Register />

      <Router>
        <Switch>
          <Route exact path="/">
              {/* <Home /> */}
          </Route>

          <Route path="/register">
              <Register />
          </Route>

          <Route path="/login">
              {/* <Login /> */}
          </Route>

          <Route path="/users">
              {/* <Users /> */}
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
