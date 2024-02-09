import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StartMenuPage from "./pages/start-menu-page/start-menu-page";
import ConfigMenuPage from "./pages/config-menu-page/config-menu-page";
import GamePage from "./pages/game-page/game-page";

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/config" element={<ConfigMenuPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/" element={<StartMenuPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
