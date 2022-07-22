import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SearchByVaccine from "./SearchByVaccine";
import SearchByZip from "./SearchByZip";
import SearchLocation from "./SearchLocation";

export default function NavPage() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/city/state" element={<SearchLocation />} />

        <Route path="/zipcode" element={<SearchByZip />} />
        <Route path="/vaccine" element={<SearchByVaccine />} />
      </Routes>
    </div>
  );
}
