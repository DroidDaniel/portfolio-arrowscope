import logo from "./logo.svg";
import "./App.css";
import Portfolio from "./Portfolio";

function App() {
  return (
    <div className="App">
      <div className="portfolio-container">
        <div className="portfolio_card">
          <Portfolio />
        </div>
      </div>
    </div>
  );
}

export default App;
