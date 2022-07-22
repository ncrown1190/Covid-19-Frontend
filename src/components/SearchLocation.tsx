import { FormEvent, useContext, useEffect, useState } from "react";
import { CovidFinder } from "../models/CovidFinder";
//import { SingleLocation } from "../models/SingleLocation";
import AuthContext from "../context/AuthContext";
import {
  getCovidVacByCityState,
  getCovidVacById,
} from "../services/covidFinderService";
import "./SearchLocation.css";
import LocationCard from "./LocationCard";
//import LocationResponse from "../models/LocationResponse";

export default function SearchLocation() {
  const { user } = useContext(AuthContext);

  const [vacLocationCity, setVacLocationCity] = useState("");
  const [vacLocationState, setVacLocationState] = useState("");
  const [submit, setSubmit] = useState(false);
  const [vaccineLocation, setVaccineLocation] = useState<CovidFinder[]>([]);
  //const [location, setLocation] = useState<CovidFinder | undefined>();

  // useEffect(() => {
  //   getCovidVacByCityState(vacLocationCity, vacLocationState).then(
  //     (data) => setVaccineLocation(data)
  //     //console.log(data)
  //   );
  // }, []);

  const submitHandler = (e: FormEvent): void => {
    if (vacLocationCity) {
      getCovidVacByCityState(vacLocationCity, vacLocationState).then(
        (data) => setVaccineLocation(data)
        //console.log(data)
      );
    }
    setVacLocationCity("");
    setVacLocationState("");
    setSubmit(false);
  };

  return (
    <div className="search-div">
      {submit || (
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
              className="search-input search-input-city"
              type="text"
              onChange={(event) => {
                setVacLocationCity(event.target.value);
              }}
              value={vacLocationCity}
              placeholder="city"
            />
            <input
              className="search-input search-input-state"
              type="text"
              onChange={(event) => {
                setVacLocationState(event.target.value);
              }}
              value={vacLocationState}
              placeholder="state"
            />

            <button className="search-btn" onClick={submitHandler}>
              Search
            </button>
          </div>
        </form>
      )}
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
