import React from "react";
import Navbar from "./Navbar";
import EquipmentComponent from "./EquipmentComponent";
import Footer from "./Footer";
import FilterEquipments from "./FilterEquipments";
import { useState, useEffect } from "react";
import FilterMarqueEquipments from "./FilterMarqueEquipments";

function EquitmentTableM() {
  const [selectedMarque, setSelectedMarque] = useState<string>("");
  useEffect(() => {
    console.log("Selected marque:", selectedMarque);
  }, [selectedMarque]);
  return (
    <div>
      <Navbar />
      <EquipmentComponent />
      < FilterMarqueEquipments/>
      <Footer />
    </div>
  );
}

export default EquitmentTableM;
