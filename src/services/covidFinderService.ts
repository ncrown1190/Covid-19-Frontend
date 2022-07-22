import axios from "axios";
import { CovidFinder } from "../models/CovidFinder";
// const baseURL =
//   "https://data.cdc.gov/resource/5jp2-pgaw.json?loc_admin_zip=48188";

const baseURL = "https://data.cdc.gov/resource/5jp2-pgaw.json";

if (!baseURL) {
  console.error("Missing config REACT_APP_API_URL");
}

export function getLocation(): Promise<CovidFinder[]> {
  return axios
    .get<CovidFinder[]>(`${baseURL}/covidFinder`)
    .then((res) => res.data);
}

export function getCovidVacByCityState(
  loc_admin_city?: string,
  loc_admin_state?: string
): Promise<CovidFinder[]> {
  return axios
    .get<CovidFinder[]>("https://data.cdc.gov/resource/5jp2-pgaw.json", {
      params: {
        loc_admin_city: loc_admin_city,
        loc_admin_state: loc_admin_state,
      },
    })
    .then((res) => res.data);
}

export function getCovidVacById(
  loc_admin_zip?: string
): Promise<CovidFinder[]> {
  return axios
    .get<CovidFinder[]>("https://data.cdc.gov/resource/5jp2-pgaw.json", {
      params: {
        loc_admin_zip: loc_admin_zip,
      },
    })
    .then((res) => res.data);
}

export function getCovidVacByVaccine(
  med_name?: string
): Promise<CovidFinder[]> {
  return axios
    .get<CovidFinder[]>("https://data.cdc.gov/resource/5jp2-pgaw.json", {
      params: {
        med_name: med_name,
      },
    })
    .then((res) => res.data);
}
