import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Weather from './Weather';
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="container">  
      <Weather />
      </div>
        <div className="Footer">
            <footer className="sign">Coded with ☕&🍪 by WP<br /><a href="https://github.com/becauseidontlike/react-weather"
             target="_blank" rel="noreferrer">Open-source code</a></footer>
        </div>
    </div>
  );
}

export default App;
