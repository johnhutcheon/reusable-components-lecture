import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PlanetList } from "./components/PlanetList/PlanetList";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <section id="app">
      <Header />
      <Routes>
        <Route path="/planets/" element={<PlanetList />}></Route>
        <Route path="/planets/:planet_type" element={<PlanetList />}></Route>
      </Routes>
    </section>
  );
}

export default App;
