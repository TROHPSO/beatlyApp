import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectGenres = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const navigate = useNavigate();

  const genres = ["Pop", "Rock", "Jazz", "Hip-Hop", "Classique", "Électronique", "Reggae", "Country", "Métal", "Blues"];

  // Fonction pour gérer le clic sur un genre
  const handleGenreClick = (genre) => {
    if (!selectedGenres.includes(genre)) {
      // Ajouter le genre à la liste sélectionnée
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  // Soumettre les genres sélectionnés et rediriger vers la page "matching"
  const handleSubmit = () => {
    if (selectedGenres.length > 0) {
      navigate("/profil", { state: { selectedGenres } });  // Passer les genres sélectionnés à la page de matching
    }
  };

  return (
    <div>
      <h2>Sélectionnez et classez vos genres préférés</h2>
      <p>Cliquez sur les genres dans l'ordre de votre préférence :</p>

      {/* Affichage des genres */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {genres.map((genre) => (
          <button
            key={genre}
            style={{ margin: "10px", padding: "10px", backgroundColor: selectedGenres.includes(genre) ? "lightblue" : "lightgray" }}
            onClick={() => handleGenreClick(genre)}
            disabled={selectedGenres.includes(genre)}  // Désactiver le bouton s'il est déjà sélectionné
          >
            {genre}
          </button>
        ))}
      </div>

      

      {/* Affichage des genres sélectionnés et leur ordre */}
      {selectedGenres.length > 0 && (
        <div>
          <h2>Votre classement des genres :</h2>
          <ol>
            {selectedGenres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ol>
        </div>
      )}

       {/* Bouton pour valider la sélection, seulement quand 10 genres sont sélectionnés */}
       {selectedGenres.length === genres.length && (
        <div className="is-fixed-bottom">
          <button onClick={handleSubmit}>
            Valider
          </button>
        </div>
      )}

      
    </div>
  );
};

export default SelectGenres;
