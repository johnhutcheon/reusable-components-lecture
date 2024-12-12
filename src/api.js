import axios from "axios";

const planetsApi = axios.create({
  baseURL: "https://space-facts.herokuapp.com/api",
});

export const fetchPlanets = (planet_type) => {
  return planetsApi.get("/planets", {
    params: {
      type: planet_type
    }
  }).then(({ data }) => {
    return data.planets;
  });
};

// export const fetchAllRockPlanets = () => {
//   return planetsApi.get("/planets?type=rock").then(({ data }) => {
//     return data.planets;
//   });
// };

// export const fetchAllGasPlanets = () => {
//   return planetsApi.get("/planets?type=gas").then(({ data }) => {
//     return data.planets;
//   });
// };
