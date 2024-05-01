import { useState, useEffect } from "react";
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

function App() {

  const [videos, setVideos] = useState<Video[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchVideos = (title: string) => {
    let filteredVideos = myVideos.filter((video) => {
      return video.Title.toLowerCase().includes(title.toLowerCase());
    });

    setVideos(filteredVideos);
  };

 

  useEffect(() => {
    console.log("effect called");
    searchVideos("Tutorial");
  }, []);

  return (
    <div className="app">
      <h1>Videos From Heart</h1>

      <div className="search">
        <input
          placeholder="Search For Videos"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            searchVideos(e.target.value)
          }}
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
    </div>
  );
}

export default App;
