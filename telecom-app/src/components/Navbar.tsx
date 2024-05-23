import './navbar.css'
import logo from "../assets/Tunisie-Telecom-logo.png";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  return (
    <div style={{backgroundColor:'background-color: #dbcbd8',
backgroundImage: 'linear-gradient(316deg, #dbcbd8 0%, #2e4057 74%)'}}>
      <nav>
        <img src={logo} />
        <a href="/equipments"> Les équipements </a>
        <a href="/interventions">Les interventions </a>
        <a href="/">Se déconnecter <MdLogout></MdLogout></a>
      </nav>
    </div>
  );
}

export default Navbar
