import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { listEquipments } from "../services/EquipmentService";
import "./style.css";

interface MenuItem {
  value: string;
  label: string;
}
interface MenuMItem {
  value: string;
  label: string;
}
const EquipmentComponent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [openM, setOpenM] = useState(false);
  
  const [marqueItems, setMarqueItems] = useState<MenuItem[]>([]);
  const navigator = useNavigate();

  const menuRef = useRef<HTMLDivElement | null>(null);
  const domaineRef = useRef<HTMLLIElement | null>(null);

  const marqueRef = useRef<HTMLLIElement | null>(null);
  const menuMRef = useRef<HTMLDivElement | null>(null);

  const menuItems: MenuItem[] = [
    { value: "Energétique", label: "Energétique" },
    { value: "Télécommuniaction", label: "Télécommunication" },
    { value: "Sécurité", label: "Sécurité" },
    {
      value: "Climatisation et refroidissement",
      label: "Climatisation et refroidissement",
    },
    { value: "Informatique", label: "Informatique" },
  ];

 useEffect(() => {
   const getUniqueMarques = async () => {
     try {
       const response = await listEquipments();
       const uniqueMarques: MenuItem[] = Array.from(
         new Set<string>(
           response.data.map(
             (equipment: { marque: string }) => equipment.marque
           )
         )
       ).map((marque) => ({ value: marque, label: marque }));

       setMarqueItems(uniqueMarques);
     } catch (error) {
       console.error(error);
     }
   };

   getUniqueMarques();
 }, []);

  const addNewEquipment = () => {
    navigator("/add-equipment");
  };

  const handleMenuItemClick = (selectedValue: MenuItem) => {
    navigator(`/equipment/domaine/${selectedValue.label}`, {
      state: { domaine: selectedValue.value },
    });
  };

  const handleMarqueClick = (selectedMarque: MenuMItem) => {
    console.log("Selected marque:", selectedMarque);
    navigator(`/equipment/marque/${selectedMarque.label}`, {
      state: { marque: selectedMarque.value },
    });
  };

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== domaineRef.current) {
      setOpen(false);
    }
  });
   window.addEventListener("click", (e) => {
     if (e.target !== menuMRef.current && e.target !== marqueRef.current) {
       setOpenM(false);
     }
   });
     
     const filterEquipmentQ = () => {
       navigator("/equipment/Q");
     };


  return (
    <div className="navbarEquipment">
      <ul className="liste">
        <li onClick={addNewEquipment} className="liste-li">
          Ajouter un équipement
        </li>
        <li
          className="liste-li"
          style={{ cursor: "pointer" }}
          onClick={() => setOpen(!open)}
          ref={domaineRef}
        >
          Domaine
          {open && (
            <div ref={menuRef} className="menu">
              <ul>
                {menuItems.map((menu) => (
                  <li
                    onClick={() => handleMenuItemClick(menu)}
                    className="menuItems"
                    key={menu.value}
                  >
                    {menu.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
        <li
          className="liste-li"
          style={{ cursor: "pointer" }}
          onClick={() => setOpenM(!open)}
          ref={marqueRef}
        >
          Marque
          {openM && (
            <div ref={menuMRef} className="menuM">
              <ul>
                {marqueItems.map((marque) => (
                  <li
                    onClick={() => handleMarqueClick(marque)}
                    className="menuItems"
                    key={marque.value}
                  >
                    {marque.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
        <li onClick={filterEquipmentQ} className="liste-li">
          Listage par quantité
        </li>
      </ul>
    </div>
  );
};

export default EquipmentComponent;
