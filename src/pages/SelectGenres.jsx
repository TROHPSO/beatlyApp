// pages/SelectGenres.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectGenres = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const navigate = useNavigate();

  const genres = ["Pop", "Rock", "Jazz", "Hip-Hop", "Classique", "Électronique", "Reggae", "Country", "Métal", "Blues"];

  const handleGenreClick = (genre) => {
    setSelectedGenres((prevGenres) =>
      prevGenres.includes(genre) ? prevGenres.filter((g) => g !== genre) : [...prevGenres, genre]
    );
  };

  const handleSubmit = () => {
    if (selectedGenres.length > 0) {
      navigate("/matching", { state: { selectedGenres } });  // Passer les genres sélectionnés à la page de matching
    }
  };

  return (
    <div>
      <h1>Sélectionnez vos genres préférés</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {genres.map((genre) => (
          <button
            key={genre}
            style={{ margin: "10px", padding: "10px" }}
            onClick={() => handleGenreClick(genre)}
            className={selectedGenres.includes(genre) ? "selected" : ""}
          >
            {genre}
          </button>
        ))}
      </div>
      <button onClick={handleSubmit} disabled={selectedGenres.length === 0}>
        Valider
      </button>
    </div>
  );
};

export default SelectGenres;
