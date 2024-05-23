import React from "react";
import Navbar from "./Navbar";
import InterventionComponent from "./InterventionComponent";
import Footer from "./Footer";
import FilterEtatEquipment from "./FilterEtatEquipment";
import { useState, useEffect } from "react";
function InterventionTableEt() {
  const [selectedDomaine, setSelectedDomaine] = useState<string>("");
  useEffect(() => {
    console.log("Selected Domaine:", selectedDomaine);
  }, [selectedDomaine]);
  return (
    <div>
      <Navbar />
      <InterventionComponent />
      <FilterEtatEquipment />
      <Footer />
    </div>
  );
}


export default InterventionTableEt;
