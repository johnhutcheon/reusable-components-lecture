import "./PlanetList.css";
import { useEffect, useState } from "react";
import { fetchPlanets } from "../../api";
import loadingPlanet from "../../assets/loading-planet.png";

export const PlanetList = () => {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchPlanets().then((planets) => {
      setPlanets(planets);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <div className="loading">
      <h2>Loading!</h2>
      <img
        src={loadingPlanet}
        alt="a big red planet"
        width="200px"
        className="loading-planet"
      />
    </div>
  ) : (
    <div id="planet-list-wrapper">
      <ul id="planets-list">
        {planets.map((planet, i) => {
          return (
            <div id="planet-card" key={i}>
              <h3>Name: {planet.planet_name}</h3>
              <p>Moon Count: {planet.moon_count}</p>
              <p>Au From Sun: {planet.au_from_sun}</p>
              <p>Type: {planet.type}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
