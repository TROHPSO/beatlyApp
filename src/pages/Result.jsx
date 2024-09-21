// pages/Result.js
import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const { state } = useLocation();
  const { selectedGenres } = state || {};

  return (
    <div>
      <h1>Résultat du matching</h1>
      <p>Vous avez sélectionné les genres suivants :</p>
      <ul>
        {selectedGenres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
      <h2>Votre taux de matching : 85%</h2> {/* Exemple de résultat */}
    </div>
  );
};

export default Result;
