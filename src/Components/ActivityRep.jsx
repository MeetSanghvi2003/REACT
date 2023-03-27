import React from "react";
import { BASICtable } from "../table_components/BASIC-table";
import { ActivityCol } from "../table_components/columns";
import { ActivityData } from "../table_components/Data";

export const ActivityRep = () => {
  return (
    <>
      <div className="audit-table">
        <div className="create-header">
          <h3>Activity Report</h3>
          <div className="available-search">
            <div className="Aud-date">
              <span>
                <i className="bi bi-calendar3"></i> 25 mar 20 - 25 mar 23
              </span>
            </div>
            <button>Search</button>
          </div>
        </div>
        <BASICtable columns={ActivityCol} data={ActivityData} />
      </div>
    </>
  );
};
