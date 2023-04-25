import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { arr } from "./DummyData";
import "./styles.css";

export default function App() {
  const [search, setSearch] = useState([]);
  /* sample to check git pull */
  return (
    <div className="App">
      <div>
        <input
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FiSearch className="searchbar" />
      </div>
      <br />
      <table>
        <thead>
          <tr>
            <th>FName</th>
            <th>LName</th>
            <th>Age</th>
            <th>City</th>
            <th>Pincode</th>
          </tr>
        </thead>
        {arr
          .filter((e) => {
            if (e.fname.toLowerCase().includes(search)) {
              return e;
            } else if (e.lname.toLowerCase().includes(search)) {
              return e;
            } else if (e.age.toString().includes(search)) {
              return e;
            } else if (e.city.toLowerCase().includes(search)) {
              return e;
            } else if (e.pincode.toString().includes(search)) {
              return e;
            }
          })
          .map((e, i) => (
            <tbody key={i}>
              <tr>
                <td>&nbsp; &nbsp;{e.fname}</td>
                <td>{e.lname}</td>
                <td>{e.age}</td>
                <td>{e.city}</td>
                <td>{e.pincode}</td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
}
