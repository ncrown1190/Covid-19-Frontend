import "./UserInformation.css";
import Information from "../models/Information";
import { useEffect, useState, useContext } from "react";
import { addUserData, fetchAllInformation } from "../services/userService";
//import UserInfoList from "./UserInfoList";
import AuthContext from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import Profile from "../models/Profile";

interface Props {
  onAddDetail: (newDetails: Information) => void;
}

export default function UserInformation() {
  const { user } = useContext(AuthContext);
  const { profile } = useContext(AuthContext);
  const [information, setInformation] = useState<Information[]>([]);
  const [name, setName] = useState("");
  const [vaccineName, setVaccineName] = useState("");
  const [doses, setDoses] = useState(0);
  const [submit, setSubmit] = useState(false);
  //const [profile, setProfile] = useState<Profile | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchAllInformation().then((res) => setInformation(res));
  }, []);

  // const formChecked = () => {
  //   if (showForm) setShowForm(false);
  //   if (!showForm) setShowForm(true);
  // };

  return (
    <div className="user-info">
      {/* <UserInfoList information={information} /> */}
      {/* {submit || ( */}
      {(user && !profile && submit) || (
        <form
          action="/Nazima"
          onSubmit={(e) => {
            e.preventDefault();

            addUserData({ name: name, vaccine: vaccineName, doses: doses });
            console.log(information);

            setName("");
            setVaccineName("");
            setDoses(0);
            setSubmit(true);
          }}
        >
          <h2>Please fill this Form</h2>
          <div className="info-input">
            <label id="label" htmlFor="name">
              Name
            </label>
            <input
              className="name"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="info-input">
            <select
              className="search-select search-input-vaccine"
              name="vaccineName"
              id="vaccineName"
              value={vaccineName}
              onChange={(e) => setVaccineName(e.target.value)}
            >
              <option value="" disabled hidden>
                Vaccine
              </option>
              <option value="Pfizer">Pfizer</option>
              <option value="Moderna">Moderna</option>
              <option value="jansen">Jansen</option>
            </select>
            {/* <label htmlFor="vaccine">Vaccine Name</label>
            <input
              className="vaccine"
              type="text"
              name="vaccine"
              id="vaccine"
              value={vaccine}
              onChange={(e) => {
                setVaccine(e.target.value);
              }}
              placeholder="pfizer/moderna/Jansen..."
              required
            /> */}
            <label id="label" htmlFor="doses">
              Doses
            </label>
            <input
              className="doses"
              type="number"
              name="doses"
              id="doses"
              value={doses}
              onChange={(e) => setDoses(parseInt(e.target.value))}
              required
            />
          </div>
          <input className="btn" type="submit" value="SUBMIT" />
          {/* {showForm ? <UserInformation /> : null} */}
          {/* <button>SKIP</button> */}

          {/* {user ? (
            <p> Thank you! Please serch to find location in the serch bar</p>
          ) : (
            <p> please login First</p>
          )} */}
          {/* <button className="submit-btn">SUBMIT</button> */}
        </form>
      )}
    </div>
  );
}
