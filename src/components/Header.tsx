import "./Header.css";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import logo from "../assets/vaccine3.png";

export default function Header() {
  const { user } = useContext(AuthContext);
  return (
    <header className="header">
      <div className="icon-container">
        <div className="logo-name">
          <h1 className="child1">
            <img src={logo} alt="logot" />
          </h1>

          <h1 className="child1">
            <span>COVID-19</span>
            <br />
            <span> VACCINE FINDER</span>
          </h1>

          {/* <div className="Covid-title"></div> */}
        </div>
      </div>
    </header>
  );
}
