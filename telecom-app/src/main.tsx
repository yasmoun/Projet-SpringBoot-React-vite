  import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom'
import ListEquipments from './components/ListEquipments'
import AddEquipment from './components/AddEquipment'
import ListInterventions from './components/ListInterventions'
import AddIntervention from './components/AddIntervention'
import EquitmentTable from './components/EquitmentTable'
import EquitmentTableM from './components/EquitmentTableM'
import InterventionTable from './components/InterventionTable'
import InterventionTableM from './components/InterventionTableM'
import InterventionTableEt from './components/InterventionTableEt'
import EquitmentTableQ from './components/EquitmentTableQ'
import ListageEquipment from './components/ListageEquipment'
import FilterEquipmentQ from './components/FilterEquipmentQ'
import QQ from './components/QQ'
import InterventionTableType from './components/InterventionTableType'
import ModifierEquipment from './components/ModifierEquipment'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "equipments",
    element: <ListEquipments />,
  },
  {
    path: "add-equipment",
    element: <AddEquipment />,
  },
  {
    path: "interventions",
    element: <ListInterventions />,
  },
  {
    path: "add-intervention",
    element: <AddIntervention />,
  },
  {
    path: "/equipment/domaine/:domaine",
    element: <EquitmentTable />,
  },
  {
    path: "/equipment/marque/:marque",
    element: <EquitmentTableM />,
  },
  {
    path: "/intervention/domaine/:domaine",
    element: <InterventionTable />,
  },
  {
    path: "/intervention/marque/:marque",
    element: <InterventionTableM />,
  },
  {
    path: "/intervention/etat/:etatE",
    element: <InterventionTableEt />,
  },
  {
    path: "/intervention/type/:typeI",
    element: <InterventionTableType />,
  },
  {
    path: "/equipment/q",
    element: <QQ />,
  },
  {
    path: "/equipments/:nameE/:marqueE",
    element: <EquitmentTableQ />,
  },
  {
    path: "/equipments/modifier/:id",
    element: <AddEquipment />,
  },
  {
    path: "/interventions/modifier/:idi",
    element: <AddIntervention />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
