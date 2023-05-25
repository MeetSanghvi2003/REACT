import React, { useState } from "react";
import { format } from "date-fns";
import { Bdata } from "./Data";
import { id } from "date-fns/locale";

export const Columns = [
  {
    Header: "id",
    Footer: "id",
    accessor: "id",
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
  },
  {
    Header: "Actions",
    Cell: ({ cell }) => (
      <>
        <button className="edit">
          <i className="bi bi-pencil"></i> Edit{" "}
        </button>
        <button className="delete">
          <i className="bi bi-trash"></i> Delete
        </button>
      </>
    ),
  },
];

export const FloorCol = [
  {
    Header: "#",
    accessor: "id",
  },
  {
    Header: "Total Floors",
    accessor: "total_floors",
  },
];
export const WardCol = [
  {
    Header: "#",
    accessor: "id",
  },
  {
    Header: "Ward Name",
    accessor: "ward_name",
  },
  {
    Header: "Floor",
    accessor: "floor",
  },
  {
    Header: "LED",
    accessor: "led",
  },
];

export const BedCol = [
  {
    Header: "#",
    accessor: "id",
  },
  {
    Header: "Bed Description",
    accessor: "bed_desc",
  },
  {
    Header: "Floor",
    accessor: "floor",
  },
  {
    Header: "Ward",
    accessor: "",
  },
  {
    Header: "Remote",
    accessor: "remote",
  },
];
export const AuditCol = [
  {
    Header: "Access Time",
    accessor: "a_time",
  },
  {
    Header: "Audit By",
    accessor: "a_by",
  },
  {
    Header: "IP Address",
    accessor: "ip_add",
  },
  {
    Header: "Event Type",
    accessor: "e_type",
  },
  {
    Header: "User Agent",
    accessor: "u_agent",
  },
];
export const ActivityCol = [
  {
    Header: "Nurse name",
    accessor: "n_name",
  },
  {
    Header: "Patient name",
    accessor: "p_name",
  },
  {
    Header: "Task Type",
    accessor: "task_type",
  },
  {
    Header: "Request Time",
    accessor: "req_time",
  },
  {
    Header: "Attended Time",
    accessor: "att_time",
  },
  {
    Header: "Duration",
    accessor: "duration",
  },
];

export const SettingCol = [
  {
    Header: "User Name",
    accessor: "user_name",
  },
  {
    Header: "User Type",
    accessor: "user_type",
  },
];
