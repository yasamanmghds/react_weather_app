import "./App.css";
import "./Search";
import SearchBar from "./Search";
function App() {
  return (
    <div className="App">
      <SearchBar />
      <div>
        <p>
          Coded by Yasaman Moghadas.
          <a
            href="https://github.com/yasamanmghds/react_weather_app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
