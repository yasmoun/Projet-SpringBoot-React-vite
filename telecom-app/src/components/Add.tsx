import React, { useState,ChangeEvent,FormEvent, useEffect } from 'react'
import { IoMdArrowRoundForward } from "react-icons/io";
import { createEquipment, getEquipmentById, updateEquipment } from '../services/EquipmentService';
import { useNavigate } from 'react-router-dom';
import {  useParams } from "react-router-dom";

import './style.css'
const Add = () => {
    const [id, setId] = useState("");
    const[name,setName]=useState('');
    const [type, setType] = useState("");
    const [marque, setMarque] = useState("");
    const [centre, setCentre] = useState("Jendouba");
    const [domaine, setDomaine] = useState("Energétique");
    const [date, setDate] = useState("");

const [errors,setErrors] =useState({
  name:'',
  type:'',
  marque:'',
  date:''
})
const {id :Id}=useParams();

const navigator=useNavigate();

const options = [
  { label: "Energétique", value: "Energétique" },
  { label: "Télécommunication", value: "Télécommunication" },
  { label: "Sécurité", value: "Sécurite" },
  { label: "Climatisation et refroidissement", value: "Climatisation et refroidissement" },
  { label: "Informatique", value: "Informatique" },
];
const [showAlert, setShowAlert] = useState(false);

const optionsCentre = [
  { label: "Jendouba", value: "Jendouba" },
  { label: "Ariana", value: "Ariana" },
  { label: "Béja", value: "Béj" },
  {
    label: "Bizerte",
    value: "Bizerte",
  },
  { label: "Ben Arous", value: "Ben Arous" },
  { label: "Tataouine", value: "Tataouine" },
  { label: "Tozeur", value: "Tozeur" },
  { label: "Tunis", value: "Tunis" },
  { label: "Zaghouan", value: "Zaghouan" },
  { label: "Seliana", value: "Seliana" },
  { label: "Sousse", value: "Sousse" },
  { label: "Sidi Bouzid", value: "Sidi Bouzid" },
  { label: "Sfax", value: "Sfax" },
  { label: "Gabès", value: "Gabès" },
  { label: "Kébili", value: "Kébili" },
  { label: "Kasserine", value: "Kasserine" },
  { label: "Gafsa", value: "Gafsa" },
  { label: "Kairouan", value: "Kairouan" },
  { label: "Kef", value: "Kef" },
  { label: "Médenine", value: "Médenine" },
  { label: "Monastir", value: "Monastir" },
  { label: "Manouba", value: "Manouba" },
  { label: "Mahdia", value: "Mahdia" },
  { label: "Nabeul", value: "Nabeul" },
];

  function handleId(e: React.ChangeEvent<HTMLInputElement>) {
    setId(e.target.value);
  }
    function handleName(e: React.ChangeEvent<HTMLInputElement>) {
      setName(e.target.value);
    }
    function handleType(e: React.ChangeEvent<HTMLInputElement>) {
      setType(e.target.value);
    }
    const handleDomaine = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setDomaine(e.target.value);
    };
    function handleMarque(e: React.ChangeEvent<HTMLInputElement>) {
      setMarque(e.target.value);
    }
    function handleCentre(e: React.ChangeEvent<HTMLSelectElement>) {
      setCentre(e.target.value);
    }

    function handleDate(e: React.ChangeEvent<HTMLInputElement>) {
      setDate(e.target.value);
    }

    function saveorModifierEquipment(e: FormEvent){
        e.preventDefault();
        const equipment = { id, name, type, marque, centre, domaine, date };
        console.log(equipment);
        if(validateForm()){
          if(Id){
            updateEquipment(id,equipment).then((response)=>{
              console.log(response.data);
alert("modification terminée avec succés!");
             
              navigator("/equipments");
              
            }).catch(error => {
              console.error(error);
            })
          }
        else{
           createEquipment(equipment)
             .then((response) => {
               console.log(response.data);
               setShowAlert(true);
              alert("ajout avec succèss!");
               navigator("/equipments");
             })
             .catch((error) => {
               console.error(error);
             });
        }
       
      } 
    }


function validateForm(){
  let valid=true;
  const errorsCopy={... errors}
  if(name.trim()){
    errorsCopy.name='';
  }
  else{
    errorsCopy.name="nom d'équipement est obligatoire";
    valid=false;
  }
  if (type.trim()) {
    errorsCopy.type = "";
  } else {
    errorsCopy.type = "type d'équipement est obligatoire";
    valid = false;
  }
  if (marque.trim()) {
    errorsCopy.marque = "";
  } else {
    errorsCopy.marque = "marque d'équipement est obligatoire";
    valid = false;
  }
  
  if (date.trim()) {
    errorsCopy.date = "";
  } else {
    errorsCopy.date = "date d'entrée est obligatoire";
    valid = false;
  }
  
  setErrors(errorsCopy);
  return valid;
}

function gageTitle(){
  if(Id){
    return <h2 className="text-center">Modifier équipement</h2>;
  }
  else{
    return <h2 className="text-center">Ajouter équipement</h2>;
  }
}


useEffect(()=> {
  if(Id){
    getEquipmentById(Id).then((response)=>{
      setId(response.data.id)
      setName(response.data.name)
      setType(response.data.type)
      setMarque(response.data.marque)
      setCentre(response.data.centre)
      setDate(response.data.date)
    }).catch(error => {
      console.error(console.error);
  })
    };
},[id]
)



  return (
    <div className="containe">
      <div className="container">
        
        <br></br>
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {gageTitle()}
            <div className="card-body">
              <form>
                <table>
                  <tr>
                    <td>
                      <label className="form-label"> Id d'équipement : </label>{" "}
                    </td>
                    <td>
                      <input
                        type="number"
                        placeholder="entrer l'id d'équipement"
                        name="id"
                        value={id}
                        onChange={handleId}
                      ></input>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="form-label">Nom d'équipement : </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="entrer le nom d'équipement"
                        name="name"
                        value={name}
                        className={`form-control ${
                          errors.name ? "is-invalid" : ""
                        }`}
                        onChange={handleName}
                      ></input>
                    </td>
                    {errors.name && (
                      <div className="invalid-feedback"> {errors.name}</div>
                    )}
                  </tr>
                  <tr>
                    <td>
                      <label className="form-label">Type : </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="entrer le type"
                        name="type"
                        value={type}
                        className={`form-control ${
                          errors.type ? "is-invalid" : ""
                        }`}
                        onChange={handleType}
                      ></input>
                    </td>
                    {errors.name && (
                      <div className="invalid-feedback"> {errors.type}</div>
                    )}
                  </tr>
                  <tr>
                    <td>
                      <label className="form-label">Marque : </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="entrer la marque"
                        name="marque"
                        value={marque}
                        className={`form-control ${
                          errors.marque ? "is-invalid" : ""
                        }`}
                        onChange={handleMarque}
                      ></input>
                    </td>
                    <div className="invalid-feedback"> {errors.marque}</div>
                  </tr>
                  <tr>
                    <td>
                      <label className="form-label">
                        Sélectionner le domaine :{" "}
                      </label>
                    </td>
                    <td>
                      <select
                        className="form-select"
                        onChange={handleDomaine}
                        value={domaine}
                      >
                        {options.map((option) => (
                          <option key={option.label}>{option.label}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="form-label">
                        Sélectionner le Centre :{" "}
                      </label>
                    </td>
                    <td>
                      <select
                        className="form-select"
                        onChange={handleCentre}
                        value={centre}
                      >
                        {optionsCentre.map((option) => (
                          <option key={option.label}>{option.label}</option>
                        ))}
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label className="form-label">Date d'entrée :</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="entrer la date : dd/mm/yyyy"
                        name="date"
                        value={date}
                        className={`form-control ${
                          errors.date ? "is-invalid" : ""
                        }`}
                        onChange={handleDate}
                      ></input>
                    </td>
                    <div className="invalid-feedback"> {errors.date}</div>
                  </tr>
                </table>
                <br></br>
                <div className="text-center">
                  <button
                    className="btn btn-success"
                    onClick={saveorModifierEquipment}
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
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
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default Add
