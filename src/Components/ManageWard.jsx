import React, { useState } from "react";
import { BASICtable } from "../table_components/BASIC-table";
import { WardCol } from "../table_components/columns";
import { Wdata } from "../table_components/Data";

export const ManageWard = () => {
  const [number, setNumber] = useState("");
  const [fnumber, setFnumber] = useState("Select Floor");
  const [name, setName] = useState("");
  const [warn, setWarn] = useState("");

  const [wards, setWards] = useState([
    {
      key: 0,
      ward_no: 0,
      ward_name: "",
      floor_no: "Floor Name",
    },
  ]);

  const onDelete = (ward) => {
    setWards(
      wards.filter((e) => {
        return e !== ward;
      })
    );
  };

  const addWard = () => {
    let key = wards[wards.length - 1].key + 1;
    let ward = {
      key: key,
      ward_no: number,
      ward_name: name,
      floor_no: fnumber,
    };
    setWards([...wards, ward]);
  };

  const createData = () => {
    if (number > 30 || number <= 0) {
      setWarn("There are only 30 wards on each floor");
      return false;
    } else if (fnumber === "Select Floor") {
      setWarn("Give the Floor Number");
      return false;
    } else if (!name || name.length === 0) {
      setWarn("Give the Name of the Ward");
      return false;
    } else {
      setFnumber("");
      setName("");
      setNumber("");
      setWarn("");
      addWard();
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
              type="number"
              placeholder="Ward No."
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="for">
            <input
              type="text"
              placeholder="Ward Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="for">
            <select
              id="list"
              value={fnumber}
              onChange={(e) => setFnumber(e.target.value)}
            >
              <option value="F">Select Floor</option>
              <option value="G">G</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
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
          <BASICtable columns={WardCol} data={Wdata} />
        </div>
      </div>
    </>
  );
};
