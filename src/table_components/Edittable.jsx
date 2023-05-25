import React from "react";
import { useTable, usePagination } from "react-table";

export const EditTable = ({ cols, datas, Delete }) => {
  const columns = cols;

  const data = datas;
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
  const onDelete = (id) => {
    setTimeout(() => {
      Delete(id);
    }, 1000);
  };

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
                    </th>
                  );
                })}
                <th>Actions</th>
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, ind) => {
                  return (
                    <td {...cell.getCellProps()} key={ind}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
                <td>
                  <button
                    className="delete"
                    onClick={() => {
                      onDelete(row.values.id);
                    }}
                  >
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
