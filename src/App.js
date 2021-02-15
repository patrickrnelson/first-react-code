import logo from './logo.svg';
import './App.css';

// if node:
// const HelloCulen = require(./HelloCullen)

// Client side (react) we do:
import HelloCullen from './HelloCullen';

// App is a Component
// React is made up of Components
// Components are functions that return JSX
function App() {
  let name = 'Patrick';

  let myH1 = <h1>How should I react? - {name}</h1>;

  // "HTML" is actually "JSX"
  // "JSX" = Javascript eXtended
  // as in App.jsx
  return (
    <div className="App">
      {myH1}
      <header className="App-header">
        {/* helloCullen is a React Component*/}
        <HelloCullen />
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
