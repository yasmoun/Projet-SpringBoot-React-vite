import React from "react";
import Navbar from "./Navbar";
import EquipmentComponent from "./EquipmentComponent";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import ListageEquipment from "./ListageEquipment";
function EquitmentTableQ() {
  const [selectedDomaine, setSelectedDomaine] = useState<string>("");
  useEffect(() => {
    console.log("Selected Domaine:", selectedDomaine);
  }, [selectedDomaine]);
  return (
    <div>
      <Navbar />
      <EquipmentComponent />
      <ListageEquipment />
      <Footer />
    </div>
  );
}

export default EquitmentTableQ;
