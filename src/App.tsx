import { Routes, Route } from "react-router-dom";

import WeatherPage from "./pages/WeatherPage/WeatherPage";
import LookPage from "./pages/LookPage/LookPage";

import './App.css';

function App() {

  return (
    <Routes>
      <Route path="/" element={<WeatherPage />} />
      <Route path="/look" element={<LookPage />} />
    </Routes>
  )
}

export default App
