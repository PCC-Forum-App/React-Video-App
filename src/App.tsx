import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import VideoCard from "./VideoCard";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=7313d1fb";
const myVideos = [
  {
    Title: "Flexbox Tutorial",
    Channel: "Aung",
    Thumbnail: "src/assets/CSS Team Thumbnail.png",
    Type: "YouTube Video",
    Year: "2024",
    Link: "https://www.youtube.com/watch?v=TohziRysKKY",
  },
  {
    Title: "HTML Tutorial",
    Channel: "Zaw lay",
    Thumbnail: "src/assets/HTML Team Thumbnail.png",
    Type: "YouTube Video",
    Year: "2024",
    Link: "https://youtu.be/Z1neJhEEoFA?si=24-LVC81Tyxw51z9",
  },
];

interface Video {
  Title: string;
  Thumbnail: string;
  Type: string;
  Year: string;
  Link: string;
}

function App() {
  const [movies, setMovies] = useState([]);

  const [videos, setVideos] = useState<Video[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchVideos = (title: string) => {
    let filteredVideos = myVideos.filter((video) => {
      return video.Title.toLowerCase().includes(title.toLowerCase());
    });

    setVideos(filteredVideos);
  };

  const searchMovies = async (title: String) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    console.log("effect called");
    searchMovies("Naruto");
  }, []);

  return (
    <div className="app">
      <h1>Videos From Heart</h1>

      <div className="search">
        <input
          placeholder="Search For Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchVideos(searchTerm)}
        />
      </div>

      {videos?.length > 0 ? (
        <div className="container">
          {videos.map((video) => (
            <VideoCard videoCard={video}></VideoCard>
          ))}
        </div>
      ) : (
        <div className="container">Nothing here</div>
      )}

      {/* {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie}></MovieCard>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )} */}
    </div>
  );
}

export default App;
