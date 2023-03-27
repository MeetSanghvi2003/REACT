import React from "react";
import { BASICtable } from "../table_components/BASIC-table";
import { AuditCol } from "../table_components/columns";
import { Audit_data } from "../table_components/Data";

export const AuditLog = () => {
  return (
    <>
      <div className="audit-table">
        <div className="create-header">
          <h3>Audit Log</h3>
          <div className="available-search">
            <div className="Aud-date">
              <span>
                <i className="bi bi-calendar3"></i> 25 mar 20 - 25 mar 23
              </span>
            </div>
            <button>Search</button>
          </div>
        </div>
        <BASICtable columns={AuditCol} data={Audit_data} />
      </div>
    </>
  );
};
