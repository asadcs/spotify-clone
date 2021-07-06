import logo from "./logo.svg";
import "./App.css";
// https://github.com/yarinek/spotify-clone/tree/main/src
//https://github.com/Raphjacksun7/spotify-clone-client
//https://github.com/JL978/spotify-clone-client
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
