import { FormEvent, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { CovidFinder } from "../models/CovidFinder";
import { getCovidVacByVaccine } from "../services/covidFinderService";
import LocationCard from "./LocationCard";
import "./SearchByVaccine.css";

export default function SearchByVaccine() {
  const { user } = useContext(AuthContext);

  const [vaccine, setVaccine] = useState("");
  const [vaccineLocation, setVaccineLocation] = useState<CovidFinder[]>([]);
  const [submit, setSubmit] = useState(false);

  const submitHandler = (e: FormEvent): void => {
    if (vaccine) {
      getCovidVacByVaccine(vaccine).then((data) => {
        setVaccineLocation(data);
      });
    }
    setVaccine("");
    setSubmit(false);
  };

  return (
    <div className="search-div">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2 className="searchLocation">
          Covid-19 Vaccine for ages 3 and above
        </h2>
        <div className="search-input search-div search-name">
          <select
            className="search-select search-input-vaccine"
            name="vaccine"
            id="vaccine"
            value={vaccine}
            onChange={(e) => setVaccine(e.target.value)}
          >
            <option value="" disabled hidden>
              Vaccine
            </option>
            <option value="Janssen, COVID-19 Vaccine, 0.5 mL">Jansen</option>
            <option value="Moderna, COVID-19 Vaccine, 100mcg/0.5mL 10 doses">
              Moderna
            </option>
            <option value="Pfizer-BioNTech, COVID-19 Vaccine, 30 mcg/0.3mL">
              Pfizer
            </option>
          </select>
          {/* <input
            className="search-input search-input-zipcode"
            type="text"
            onChange={(e) => {
              setVaccine(e.target.value);
            }}
            value={vaccine}
            placeholder="vaccine"
          /> */}
          <button className="search-btn" onClick={submitHandler}>
            Search
          </button>
        </div>
      </form>
      <div className="results-container">
        <div className="paige">
          {user ? (
            vaccineLocation?.map((location, index) => (
              <LocationCard key={index} singleLocationCard={location} />
            ))
          ) : (
            <p className="warning">
              Please sign in with google to search Location
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
