import { useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?apikey=c8144cec";
const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };
  useEffect(() => {
    searchMovies("superman");
  }, []);

  return (
    <div className="app">
      <h1>FunBox</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          onChange={() => {}}
        />
        <img src={SearchIcon} onClick={() => {}} alt="" />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movie.map(movie(<MovieCard movie={movie} />))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
