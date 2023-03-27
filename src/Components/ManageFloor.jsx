import React, { useState } from "react";
import * as y from "yup";
import { useMemo } from "react";
import { FloorCol } from "../table_components/columns";
import { BASICtable } from "../table_components/BASIC-table";
import { useEffect } from "react";
import { Fdata } from "../table_components/Data";

export const ManageFloor = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [warn, setWarn] = useState("");

  const [floors, setFloors] = useState([
    {
      num: 0,
      f_no: 0,
      f_name: "Floor Name",
    },
  ]);

  const onDelete = (floor) => {
    setFloors(
      floors.filter((e) => {
        return e !== floor;
      })
    );
  };

  const addFloor = () => {
    let num = floors[floors.length - 1].num + 1;
    let floor = {
      num: num,
      floor_no: number,
      floor_name: name,
    };
    setFloors([...floors, floor]);
  };

  const createData = (e) => {
    e.preventDefault();
    if (number > 5 || number < 0) {
      setWarn("Hospital only have 6 floors : Ground , 1 , 2 , 3 , 4 , 5");
      return false;
    } else if (!name || name.length === 0) {
      setWarn("Please Enter the Floor Name");
      return false;
    } else {
      setWarn("");
      setNumber("");
      setName("");
      addFloor();
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
              placeholder="Floor No."
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="for">
            <input
              type="text"
              placeholder="Floor Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
          <BASICtable columns={FloorCol} data={Fdata} />;
        </div>
      </div>
    </>
  );
};
