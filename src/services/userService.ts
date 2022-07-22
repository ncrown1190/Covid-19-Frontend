import axios from "axios";
import Information from "../models/Information";
import User from "../models/User";

const baseUrl = process.env.REACT_APP_USERS_API_URL;

if (!baseUrl) {
  console.error("Missing config REACT_APP_COVI19_API_URL");
}

export const getUserByUid = async (uid: string): Promise<User> => {
  return (await axios.get(`${baseUrl}/${encodeURIComponent(uid)}`)).data;
};

// const options = {
//   method: "GET",
//   url: "https://covid-19-live-vaccination-finder.p.rapidapi.com/locations/list-by-city-state",
//   params: { city: "New York", state: "NY" },
//   headers: {
//     "X-RapidAPI-Key": "354aa0dab9mshcd6fd867428f8e1p1f2edbjsnce2ac5906a8b",
//     "X-RapidAPI-Host": "covid-19-live-vaccination-finder.p.rapidapi.com",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

export function fetchAllInformation(): Promise<Information[]> {
  return axios
    .get<Information[]>(`${baseUrl}/information`)
    .then((res) => res.data);
}

export function addUserData(information: Information): Promise<Information> {
  return axios
    .post<Information>(`${baseUrl}/information`, information)
    .then((response) => response.data);
}
