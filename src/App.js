import "./App.css";
import "./Search";
import SearchBar from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchBar defaultCity="Tokyo" />
      </div>
      <footer>
        <span>
          Coded By Yasaman Moghadas. Github:{" "}
          <a
            href="https://github.com/yasamanmghds/react_weather_app"
            target="_blank"
            rel="noreferrer"
          >
            yas_mghds
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
