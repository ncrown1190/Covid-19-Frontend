import Information from "../models/Information";

interface Props {
  information: Information[];
}
export default function UserInfoList({ information }: Props) {
  return (
    <div>
      <ul>
        {information.map((information, index) => {
          return (
            <li className="list" key={index}>
              {/* React prefers that you provide a key. The key should
uniquely identify the item in the array. it helps performance*/}
              <h4> Name: {information.name}</h4>
              <h5>vaccine: {information.vaccine}</h5>
              <h4> Doses: {information.doses}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
