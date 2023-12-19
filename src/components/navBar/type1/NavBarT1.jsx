import "./navBarT1.css";
import { HashLink as Link } from "react-router-hash-link";
import logo1 from "../../../assets/logo/Logo.jpg";
import logo2 from "../../../assets/logo/Logo2.jpg";
const NavBarT1 = ({ logo, textColor }) => {
  return (
    <nav className="navBar">
      {logo == 1 ? (
        <img src={logo1} className="logo" alt="logo small image" />
      ) : (
        <img src={logo2} className="" alt="logo large image" />
      )}

      <ul className={textColor == 1 ? " navBarMenu" : "navBarMenu navBarMenu2"}>
        <li id={logo != 1 ? "goToHistory" : ""}>
          {logo == 1 ? (
            <Link to="#goToHistory">01. HISTORY</Link>
          ) : (
            "01. HISTORY"
          )}
        </li>
        <li>02. TEAM</li>
      </ul>
    </nav>
  );
};

export default NavBarT1;

//0 second logo
//1 first logo
