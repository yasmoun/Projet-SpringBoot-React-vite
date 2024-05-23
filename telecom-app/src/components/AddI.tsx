import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import {
  createIntervention,
  getInterventionById,
  updateIntervention,
} from "../services/InterventionService";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
function AddI() {
  const [idEquip, setIdEquip] = useState("");
  const [nameE, setNameE] = useState("");
  const [typeE, setTypeE] = useState("");
  const [marqueE, setMarqueE] = useState("");
  const [centre, setCentre] = useState("Jendouba");
  const [domaineE, setDomaineE] = useState("Energétique");
  const [dateDI, setDateDI] = useState("");
  const [dateFI, setDateFI] = useState("");
  const [typeI, setTypeI] = useState("Entretien");
  const [etatE, setEtatE] = useState("Fonctionnel");
  const [cinIntervenant, setCinIntervenant] = useState("");
  const [nameIntervenant, setNameIntervenant] = useState("");
  const [observations, setObservations] = useState("");
  const [idi, setIdI] = useState("");

  const [errors, setErrors] = useState({
    nameE: "",
    typeE: "",
    marqueE: "",
    centre: "",
    dateDI: "",
    dateFI: "",
    etatE: "",
    nameIntervenant: "",
    observations: "",
  });

  const navigator = useNavigate();
  const { idi: Idi } = useParams();

  const options = [
    { label: "Energétique", value: "Energétique" },
    { label: "Télécommunication", value: "Télécommunication" },
    { label: "Sécurité", value: "Sécurité" },
    {
      label: "Climatisation et refroidissement",
      value: "Climatisation et refroidissement",
    },
    { label: "Informatique", value: "Informatique" },
  ];
  const optionsE = [
    { label: "Fonctionnel", value: "Fonctionnel" },
    { label: "Non Fonctionnel", value: "Non Fonctionnel" },
  ];
  const optionsEn = [
    { label: "Entretien", value: "Entretien" },
    { label: "Réparation", value: "Réparation" },
  ];

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
  function handleIdEquip(e: React.ChangeEvent<HTMLInputElement>) {
    setIdEquip(e.target.value);
  }
  function handleNameE(e: React.ChangeEvent<HTMLInputElement>) {
    setNameE(e.target.value);
  }
  function handleTypeE(e: React.ChangeEvent<HTMLInputElement>) {
    setTypeE(e.target.value);
  }
  const handleDomaineE = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDomaineE(e.target.value);
  };
  function handleMarqueE(e: React.ChangeEvent<HTMLInputElement>) {
    setMarqueE(e.target.value);
  }
  function handleCentre(e: React.ChangeEvent<HTMLSelectElement>) {
    setCentre(e.target.value);
  }
  function handleDateDI(e: React.ChangeEvent<HTMLInputElement>) {
    setDateDI(e.target.value);
  }
  function handleDateFI(e: React.ChangeEvent<HTMLInputElement>) {
    setDateFI(e.target.value);
  }
  function handleTypeI(e: React.ChangeEvent<HTMLSelectElement>) {
    setTypeI(e.target.value);
  }
  function handleEtatE(e: React.ChangeEvent<HTMLSelectElement>) {
    setEtatE(e.target.value);
  }
  function handleCinIntervenant(e: React.ChangeEvent<HTMLInputElement>) {
    setCinIntervenant(e.target.value);
  }
  function handleNameIntervenant(e: React.ChangeEvent<HTMLInputElement>) {
    setNameIntervenant(e.target.value);
  }
  function handleObservations(e: React.ChangeEvent<HTMLInputElement>) {
    setObservations(e.target.value);
  }

  function saveorModifierIntervention(e: FormEvent) {
    e.preventDefault();

    if (validateForm()) {
      const intervention = {
        idEquip,
        Idi,
        nameE,
        typeE,
        marqueE,
        domaineE,
        centre,
        dateDI,
        dateFI,
        typeI,
        etatE,
        cinIntervenant,
        nameIntervenant,
        observations,
      };
      console.log(intervention);
      if (Idi) {
        try {
          updateIntervention(Idi, intervention)
            .then((response) => {
              console.log(response.data);
              alert("ajout avec succés succèss!");

              navigator("/interventions");
            })
            .catch((error) => {
              console.error("Error updating intervention:", error);
            });
        } catch (error) {
          console.error(
            "An error occurred while updating intervention:",
            error
          );
        }
      } else {
        createIntervention(intervention)
          .then((response) => {
            console.log(response.data);
            navigator("/interventions");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (dateDI.trim()) {
      errorsCopy.dateDI = "";
    } else {
      errorsCopy.dateDI = "date début d'intervention est obligatoire";
      valid = false;
    }
    if (dateFI.trim()) {
      errorsCopy.dateFI = "";
    } else {
      errorsCopy.dateFI = "date fin d'intervention est obligatoire";
      valid = false;
    }

    if (etatE.trim()) {
      errorsCopy.etatE = "";
    } else {
      errorsCopy.etatE = "date d'entrée est obligatoire";
      valid = false;
    }
    if (nameIntervenant.trim()) {
      errorsCopy.nameIntervenant = "";
    } else {
      errorsCopy.nameIntervenant = "date d'entrée est obligatoire";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }
  useEffect(() => {
    if (Idi) {
      getInterventionById(Idi)
        .then((response) => {
          setIdI(response.data.Idi);
          setIdEquip(response.data.idEquip);
          setNameE(response.data.nameE);
          setTypeE(response.data.typeE);
          setMarqueE(response.data.marqueE);
          setDomaineE(response.data.domaineE);
          setCentre(response.data.centre);
          setDateDI(response.data.dateDI);
          setDateFI(response.data.dateFI);
          setCinIntervenant(response.data.cinIntervenant);
          setTypeI(response.data.typeI);
          setNameIntervenant(response.data.nameIntervenant);
          setEtatE(response.data.etatE);
          setObservations(response.data.observations);
        })
        .catch((error) => {
          console.error(console.error);
        });
    }
  }, [Idi]);

  function gageTitle() {
    if (Idi) {
      return <h2 className="text-center">Modifier intervention</h2>;
    } else {
      return <h2 className="text-center">Ajouter intervention</h2>;
    }
  }

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
                  <tbody>
                    <tr>
                      <td>
                        <label className="form-label">Centre : </label>
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

                      <span> {errors.centre}</span>
                    </tr>

                    <tr>
                      <td>
                        <label className="form-label">Id d'équipement : </label>
                      </td>
                      <td>
                        <input
                          type="number"
                          placeholder="entrer l'id d'équipement"
                          name="idEquip"
                          value={idEquip}
                          onChange={handleIdEquip}
                        ></input>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <label className="form-label">
                          Nom d'équipement :{" "}
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="entrer le nom d'équipement"
                          name="nameE"
                          value={nameE}
                          className={`form-control ${
                            errors.nameE ? "is-invalid" : ""
                          }`}
                          onChange={handleNameE}
                        ></input>
                      </td>

                      <span> {errors.nameE}</span>
                    </tr>

                    <tr>
                      <td>
                        <label className="form-label">
                          Type d'équipement:{" "}
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="entrer le type"
                          name="typeE"
                          value={typeE}
                          className={`form-control ${
                            errors.typeE ? "is-invalid" : ""
                          }`}
                          onChange={handleTypeE}
                        ></input>
                      </td>
                      <span>{errors.typeE}</span>
                    </tr>

                    <tr>
                      <td>
                        <label className="form-label">Marque : </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="entrer la marque"
                          name="marqueE"
                          value={marqueE}
                          className={`form-control ${
                            errors.marqueE ? "is-invalid" : ""
                          }`}
                          onChange={handleMarqueE}
                        ></input>
                      </td>
                      <span>{errors.marqueE}</span>
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
                          onChange={handleDomaineE}
                          value={domaineE}
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
                          Type d'intervention:{" "}
                        </label>
                      </td>
                      <td>
                        <select
                          className="form-select"
                          onChange={handleTypeI}
                          value={typeI}
                        >
                          {optionsEn.map((optionEn) => (
                            <option key={optionEn.label}>
                              {optionEn.label}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <label className="form-label">
                          Date début d'intervention :
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="entrer la date : dd/mm/yyyy"
                          name="dateDI"
                          value={dateDI}
                          className={`form-control ${
                            errors.dateDI ? "is-invalid" : ""
                          }`}
                          onChange={handleDateDI}
                        ></input>
                      </td>
                      <span> {errors.dateDI}</span>
                    </tr>

                    <tr>
                      <td>
                        <label className="form-label">
                          Date fin d'intervention :
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="entrer la date : dd/mm/yyyy"
                          name="dateFI"
                          value={dateFI}
                          className={`form-control ${
                            errors.dateFI ? "is-invalid" : ""
                          }`}
                          onChange={handleDateFI}
                        ></input>
                      </td>
                      <span>{errors.dateFI}</span>
                    </tr>

                    <tr>
                      <td>
                        <label className="form-label">
                          Etat après intervention:{" "}
                        </label>
                      </td>
                      <td>
                        <select
                          className="form-select"
                          onChange={handleEtatE}
                          value={etatE}
                        >
                          {optionsE.map((optionE) => (
                            <option key={optionE.label}>{optionE.label}</option>
                          ))}
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <label className="form-label">
                          Cin d'intervenant :{" "}
                        </label>
                      </td>
                      <td>
                        <input
                          type="number"
                          placeholder="entrer le cin de l'intervenant"
                          name="cinIntervenant"
                          value={cinIntervenant}
                          onChange={handleCinIntervenant}
                        ></input>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <label className="form-label">
                          Nom d'intervenant :{" "}
                        </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="entrer le nom de l'intervenant"
                          name="nomIntervenant"
                          value={nameIntervenant}
                          className={`form-control ${
                            errors.nameIntervenant ? "is-invalid" : ""
                          }`}
                          onChange={handleNameIntervenant}
                        ></input>
                      </td>
                      <span>{errors.nameIntervenant}</span>
                    </tr>

                    <tr>
                      <td>
                        <label className="form-label">Observations : </label>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="entrer les observations"
                          name="observations"
                          value={observations}
                          className={`form-control ${
                            errors.observations ? "is-invalid" : ""
                          }`}
                          onChange={handleObservations}
                        ></input>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br></br>
                <div className="text-center">
                  <button
                    className="btn btn-success"
                    onClick={saveorModifierIntervention}
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <a
          href="/interventions"
          style={{
            color: "blue",
            fontSize: "23px",
          }}
        >
          <IoMdArrowRoundForward /> Retour
        </a>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default AddI;
