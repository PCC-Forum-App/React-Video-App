import React, { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./assets/search.svg";
import VideoCard from "./VideoCard";
import myVideos from "./data";

interface Video {
  Title: string;
  Thumbnail: string;
  Type: string;
  Year: string;
  Link: string;
}

const App: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = useState<string | null>(null);

  const searchVideos = (title: string) => {
    const filteredVideos = myVideos.filter(
      (video) =>
        video.Title.toLowerCase().includes(title.toLowerCase()) &&
        (!filter || video.Type.toLowerCase() === filter.toLowerCase())
    );

    setVideos(filteredVideos);
  };

  useEffect(() => {
    console.log("effect called");
    searchVideos(searchTerm);
  }, [searchTerm, filter]);

  return (
    <div className="app">
      <h1>Learn With Us</h1>

      <div className="search">
        <input
          placeholder="Search For Videos"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchVideos(searchTerm)}
        />
      </div>

      <div className="filter-buttons">
        <button
          className={`sortButton${filter === null ? " clickedBtn" : ""}`}
          onClick={() => setFilter(null)}
        >
          All
        </button>
        <button
          className={`sortButton${filter === "Frontend" ? " clickedBtn" : ""}`}
          onClick={() => setFilter("Frontend")}
        >
          Frontend
        </button>
        <button
          className={`sortButton${filter === "Backend" ? " clickedBtn" : ""}`}
          onClick={() => setFilter("Backend")}
        >
          Backend
        </button>
      </div>

      {videos.length > 0 ? (
        <div className="container">
          {videos.map((video) => (
            <VideoCard videoCard={video} key={video.Link} />
          ))}
        </div>
      ) : (
        <div className="container">Nothing here</div>
      )}
    </div>
  );
};

export default App;
