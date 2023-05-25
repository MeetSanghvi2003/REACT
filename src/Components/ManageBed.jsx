import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditTable } from "../table_components/Edittable";
import { useEffect } from "react";
import { fetchBeds } from "../state/Slices/bedSlice";
import { toast } from "react-toastify";

export const ManageBed = (props) => {
  const { bedColumn, bedData, isError, isLoading } = useSelector(
    (state) => state.bed
  );
  const { wardData } = useSelector((state) => state.ward);
  const [floor, setFloor] = useState("");
  const [bed_desc, setBed] = useState("");
  const [remote, setRemote] = useState("");
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBeds());
  }, []);

  const Post = (data) => {
    fetch("https://nurster.com/api/hospital/addBed/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    });
    dispatch(fetchBeds());
  };

  const Delete = (id) => {
    fetch(`https://nurster.com/api/hospital/accessSingleHospitalBeds/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    toast("Bed Deleted!", {
      type: "success",
      style: { fontSize: "13px" },
    });
    setTimeout(() => {
      dispatch(fetchBeds());
    }, 100);
  };

  const submitBed = (e) => {
    e.preventDefault();
    if (floor && bed_desc && remote) {
      let add = {
        bed_no: "1",
        floor,
        bed_desc,
        hospital_id: 1,
        remote,
        ward_id: null,
      };
      setData([...data, add]);
      Post(add);
      setBed("");
      setFloor("Select Floor");
      setRemote("");

      toast("Bed Added!", {
        type: "success",
        style: { fontSize: "13px" },
      });
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
          <form onSubmit={submitBed}>
            <div className="for">
              <select id="list" onChange={(e) => setFloor(e.target.value)}>
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
              <select id="list">
                <option value="Select Ward">Select Ward</option>
                {wardData.filter((ward) => {
                  if (floor === ward.floor)
                    return (
                      <option value={ward.ward_name}>{ward.ward_name}</option>
                    );
                })}
              </select>
            </div>
            <div className="for">
              <input
                type="text"
                placeholder="Bed Description..."
                value={bed_desc}
                onChange={(e) => setBed(e.target.value)}
              />
            </div>
            <div className="for">
              <input
                type="text"
                placeholder="Remote Serial"
                value={remote}
                onChange={(e) => setRemote(e.target.value)}
              />
            </div>
            <div className="create-elmnt">
              <button>Create</button>
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
            <EditTable cols={bedColumn} datas={bedData} Delete={Delete} />
          )}
        </div>
      </div>
    </>
  );
};
