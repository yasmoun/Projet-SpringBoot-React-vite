import axios from "axios";
const REST_API_BASE_URL = "http://localhost:8080/api/intervention";
export const listInterventions = () => axios.get(REST_API_BASE_URL);
export const createIntervention = (intervention) =>
  axios.post(REST_API_BASE_URL, intervention);
export const getInterventionById = (idi) => axios.get(REST_API_BASE_URL + "/" + idi);

export const updateIntervention = (idi, intervention) => axios.put(REST_API_BASE_URL + "/" +idi,intervention);