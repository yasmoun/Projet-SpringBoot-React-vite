import React, { useState, useEffect } from "react";
import { listInterventions } from "../services/InterventionService";
import { useParams } from "react-router-dom";
function FilterEtatEquipment() {
 const { etatE } = useParams<{ etatE : string }>();
  const [interventions, setInterventions] = useState<Intervention[]>([]);
  useEffect(() => {
    console.log("Received etat:", etatE);
  }, [etatE]);
 
  useEffect(() => {
    listInterventions()
      .then((response) => {
        setInterventions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <h2>Liste des interventions selon l'état "{etatE}"</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th> Id d'équipement</th>
            <th> Nom d'équipement</th>
            <th> Type </th>
            <th> Marque </th>
            <th> Domaine </th>
            <th> Centre </th>
            <th> Type d'intervention </th>
            <th> Nom de l'intervenant </th>
            <th> date début d'intervention </th>
            <th> date fin d'intervention </th>
            <th> Etat après intervention </th>
            <th> Observations </th>
          </tr>
        </thead>
        <tbody>
          {interventions.map((intervention: Intervention) => {
            if (intervention.etatE === etatE) {
              return (
                <tr key={intervention.idI}>
                  <td> {intervention.idEquip}</td>
                  <td> {intervention.nameE}</td>
                  <td> {intervention.typeE}</td>
                  <td> {intervention.marqueE}</td>
                  <td> {intervention.domaineE}</td>
                  <td> {intervention.centre}</td>
                  <td> {intervention.typeI}</td>
                  <td> {intervention.nameIntervenant}</td>
                  <td> {intervention.dateDI}</td>
                  <td> {intervention.dateFI}</td>
                  <td> {intervention.etatE}</td>
                  <td> {intervention.observations}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FilterEtatEquipment;
