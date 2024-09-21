// pages/SplashScreen.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splashscreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/select-genres");  // Redirige vers la page de sélection des genres après 2 secondes
    }, 2000);

    return () => clearTimeout(timer);  // Nettoyer le timeout lorsque le composant est démonté
  }, [navigate]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <h1>Splash Screen</h1>
    </div>
  );
};

export default Splashscreen;
