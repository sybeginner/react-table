import TableCell from "./TableCell";
import classes from "./TableRow.module.css";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import cellClasses from "./TableCell.module.css";

const TableRow = (props) => {
  let rowOutput;
  let actionCell;

  if (props.type === "header") {
    rowOutput = props.data.map(({ id, label, sort }) => (
      <TableCell key={id} sort={sort}>
        <span>{label}</span>
        <span
          className={
            sort === "descending"
              ? cellClasses["table-cell__sort-down"]
              : cellClasses["table-cell__sort-up"]
          }
          onClick={() =>
            props.onSort(id, sort === "ascending" ? "descending" : "ascending")
          }
        >
          {sort === "descending" ? <FaSortDown /> : <FaSortUp />}
        </span>
      </TableCell>
    ));
    actionCell = (
      <TableCell key="action">
        <span>Action</span>
      </TableCell>
    );
  } else {
    rowOutput = props.headers.map(({ id }) => (
      <TableCell key={`${props.id}-${id}`}>
        {id !== "image" ? (
          <span>{props.data[id]}</span>
        ) : (                      
          <img className={cellClasses['table-cell__image']} src={props.data[id]} alt="unavailable" />          
        )}
      </TableCell>
    ));
    actionCell = (
      <TableCell key={props.id + "-action"}>
        <span
          id="delete"
          className={cellClasses["table-cell__delete"]}
          onClick={props.onDelete.bind(this, props.id)}
        >
          <AiFillDelete />
        </span>
      </TableCell>
    );
  }

  return (
    <div
      className={`${classes["table-row"]} ${
        props.type === "header" && classes["table-row__header"]
      }`}
    >
      {rowOutput}
      {actionCell}
    </div>
  );
};

export default TableRow;
