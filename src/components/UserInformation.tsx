import "./UserInformation.css";
import Information from "../models/Information";
import { useEffect, useState, useContext } from "react";
import { addUserData, fetchAllInformation } from "../services/userService";
//import UserInfoList from "./UserInfoList";
import AuthContext from "../context/AuthContext";

interface Props {
  onAddDetail: (newDetails: Information) => void;
}

export default function UserInformation() {
  const { user } = useContext(AuthContext);
  const [information, setInformation] = useState<Information[]>([]);
  const [name, setName] = useState("");
  const [vaccine, setVaccine] = useState("");
  const [doses, setDoses] = useState(0);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    fetchAllInformation().then((res) => setInformation(res));
  }, []);

  return (
    <div className="user-info">
      {/* <UserInfoList information={information} /> */}
      {submit || (
        <form
          action="/Nazima"
          onSubmit={(e) => {
            e.preventDefault();

            addUserData({ name: name, vaccine: vaccine, doses: doses });
            console.log(information);
            setName("");
            setVaccine("");
            setDoses(0);
            setSubmit(true);
          }}
        >
          <h2>Please fill this Form</h2>
          <div className="info-input">
            <label htmlFor="name">Name</label>
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
            <label htmlFor="vaccine">Vaccine Name</label>
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
            />
            <label htmlFor="doses">Doses</label>
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
