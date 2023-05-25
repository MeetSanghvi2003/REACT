import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFloors } from "../state/Slices/floorSlice";
import { EditTable } from "../table_components/Edittable";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { BASICtable } from "../table_components/BASIC-table";

export const ManageFloor = (props) => {
  const { floorData, floorColumn } = useSelector((state) => state.floor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFloors());
  }, []);

  const cantAdd = () => {
    toast("Floors are Already Added!", {
      type: "warning",
      style: { fontSize: "13px" },
    });
  };

  return (
    <>
      <div className="create">
        <div className="create-in">
          <div className="create-header">
            <h3>Create Floors</h3>
          </div>
          <div className="for" onClick={cantAdd}>
            <input type="number" placeholder="Floors" disabled />
          </div>

          <span className="warn">All Floors Have Been added</span>
          <div className="create-elmnt">
            <button onClick={cantAdd}>Create</button>
          </div>
        </div>
      </div>
      <div className="available">
        <div className="available-in" style={props.myStyle}>
          <div className="create-header">
            <h3>Available Floors</h3>
            <div className="available-search">
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <BASICtable columns={floorColumn} data={floorData} />
        </div>
      </div>
    </>
  );
};
