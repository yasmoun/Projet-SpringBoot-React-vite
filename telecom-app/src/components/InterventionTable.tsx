import React from "react";
import Navbar from "./Navbar";
import InterventionComponent from "./InterventionComponent";
import Footer from "./Footer";
import FilterIntervention from "./filterIntervention";
import { useState, useEffect } from "react";
function InterventionTable() {
  const [selectedDomaine, setSelectedDomaine] = useState<string>("");
  useEffect(() => {
    console.log("Selected Domaine:", selectedDomaine);
  }, [selectedDomaine]);
  return (
    <div>
      <Navbar />
      <InterventionComponent />
      <FilterIntervention />
      <Footer />
    </div>
  );
}

export default InterventionTable;
