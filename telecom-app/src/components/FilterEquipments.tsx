import React, { useState, useEffect } from "react";
import { listEquipments } from "../services/EquipmentService";
import { useParams } from "react-router-dom";

const FilterEquipments: React.FC = () => {
  const { domaine } = useParams<{ domaine: string }>();
  const [equipments, setEquipments] = useState<Equipment[]>([]);
  useEffect(() => {
    console.log("Received Domaine:", domaine);
  }, [domaine]);
 
  useEffect(() => {
    listEquipments()
      .then((response) => {
        setEquipments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <h2>Liste des équipements selon le domaine "{domaine}"</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Id d'équipement</th>
            <th>Nom d'équipement</th>
            <th>Type</th>
            <th>Marque</th>
            <th>Centre</th>
            <th>Date d'entrée</th>
          </tr>
        </thead>
        <tbody>
          {equipments.map((equipment: Equipment) => {
            if (equipment.domaine === domaine) {
              return (
                <tr key={equipment.id}>
                  <td>{equipment.id}</td>
                  <td>{equipment.name}</td>
                  <td>{equipment.type}</td>
                  <td>{equipment.marque}</td>
                  <td>{equipment.centre}</td>
                  <td>{equipment.date}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FilterEquipments;