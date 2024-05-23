import React from 'react'
import Navbar from './Navbar';
import Equipments from './Equipments';
import Footer from './Footer';
import EquipmentComponent from './EquipmentComponent';
import { useState } from 'react';
const ListEquipments = () => {
      const [selectedDomaine, setSelectedDomaine] = useState<string>("");

  return (
    <>
      <Navbar />
      <EquipmentComponent  />
      <Equipments />
      <Footer />
    </>
  );
}

export default ListEquipments;
