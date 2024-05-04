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
  const [darkMode, setDarkMode] = useState<boolean>(false);
  //where was I gonna use this?
  const [initalLoad, setInitialLoad] = useState<boolean>(true);

  if(initalLoad)
    document.body.classList.toggle("dark-mode");

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

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    //v This makes sure it does not do anything if there are no events
    const updateDarkMode = (e: MediaQueryListEvent) => {
      // setDarkMode(e.matches);
      setInitialLoad(false);
      // document.body.classList.toggle("dark-mode");
      //without the if statement will struggle on window Media changes
      // document.body.classList.toggle("dark-mode");
      console.log("e.matches");
      console.log(e.matches);
      if (e.matches && !darkMode) {
        // If system prefers dark mode and dark mode toggle is off, set dark mode
        //!darkMode means its in darkmode by toggle
        console.log("e.matches && !darkMode");
        document.body.classList.toggle("dark-mode");
        setDarkMode(true);
      } else if (!e.matches && darkMode) {
        // If system prefers light mode and dark mode toggle is on, set light mode
        console.log("!e.matches && darkMode");
        document.body.classList.toggle("dark-mode");
        setDarkMode(true);
      } else if (e.matches && darkMode) {
        // If dark mode toggle is on regardless of system preference, set dark mode
        console.log("e.matches && darkMode")
        // document.body.classList.toggle("dark-mode");
        // setDarkMode(true);
        document.body.classList.toggle("dark-mode");
        setDarkMode(true);
      } else {
        // If neither system prefers dark mode nor dark mode toggle is on, set light mode
        console.log("!e.matches && !darkMode");
        // document.body.classList.toggle("dark-mode");
        setDarkMode(false);
      }
    };

    darkModeMediaQuery.addEventListener("change", updateDarkMode);

    return () => {
      darkModeMediaQuery.removeEventListener("change", updateDarkMode);
    };
  },[]);

  //light mode dark mode
  const lightIcon = document.getElementById("light-icon");
  const darkIcon = document.getElementById("dark-icon");

  // let darkMode = window.matchMedia("(prefer-color-scheme: dark)").matches;
  // let windowsDarkMode = {window.matchMedia("(prefer-color-scheme: dark)").matches};
  // setDarkMode(window.matchMedia("(prefer-color-scheme: dark)").matches);

  if (darkMode) {
    lightIcon?.setAttribute("display", "block");
    darkIcon?.setAttribute("display", "none");
  } else {
    lightIcon?.setAttribute("display", "none");
    darkIcon?.setAttribute("display", "block");
  }
  //lightIcon is set to none
  const toggleDarkMode = () => {
    // darkMode = !darkMode;
    // setDarkMode((prevDarkMode) => !prevDarkMode);
    // setInitialLoad(false);
    // document.body.classList.toggle("dark-mode");
    // document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("dark-mode");
    if (darkMode) {
      setDarkMode(false);
      lightIcon?.setAttribute("display", "block");
      darkIcon?.setAttribute("display", "none");
    } else {
      setDarkMode(true);
      lightIcon?.setAttribute("display", "none");
      darkIcon?.setAttribute("display", "block");
    }
  };

  return (
    <div className="app">
      <h1>Knowledge Nexus</h1>
      <button onClick={() => toggleDarkMode()}>
        <svg width="30" height="30" id="light-icon">
          <circle cx="15" cy="15" r="6" fill="rgba(249, 211, 180, 1)" />
          <line
            id="ray"
            stroke="rgba(249, 211, 180, 1)"
            stroke-width="2"
            stroke-linecap="round"
            x1="15"
            y1="1"
            x2="15"
            y2="15"
          ></line>

          <use href="#ray" transform="rotate(45 15 15)" />
          <use href="#ray" transform="rotate(90 15 15)" />
          <use href="#ray" transform="rotate(135 15 15)" />
          <use href="#ray" transform="rotate(180 15 15)" />
          <use href="#ray" transform="rotate(225 15 15)" />
          <use href="#ray" transform="rotate(270 15 15)" />
          <use href="#ray" transform="rotate(325 15 15)" />
        </svg>
        <svg width="30" height="30" id="dark-icon">
          <path
            fill="#be1e2d"
            d="M 23, 5 A 12 12 0 1 0 23, 25 A 12 12 0 0 1 23, 5"
          />
        </svg>
      </button>
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
          onClick={() => {
            setFilter(null);
            setDarkMode(darkMode);
            setInitialLoad(false);
          }}
        >
          All
        </button>
        <button
          className={`sortButton${filter === "Frontend" ? " clickedBtn" : ""}`}
          onClick={() => {
            setFilter("Frontend");
            setDarkMode(darkMode);
            setInitialLoad(false);
          }}
        >
          Frontend
        </button>
        <button
          className={`sortButton${filter === "Backend" ? " clickedBtn" : ""}`}
          onClick={() => {
            setFilter("Backend");
            setDarkMode(darkMode);
            setInitialLoad(false);
          }}
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
