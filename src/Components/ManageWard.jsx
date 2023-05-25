import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditTable } from "../table_components/Edittable";
import { fetchWards } from "../state/Slices/wardSlice";
import { toast } from "react-toastify";

export const ManageWard = (props) => {
  const { wardColumn, wardData, isLoading, isError } = useSelector(
    (store) => store.ward
  );
  const [floor, setFloor] = useState("");
  const [Wname, setWname] = useState("");
  const [led, setLed] = useState("");
  const hospital_id = 1;
  const ward_desc = "ward_desc";
  const [data, setData] = useState([
    {
      floor: "",
      hospital_id: 1,
      led: "",
      ward_name: "",
      ward_desc: "ward_desc",
    },
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWards());
  }, []);

  const Post = (data) => {
    fetch(`https://nurster.com/api/hospital/addWard/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    });
    dispatch(fetchWards());
  };

  const Delete = (id) => {
    fetch(`https://nurster.com/api/hospital/accessSingleHospitalWards/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    toast("Ward Deleted!", { type: "success", style: { fontSize: "13px" } });
    setTimeout(() => {
      dispatch(fetchWards());
    }, 100);
  };

  const submitWard = (e) => {
    e.preventDefault();
    if (floor && Wname && led) {
      let add = {
        floor,
        hospital_id,
        led,
        ward_name: Wname,
        ward_desc,
      };
      setData([...data, add]);
      Post(add);
      toast("Ward Added!", { type: "success", style: { fontSize: "13px" } });
      setFloor("");
      setWname("");
      setLed("");
    } else {
      toast("All fields are Required!", {
        type: "error",
        style: { fontSize: "13px" },
      });
    }
  };
  return (
    <>
      <div className="create">
        <div className="create-in">
          <div className="create-header">
            <h3>Create Floors</h3>
          </div>
          <form onSubmit={submitWard}>
            <div className="for">
              <select
                id="list"
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
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
            <div className="for">
              <input
                type="text"
                placeholder="Ward Name"
                value={Wname}
                onChange={(e) => setWname(e.target.value)}
              />
            </div>
            <div className="for">
              <input
                type="number"
                placeholder="Led Serial"
                value={led}
                onChange={(e) => setLed(e.target.value)}
              />
            </div>
            <div className="create-elmnt">
              <button type="submit">Create</button>
            </div>
          </form>
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
          {isError ? (
            <div className="loaderContainer">
              <h3>Maybe You're Not Connected to the internet</h3>
            </div>
          ) : isLoading ? (
            <div className="loaderContainer">
              <section className="section-loading">
                <div className="load"></div>
              </section>
            </div>
          ) : (
            <EditTable cols={wardColumn} datas={wardData} Delete={Delete} />
          )}
        </div>
      </div>
    </>
  );
};
