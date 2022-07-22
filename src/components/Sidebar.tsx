import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div>
      <section>
        <div className="side-bar-container">
          <i className="fa-solid fa-bars"></i>
          <div className="side-bar-menu">
            <nav>
              <ul>
                <li>
                  <Link to="/city/state">Search by city and state</Link>
                </li>
                <li>
                  <Link to="/zipcode">Search by Zipcode</Link>
                </li>
                <li>
                  <Link to="/vaccine">Search by Vaccine</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}
