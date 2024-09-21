// pages/Result.js
import React from "react";
import { useLocation,useNavigate } from "react-router-dom";

const Result = () => {
  const { state } = useLocation();
  const { selectedGenres } = state || {};

  const navigate = useNavigate(); // Correctement initialiser navigate


  const handleBackToHome = () => {
    navigate("/"); // Rediriger vers la page d'accueil (login)
  };

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

        {/* Bouton pour revenir à l'accueil */}
      <button onClick={handleBackToHome} style={{ marginTop: "20px" }}>
        Retour à l'accueil
      </button>
      
    </div>
  );
};

export default Result;
