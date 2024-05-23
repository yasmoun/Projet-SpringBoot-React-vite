import React ,{useEffect, useState}from 'react'
import {listEquipments} from '../services/EquipmentService'
import './style.css'
import { FaMagic } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Equipments =()=>{

const [equipments, setEquipments] = useState<Equipment[]>([]);  useEffect(() => {
    listEquipments().then((response) => {
        setEquipments(response.data);
      }).catch((error) => {
        console.error(error);
      })
  },[]) 

  const navigator = useNavigate();
const [showAlert, setShowAlert] = useState(false);
function handleMagicClick (id:number) {
  navigator(`/equipments/modifier/${id}`, { state: { id } });
};
  return (
    <div className="contain">
      <div className="container">
        

        <h2 className="text-center">Liste des équipements</h2>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> Id d'équipement</th>
              <th> Nom d'équipement</th>
              <th> Type </th>
              <th> Marque </th>
              <th> Domaine </th>
              <th> Centre </th>
              <th> Date d'entrée </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {equipments.map((equipment) => (
              <tr key={equipment.id}>
                <td> {equipment.id}</td>
                <td> {equipment.name}</td>
                <td> {equipment.type}</td>
                <td> {equipment.marque}</td>
                <td> {equipment.domaine}</td>
                <td> {equipment.centre}</td>
                <td> {equipment.date}</td>
                <td>
                  {" "}
                  <FaMagic
                    onClick={() => handleMagicClick(equipment.id)}
                    style={{ cursor: "pointer" }}
                  />{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Equipments
