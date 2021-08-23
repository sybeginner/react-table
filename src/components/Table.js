import { useContext } from "react";
import classes from "./Table.module.css";
import TableRow from "./UI/TableRow";

const processHeader = (headers) => {
  return headers.map(({ label }) => label);
};

const processData = (data, headers) => {
  const rows = [];
  for (const entry of data) {
    let row = {};
    row.id = entry.id;
    row.data = [];
    for (const { id } of headers) {
      row.data.push(entry[id]);
    }
    rows.push(row);
  }
  return rows;
};

const Table = (props) => {
  const deleteHandler = (id) => {
    console.log("delete row", id);
    props.onDelete(id);
  };

  const sortHandler = (id, direction) => {
      console.log('sort', id);
      props.onSort(id, direction);
  }

  return (
    <div className={classes.table}>
      <TableRow key="header" type="header" headers={props.headers} data={props.headers} onSort={sortHandler}/>
      {props.data.map((r) => (
        <TableRow
          key={r.id}
          headers={props.headers}
          data={r}
          id={r.id}          
          onDelete={deleteHandler}          
        />
      ))}
    </div>
  );
};

export default Table;
