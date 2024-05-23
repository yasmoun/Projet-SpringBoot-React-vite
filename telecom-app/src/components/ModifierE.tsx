import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import {
  getEquipmentById,
  updateEquipment,
} from "../services/EquipmentService";
import { useNavigate, useParams } from "react-router-dom";
import { AxiosResponse, AxiosError } from "axios";

import "./style.css";

interface Equipment {
  id: string;
  name: string;
  type: string;
  marque: string;
  centre: string;
  domaine: string;
  date: string;
}

const ModifierE = () => {
  const { id: equipmentId } = useParams(); // Renommage de id pour éviter les conflits
  const navigator = useNavigate();

  const [equipment, setEquipment] = useState<Equipment | null>(null);
  const [errors, setErrors] = useState({
    name: "",
    type: "",
    marque: "",
    date: "",
  });
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  async function fetchEquipment() {
    try {
      if (equipmentId) {
        const response = await getEquipmentById(equipmentId);
        setEquipment(response.data);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération de l'équipement:", error);
    }
  }

  fetchEquipment();
}, [equipmentId]);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setEquipment({ ...equipment!, [name]: value });
  }

  function saveEquipment(e: FormEvent) {
    e.preventDefault();
    if (!equipment) return;

    if (validateForm()) {
      updateEquipment(equipment.id, equipment)
        .then((response: AxiosResponse<any>) => {
          console.log(response.data);
          navigator("/equipments");
        })
        .catch((error: AxiosError<any>) => {
          console.error(error);
        });
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };
    // Validation des champs
    setErrors(errorsCopy);
    return valid;
  }

  if (loading) {
    return <div>Chargement...</div>;
  }
if (!equipment) return <div>Chargement...</div>;
  return (
    
    <div className="container">
      <h2 className="text-center">Modifier équipement</h2>
      <div className="card-body">
        <form onSubmit={saveEquipment}>
          <div className="mb-3">
            <label className="form-label">Id d'équipement :</label>
            <input
              type="number"
              className="form-control"
              placeholder="Entrer l'id d'équipement"
              name="id"
              value={equipment?.id}
              onChange={handleChange}
              disabled
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Nom d'équipement :</label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Entrer le nom d'équipement"
              name="name"
              value={equipment?.name}
              onChange={handleChange}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Type :</label>
            <input
              type="text"
              className={`form-control ${errors.type ? "is-invalid" : ""}`}
              placeholder="Entrer le type"
              name="type"
              value={equipment?.type}
              onChange={handleChange}
            />
            {errors.type && (
              <div className="invalid-feedback">{errors.type}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Marque :</label>
            <input
              type="text"
              className={`form-control ${errors.marque ? "is-invalid" : ""}`}
              placeholder="Entrer la marque"
              name="marque"
              value={equipment?.marque}
              onChange={handleChange}
            />
            {errors.marque && (
              <div className="invalid-feedback">{errors.marque}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Sélectionner le domaine :</label>
            <select
              className="form-select"
              name="domaine"
              value={equipment?.domaine}
              onChange={handleChange}
            >
              <option value="Energétique">Energétique</option>
              <option value="Télécommunication">Télécommunication</option>
              <option value="Sécurité">Sécurité</option>
              <option value="Climatisation et refroidissement">
                Climatisation et refroidissement
              </option>
              <option value="Informatique">Informatique</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Sélectionner le Centre :</label>
            <select
              className="form-select"
              name="centre"
              value={equipment?.centre}
              onChange={handleChange}
            >
              <option value="Jendouba">Jendouba</option>
              <option value="Ariana">Ariana</option>
              {/* Ajoutez d'autres options ici */}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Date d'entrée :</label>
            <input
              type="text"
              className={`form-control ${errors.date ? "is-invalid" : ""}`}
              placeholder="Entrer la date : dd/mm/yyyy"
              name="date"
              value={equipment?.date}
              onChange={handleChange}
            />
            {errors.date && (
              <div className="invalid-feedback">{errors.date}</div>
            )}
          </div>
          <div className="text-center">
            <button className="btn btn-success" type="submit">
              Modifier
            </button>
          </div>
        </form>
      </div>
      <a
        href="/equipments"
        style={{
          color: "blue",
          fontSize: "23px",
          textAlign: "right",
        }}
      >
        <br />
        <IoMdArrowRoundForward /> Retour
      </a>
    </div>
  );
};

export default ModifierE;
