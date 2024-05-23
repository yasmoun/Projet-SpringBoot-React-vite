import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listEquipments } from "../services/EquipmentService";
import { listInterventions } from "../services/InterventionService";

function ListageEquipment() {
  const { nameE = "", marqueE = "" } = useParams<{
    nameE?: string;
    marqueE?: string;
  }>();

  const [functioningEquipmentCount, setFunctioningEquipmentCount] = useState(0);
  const [nonFunctioningEquipmentCount, setNonFunctioningEquipmentCount] =
    useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!nameE || !marqueE) {
          console.error("Invalid parameters received:", { nameE, marqueE });
          return;
        }

        // Fetch all equipments (assuming 'listEquipments' retrieves all data)
        const equipmentResponse = await listEquipments();
        const allEquipments = equipmentResponse.data;

        // Filter equipments by name and brand
        const filteredEquipments = allEquipments.filter(
          (equipment: Equipment) =>
            equipment.name === nameE && equipment.marque === marqueE
        );

        // Count functioning and non-functioning equipments based on equipments list
        const functioningCount = filteredEquipments.length;

        // Fetch all interventions (assuming 'listInterventions' retrieves all data)
        const interventionResponse = await listInterventions();
        const allInterventions = interventionResponse.data;

        // Filter interventions by name and brand
        const filteredInterventions = allInterventions.filter(
          (intervention: Intervention) =>
            intervention.nameE === nameE && intervention.marqueE === marqueE
        );

        // Count non-functioning equipments based on interventions list
        const nonFunctioningFromInterventions = filteredInterventions.reduce(
          (acc: number, intervention: Intervention) => {
            if (intervention.etatE === "Non Fonctionnel") {
              return acc + 1;
            }
            return acc;
          },
          0
        );

        // Update state with counts
        setFunctioningEquipmentCount(
          functioningCount - nonFunctioningFromInterventions );
        setNonFunctioningEquipmentCount(
          nonFunctioningFromInterventions
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [nameE, marqueE]);

  return (
    <div>
      <h2>Listage des équipements</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Nom d'équipement</th>
            <th>Marque</th>
            <th>Quantité Fonctionnelle</th>
            <th>Quantité Non Fonctionnelle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{nameE}</td>
            <td>{marqueE}</td>
            <td>{functioningEquipmentCount}</td>
            <td>{nonFunctioningEquipmentCount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ListageEquipment;
