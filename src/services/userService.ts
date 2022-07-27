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
