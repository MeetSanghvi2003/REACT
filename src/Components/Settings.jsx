import React, { useState } from "react";
import { SettingCol } from "../table_components/columns";
import { SettingData } from "../table_components/Data";
import { EditTable } from "../table_components/Edittable";
import { DeletePopup, Popup } from "./popup";

export const Settings = () => {
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <>
      <div className="audit-table">
        <div className="create-header">
          <h3>Settings</h3>
          <div className="available-search">
            <div className="Aud-date">
              <span>
                <i className="bi bi-calendar3"></i> 25 mar 20 - 25 mar 23
              </span>
            </div>
            <button>Search</button>
          </div>
        </div>
        <div className="setting-table">
          <EditTable cols={SettingCol} datas={SettingData} />
        </div>
      </div>
      {show ? <Popup setShow={setShow} /> : ""}
      {showDelete ? <DeletePopup setShowDelete={setShowDelete} /> : ""}
    </>
  );
};
