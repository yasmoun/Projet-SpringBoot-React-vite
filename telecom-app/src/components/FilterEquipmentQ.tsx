import React, { useState, ChangeEvent, FormEvent } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
function FilterEquipmentQ() {
  const [nameE, setNameE] = useState("");
  const [marqueE, setMarqueE] = useState("");
  const [errors, setErrors] = useState({
    nameE: "",
    marqueE: "",
  });

  const navigator = useNavigate();


  function handleNameE(e: React.ChangeEvent<HTMLInputElement>) {
    setNameE(e.target.value);
  }

  
  function handleMarqueE(e: React.ChangeEvent<HTMLInputElement>) {
    setMarqueE(e.target.value);
  }
  function saveIntervention(e: FormEvent) {
    e.preventDefault();
    if (validateForm()) {
      const intervention = {
        nameE,
        marqueE,
      };
      console.log(intervention);

    navigator(`/equipments/${nameE}/${marqueE}`);
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };
    if (nameE.trim()) {
      errorsCopy.nameE = "";
    } else {
      errorsCopy.nameE = "nom d'équipement est obligatoire";
      valid = false;
    }
    if (marqueE.trim()) {
      errorsCopy.marqueE = "";
    } else {
      errorsCopy.marqueE = "marque d'équipement est obligatoire";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  return (
    <html>
      <div className="containe">
        <div className="container">
          <br></br>
          <br></br>
          <br></br>
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <br></br>
              <h2 className="text-center">Lister selon la quantité</h2>
              <br></br>
              <div className="card-body">
                <form>
                  <div className="form-group mb-2">
                    <label className="form-label">Nom d'équipement : </label>
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
                    {errors.nameE && (
                      <div className="invalid-feedback"> {errors.nameE}</div>
                    )}
                  </div>

                  <div className="form-group mb-2">
                    <label className="form-label">Marque : </label>
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
                    <div className="invalid-feedback"> {errors.marqueE}</div>
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-success"
                      onClick={saveIntervention}
                    >
                      Lister
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
            }}
          >
            <br></br>
            <br></br>
            <IoMdArrowRoundForward /> Retour
          </a>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </html>
  );
}

export default FilterEquipmentQ;
