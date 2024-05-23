import Navbar from "./Navbar";
import InterventionComponent from "./InterventionComponent";
import Footer from "./Footer";
import FilterIntervention from "./filterIntervention";
import { useState, useEffect } from "react";
import FilterInterventionType from "./FilterInterventionType";
function InterventionTableType() {
  const [selectedDomaine, setSelectedDomaine] = useState<string>("");
  useEffect(() => {
    console.log("Selected Domaine:", selectedDomaine);
  }, [selectedDomaine]);
  return (
    <div>
      <Navbar />
      <InterventionComponent />
      <FilterInterventionType />
      <Footer />
    </div>
  );
}

export default InterventionTableType;
