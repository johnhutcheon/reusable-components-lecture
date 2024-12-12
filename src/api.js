import axios from "axios";

const planetsApi = axios.create({
  baseURL: "https://space-facts.herokuapp.com/api",
});

export const fetchPlanets = () => {
  return planetsApi.get("/planets").then(({ data }) => {
    return data.planets;
  });
};

export const fetchAllRockPlanets = () => {
  return planetsApi.get("/planets?type=rock").then(({ data }) => {
    return data.planets;
  });
};

