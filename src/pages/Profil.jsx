// pages/Profil.js
import React from "react";
import { useLocation,useNavigate } from "react-router-dom";

const Profil = () => {
  const { state } = useLocation();
  const { selectedGenres } = state || {};

  const navigate = useNavigate(); // Correctement initialiser navigate


  const handleBackToHome = () => {
    navigate("/"); // Rediriger vers la page d'accueil (login)
  };

  return (
    <div>
      <h1>Profil</h1>
      <p>ss</p>
     
      
    </div>
  );
};

export default Profil;
