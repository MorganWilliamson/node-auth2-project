import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";

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
    </div>
  );
}

export default App;
