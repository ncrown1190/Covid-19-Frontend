import { FormEvent, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { CovidFinder } from "../models/CovidFinder";
import { getCovidVacById } from "../services/covidFinderService";
import LocationCard from "./LocationCard";

export default function SearchByZip() {
  const { user } = useContext(AuthContext);

  const [zipCode, setZipCode] = useState("");
  const [vaccineLocation, setVaccineLocation] = useState<CovidFinder[]>([]);
  const [submit, setSubmit] = useState(false);

  const submitHandler = (e: FormEvent): void => {
    if (zipCode) {
      getCovidVacById(zipCode).then((data) => {
        setVaccineLocation(data);
      });
    }
    setZipCode("");
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
          <input
            className="search-input search-input-zipcode"
            type="text"
            onChange={(e) => {
              setZipCode(e.target.value);
            }}
            value={zipCode}
            placeholder="zipcode"
          />
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
