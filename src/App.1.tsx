import { useState, useEffect } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import { API_URL } from "./App";

export function App() {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title: String) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  const movie1 = {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
    Title: "Naruto: Shippuden",
    Type: "series",
    Year: "2007–2017",
    imdbID: "tt0988824",
  };

  useEffect(() => {
    console.log("effect called");
    searchMovies("The Flash");
  }, []);

  return (
    <div className="app">
      <h1>Movieland</h1>

      <div className="search">
        <input
          placeholder="Search For Movies"
          value="Goal"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie}></MovieCard>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}

      <div className="container">
        <MovieCard movie={movies[0]} />
      </div>
    </div>
  );
}
