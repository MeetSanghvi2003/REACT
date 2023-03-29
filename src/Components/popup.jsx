import React from "react";

export const Popup = (props) => {
  return (
    <>
      <div className="nullback">
        <div className="user_settings">
          <div className="user_header">
            <span>User Settings</span>
            <i className="bi bi-x-lg" onClick={() => props.setShow(false)}></i>
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
              <button
                className="user_cancel"
                onClick={() => props.setShow(false)}
              >
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
export const DeletePopup = (props) => {
  return (
    <>
      <div className="nullback">
        <div className="user_settings">
          <div className="delete_row">
            <h3>Are you sure you want to Delete?</h3>
            <div className="user_end_in">
              <button className="user_cancel">Yes</button>
              <button
                className="user_submit"
                onClick={() => props.setShowDelete(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
