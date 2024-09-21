// pages/Matching.js
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Matching = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { selectedGenres } = state || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/result", { state: { selectedGenres } });  // Redirige vers la page de résultats après 2 secondes
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate, selectedGenres]);

  return (
    <div>
      <h1>Calcul du matching...</h1>
    </div>
  );
};

export default Matching;
