import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SelectGenres from './pages/SelectGenres';
import Splashscreen from './pages/splashscreen';
import Result from './pages/Result';
import Matching from './pages/Matching';
import Profil from './pages/Profil';


function App() {
  return (
    <Router>
      <Routes>
        {/* Page d'accueil qui affiche le Login */}
        <Route path="/" element={<Splashscreen />} />

        {/* Splashscreen */}
        <Route path="/splashscreen" element={<Splashscreen />} />

        {/* Sélection des genres */}
        <Route path="/select-genres" element={<SelectGenres />} />

        {/* Profil */}
        <Route path="/profil" element={<Profil />} />

        {/* Matching */}
        <Route path="/matching" element={<Matching />} />

        {/* Résultat du matching */}
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
