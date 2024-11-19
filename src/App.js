import React, { useState } from "react";
import Genre from "./components/genre.js";

// Test data - Do not modify
const songs = [
  {
    id: 1,
    title: "Yesterday",
    artist: "The Beatles",
    duration: 125,
    genre: "Rock",
  },
  {
    id: 2,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    duration: 354,
    genre: "Rock",
  },
  {
    id: 3,
    title: "Hey Jude",
    artist: "The Beatles",
    duration: 431,
    genre: "Rock",
  },
  {
    id: 4,
    title: "Yellow",
    artist: "Coldplay",
    duration: 255,
    genre: "Alternative",
  },
  { id: 5, title: "Hello", artist: "Adele", duration: 295, genre: "Pop" },
];

function App() {
  //backend logic
  const [selectedGenre, setSelectedGenre] = useState("");
  //XML
  return (
    <div className="container-fluid">
      <div className="container">
        {/* title */}
        <div className="row">
          <div className="text-box">
            <h1>Music Genre Selector</h1>
          </div>
        </div>

        {/* buttons */}
        <div className="row">
          <div className="col-lg-12">
            <button
              type="button"
              className="btn btn-outline-dark m-1"
              onClick={() => setSelectedGenre("Rock")}
            >
              Rock
            </button>
            <button
              type="button"
              className="btn btn-outline-dark m-1"
              onClick={() => setSelectedGenre("Alternative")}
            >
              Alternative
            </button>
            <button
              type="button"
              className="btn btn-outline-dark m-1"
              onClick={() => setSelectedGenre("Pop")}
            >
              Pop
            </button>
          </div>
        </div>

        {/* Display message or genre */}
        <div className="row">
          {selectedGenre ? (
            <Genre genre={selectedGenre} songs={songs} />
          ) : (
            <div className="text-box">
              <h5>Please select a genre to see the songs</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
