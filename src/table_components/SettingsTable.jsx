import React, { useMemo } from "react";
import { useEffect } from "react";
import { useTable, usePagination } from "react-table";

export const SettingsTable = (props) => {
  const columns = useMemo(() => props.columns, []);
  const data = useMemo(() => props.data, []);

  const {
    getTableBodyProps,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    page,
    getTableProps,
    pageOptions,
    state,
    headerGroups,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  const { pageIndex } = state;

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  return (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                      {""}
                    </th>
                  );
                })}
                <th>Activity</th>
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                <td>
                  <button className="edit" onClick={() => props.setShow(true)}>
                    <i className="bi bi-pencil"></i> Edit
                  </button>
                  <button className="delete">
                    <i className="bi bi-trash"></i> Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="table-end">
        <div className="elmnts">
          <span>
            {pageIndex + 1} of {pageOptions.length}
          </span>
          <div className="page-change">
            <button
              className="leftBut"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <i className="bi bi-caret-left-fill"></i>
            </button>
            <button
              className="RightBut"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              <i className="bi bi-caret-right-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
