import { Routes, Route } from "react-router-dom";

import { GlobalProvider } from "./context/GlobalContext";

import WeatherPage from "./pages/WeatherPage/WeatherPage";
import LookPage from "./pages/LookPage/LookPage";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<WeatherPage />} />
        <Route path="/look" element={<LookPage />} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
