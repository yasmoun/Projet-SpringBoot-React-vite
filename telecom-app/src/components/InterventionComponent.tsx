import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {listInterventions} from '../services/InterventionService'
import "./style.css";

interface MenuItem {
  value: string;
  label: string;
}
interface MenuMItem {
  value: string;
  label: string;
}
interface MenuEtat {
  value: string;
  label: string;
}
interface MenuType {
  value: string;
  label: string;
}
const InterventionComponent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [openM, setOpenM] = useState(false);
  const [openEt, setOpenEt] = useState(false);
  const [openTy, setOpenTy] = useState(false);

  const [marqueItems, setMarqueItems] = useState<MenuItem[]>([]);
  const navigator = useNavigate();

  const menuRef = useRef<HTMLDivElement | null>(null);
  const domaineRef = useRef<HTMLLIElement | null>(null);

  const menuEtRef = useRef<HTMLDivElement | null>(null);
  const etatERef = useRef<HTMLLIElement | null>(null);

    const menuTyRef = useRef<HTMLDivElement | null>(null);
    const typeRef = useRef<HTMLLIElement | null>(null);


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
   const menuEtats: MenuEtat[] = [
     { value: "Fonctionnel", label: "Fonctionnel" },
     { value: "Non Fonctionnel", label: "Non Fonctionnel" },
   ];
const menuTypes: MenuType[] = [
  { value: "Entretien", label: "Entretien" },
  { value: "Réparation", label: "Réparation" },

];
  useEffect(() => {
    const getUniqueMarques = async () => {
      try {
        const response = await listInterventions();
        const uniqueMarques: MenuItem[] = Array.from(
          new Set<string>(
            response.data.map(
              (intervention: { marqueE: string }) => intervention.marqueE
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

  const addNewIntervention = () => {
    navigator("/add-intervention");
  };

  const handleMenuItemClick = (selectedValue: MenuItem) => {
    navigator(`/intervention/domaine/${selectedValue.label}`, {
      state: { domaine: selectedValue.value },
    });
  };
  const handleMenuEtatClick = (selectedValue: MenuEtat) => {
    navigator(`/intervention/etat/${selectedValue.label}`, {
      state: { etatE: selectedValue.value },
    });
  };

  const handleMarqueClick = (selectedMarque: MenuMItem) => {
    console.log("Selected marque:", selectedMarque);
    navigator(`/intervention/marque/${selectedMarque.label}`, {
      state: { marque: selectedMarque.value },
    });
  };
  const handleMenuTypeClick = (selectedValue: MenuType) => {
    navigator(`/intervention/type/${selectedValue.label}`, {
      state: { typeI: selectedValue.value },
    });
  };

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== domaineRef.current) {
      setOpen(false);
    }
  });
   window.addEventListener("click", (e) => {
     if (e.target !== menuEtRef.current && e.target !== etatERef.current) {
       setOpenEt(false);
     }
   });
  window.addEventListener("click", (e) => {
    if (e.target !== menuMRef.current && e.target !== marqueRef.current) {
      setOpenM(false);
    }
  });
   window.addEventListener("click", (e) => {
     if (e.target !== menuTyRef.current && e.target !== typeRef.current) {
       setOpenTy(false);
     }
   });
  const marqueRef = useRef<HTMLLIElement | null>(null);
  const menuMRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="navbarEquipment">
      <ul className="liste">
        <li onClick={addNewIntervention} className="liste-li">
          Ajouter une intervention
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
        <li
          className="liste-li"
          style={{ cursor: "pointer" }}
          onClick={() => setOpenEt(!open)}
          ref={etatERef}
        >
          Etat
          {openEt && (
            <div ref={menuEtRef} className="menuEt">
              <ul>
                {menuEtats.map((etatE) => (
                  <li
                    onClick={() => handleMenuEtatClick(etatE)}
                    className="menuItems"
                    key={etatE.value}
                  >
                    {etatE.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
        <li
          className="liste-li"
          style={{ cursor: "pointer" }}
          onClick={() => setOpenTy(!openTy)}
          ref={typeRef}
        >
          Type
          {openTy && (
            <div ref={menuTyRef} className="menuTy">
              <ul>
                {menuTypes.map((menu) => (
                  <li
                    onClick={() => handleMenuTypeClick(menu)}
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
      </ul>
    </div>
  );
};
export default InterventionComponent;
