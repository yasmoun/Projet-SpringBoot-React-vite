import axios from "axios";
const REST_API_BASE_URL='http://localhost:8080/api/equipment';
export const listEquipments=()=> axios.get(REST_API_BASE_URL);
export const createEquipment=(equipment)=>axios.post(REST_API_BASE_URL,equipment);
// Fonction pour récupérer un équipement par son ID
export const getEquipmentById = (id) => axios.get(REST_API_BASE_URL+"/"+id);
// Fonction pour mettre à jour un équipement
export const updateEquipment = (id ,equipment) => axios.put(REST_API_BASE_URL + "/" + id,equipment);

