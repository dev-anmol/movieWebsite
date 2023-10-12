import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import movies from "./movie.json";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="App">
      <Header />
      <div className="main">
        {movies.map((element) => {
          return (
            <Movies
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
