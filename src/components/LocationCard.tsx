import { CovidFinder } from "../models/CovidFinder";
import "./LocationCard.css";

interface Props {
  singleLocationCard: CovidFinder;
}

export default function LocationCard({ singleLocationCard }: Props) {
  return (
    <div className="single-div">
      <div className="">
        <h2>{singleLocationCard.loc_name}</h2>
        <h6 className="phone">
          <a href="tel:+1{singleLocationCard.loc_phone}">
            Call: {singleLocationCard.loc_phone}
          </a>
        </h6>

        {/* <h5>
          {singleLocationCard.loc_admin_street1}{" "}
          {singleLocationCard.loc_admin_city}{" "}
          {singleLocationCard.loc_admin_state}{" "}
          {singleLocationCard.loc_admin_zip}
        </h5> */}
        <a
          target="_blank"
          href={`http://maps.google.com/maps?q=${encodeURI(
            singleLocationCard.loc_admin_street1 +
              singleLocationCard.loc_admin_city +
              singleLocationCard.loc_admin_state +
              singleLocationCard.loc_admin_zip
          )}`}
        >
          {singleLocationCard.loc_admin_street1}{" "}
          {singleLocationCard.loc_admin_city}{" "}
          {singleLocationCard.loc_admin_state}{" "}
          {singleLocationCard.loc_admin_zip}
        </a>
        {/* <p>{singleLocationCard.web_address}</p> */}
        <p>
          <a target="_blank" href={singleLocationCard.pre_screen}>
            Visit Pharmacy for further details
          </a>
        </p>
        {/* <p>{singleLocationCard.insurance_accepted}</p>
        <p>{singleLocationCard.walkins_accepted}</p> */}

        <h5 className="vaccine-name">Vaccine: {singleLocationCard.med_name}</h5>

        {/* <p>{singleLocationCard.in_stock}</p> */}

        <h5>Last Updated: {singleLocationCard.quantity_last_updated}</h5>
      </div>
    </div>
  );
}
