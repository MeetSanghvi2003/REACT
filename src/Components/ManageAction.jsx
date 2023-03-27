import React from "react";

export const ManageAction = () => {
  return (
    <>
      <div className="create">
        <div className="create-in">
          <div className="create-header">
            <h3>Create Floors</h3>
          </div>
          <form>
            <div className="for">
              <input type="text" placeholder="Floor No." />
            </div>
            <div className="for">
              <input type="text" placeholder="Floor Name" />
            </div>
            <div className="create-elmnt">
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
