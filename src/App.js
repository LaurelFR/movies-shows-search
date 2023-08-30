import Media from "./Media";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Media defaultMedia="Friends" />
        <footer>
          This project was coded by <strong>Laurel Rubel</strong> and is{" "}
          <a
            href="https://github.com/LaurelFR/movies-shows-search"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
