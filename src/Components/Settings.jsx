import React, { useState } from "react";
import { BASICtable } from "../table_components/BASIC-table";
import { SettingCol } from "../table_components/columns";
import { SettingData } from "../table_components/Data";
import { SettingsTable } from "../table_components/SettingsTable";

export const Settings = () => {
  const [show, setShow] = useState(false);

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
          <SettingsTable
            columns={SettingCol}
            data={SettingData}
            setShow={setShow}
          />
        </div>
      </div>
      <div
        className="nullback"
        style={show ? { visibility: "visible" } : { visibility: "hidden" }}
      >
        <div className="user_settings">
          <div className="user_header">
            <span>User Settings</span>
            <i className="bi bi-x-lg" onClick={() => setShow(false)}></i>
          </div>
          <div className="user_main">
            <span>...</span>
            <div className="user_radio">
              <input type="radio" name="access" id="sup_admin" />
              <label htmlFor="sup_admin">
                <span></span> Super Admin
              </label>
              <input type="radio" name="access" id="admin" />
              <label htmlFor="admin">
                <span></span> Admin
              </label>
              <input type="radio" name="access" id="user" />
              <label htmlFor="user">
                <span></span> User
              </label>
            </div>
            <div className="user_check">
              <span>...</span>
              <div>
                <input type="checkbox" id="floors" />
                <label htmlFor="floors">Give Access to Floors</label>
              </div>
              <div>
                <input type="checkbox" id="wards" />
                <label htmlFor="wards">Give Access to Wards</label>
              </div>
              <div>
                <input type="checkbox" id="beds" />
                <label htmlFor="beds">Give Access to Beds</label>
              </div>
              <div>
                <input type="checkbox" id="actions" />
                <label htmlFor="actions">Give Access to Actions</label>
              </div>
            </div>
          </div>
          <div className="user_end">
            <div className="user_end_in">
              <button className="user_cancel" onClick={() => setShow(false)}>
                Cancel
              </button>
              <button className="user_submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
