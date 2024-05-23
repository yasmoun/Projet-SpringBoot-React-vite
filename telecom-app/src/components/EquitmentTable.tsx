import React from 'react'
import Navbar from './Navbar';
import EquipmentComponent from './EquipmentComponent';
import Footer from './Footer';
import FilterEquipments from './FilterEquipments';
import { useState,useEffect } from 'react';

function EquitmentTable() {
    const [selectedDomaine, setSelectedDomaine] = useState<string>("");
  useEffect(() => {
    console.log("Selected Domaine:", selectedDomaine);
  }, [selectedDomaine]);
    return (
    <div>
      <Navbar />
      <EquipmentComponent />
      <FilterEquipments />
      <Footer />
    </div>
  );
}

export default EquitmentTable
