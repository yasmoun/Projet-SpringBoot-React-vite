import React from "react";
import Navbar from "./Navbar";
import InterventionComponent from "./InterventionComponent";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import FiltreMarqueIntervention from "./FiltreMarqueIntervention";

function InterventionTableM() {
  const [selectedMarque, setSelectedMarque] = useState<string>("");
  useEffect(() => {
    console.log("Selected marque:", selectedMarque);
  }, [selectedMarque]);
  return (
    <div>
      <Navbar />
      <InterventionComponent />
      <FiltreMarqueIntervention />
      <Footer />
    </div>
  );
}

export default InterventionTableM;
