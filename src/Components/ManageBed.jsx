import React from "react";
import { useState } from "react";
import { BASICtable } from "../table_components/BASIC-table";
import { BedCol } from "../table_components/columns";
import { Bdata } from "../table_components/Data";

export const ManageBed = () => {
  const [number, setNumber] = useState("");
  const [fnumber, setFnumber] = useState("Select Floor");
  const [Wname, setWname] = useState("Select Ward");
  const [warn, setWarn] = useState("");

  const [beds, setBeds] = useState([
    {
      key: 0,
      bed_no: 0,
      ward_name: "EMERGENCY",
      floor_no: "0",
    },
  ]);

  const onDelete = (bed) => {
    setBeds(
      beds.filter((e) => {
        return e !== bed;
      })
    );
  };

  const addBed = () => {
    let key = beds[beds.length - 1].key + 1;
    let bed = {
      key: key,
      bed_no: number,
      ward_name: Wname,
      floor_no: fnumber,
    };
    setBeds([...beds, bed]);
  };

  const createData = () => {
    if (number > 30 || number <= 0) {
      setWarn("There are only 30 Beds on each floor");
      return false;
    } else if (fnumber == "Select Floor") {
      setWarn("Give the Floor Number");
      return false;
    } else if (Wname == "Select Ward") {
      setWarn("Give the Name of the Ward");
      return false;
    } else {
      setNumber("");
      setFnumber("Select Floor");
      setWname("Select Ward");
      setWarn("");
      addBed();
      return true;
    }
  };

  return (
    <>
      <div className="create">
        <div className="create-in">
          <div className="create-header">
            <h3>Create Floors</h3>
          </div>
          <div className="for">
            <input
              type="text"
              placeholder="Enter Bed No."
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <div className="for">
            <select
              id="list"
              value={fnumber}
              onChange={(e) => setFnumber(e.target.value)}
            >
              <option value="Select Floor">Select Floor</option>
              <option value="G">G</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="for">
            <select
              id="list"
              value={Wname}
              onChange={(e) => setWname(e.target.value)}
            >
              <option value="Select Ward">Select Ward</option>
              <option value="General">Genaral</option>
              <option value="ICU">ICU</option>
              <option value="Emergency">Emergency</option>
            </select>
          </div>
          <div className="for">
            <input type="text" placeholder="Enter Bed Url" />
          </div>
          <div className="warn">{warn}</div>
          <div className="create-elmnt">
            <button onClick={createData}>Create</button>
          </div>
        </div>
      </div>

      <div className="available">
        <div className="available-in">
          <div className="create-header">
            <h3>Available Floors</h3>
            <div className="available-search">
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <BASICtable columns={BedCol} data={Bdata} value={"5"} />
        </div>
      </div>
    </>
  );
};
