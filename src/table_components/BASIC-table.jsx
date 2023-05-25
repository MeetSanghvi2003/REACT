import React, { useState } from "react";
import { useTable, usePagination } from "react-table";

export const BASICtable = ({ columns, data }) => {
  // const [columns, setColumns] = useState(props.columns);
  // const [data, setData] = useState(props.data);

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
          {headerGroups.map((headerGroup, i) => {
            return (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                key={headerGroup.Header}
              >
                {headerGroup.headers.map((column) => {
                  return (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, key) => {
                  return (
                    <>
                      <td {...cell.getCellProps()} key={key}>
                        {cell.render("Cell")}
                      </td>
                    </>
                  );
                })}
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
