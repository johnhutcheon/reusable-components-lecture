import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PlanetList } from "./components/PlanetList/PlanetList";
import { Header } from "./components/Header/Header";
import { RockPlanetsList } from "./components/RockPlanetsList/RockPlanetsList";

function App() {
  return (
    <div id="app">
      <Header />
      <Routes>
        <Route path="/planets/" element={<PlanetList />}></Route>
        <Route path="/planets/rock" element={<RockPlanetsList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
