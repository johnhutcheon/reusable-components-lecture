import "./RockPlanetsList.css";
import { useState, useEffect } from "react";
import { fetchAllRockPlanets } from "../../api";
import loadingPlanet from "../../assets/loading-planet.png";

export const RockPlanetsList = () => {
  const [rockPlanets, setRockPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchAllRockPlanets().then((planets) => {
      setRockPlanets(planets);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <section className="loading">
      <h2>Loading!</h2>
      <img
        src={loadingPlanet}
        alt="a big red planet"
        width="200px"
        className="loading-planet"
      />
    </section>
  ) : (
    <section id="planet-list-wrapper">
      <ul id="planets-list">
        {rockPlanets.map((planet, i) => {
          return (
            <section id="planet-card" key={i}>
              <h3>Name: {planet.planet_name}</h3>
              <p>Moon Count: {planet.moon_count}</p>
              <p>Au From Sun: {planet.au_from_sun}</p>
              <p>Type: {planet.type}</p>
            </section>
          );
        })}
      </ul>
    </section>
  );
};
