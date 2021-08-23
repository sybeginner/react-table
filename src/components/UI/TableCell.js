import classes from "./TableCell.module.css";

const TableCell = (props) => {    
  return <div className={`${classes["table-cell"]} ${props.sort && classes['table-cell--sort']}`}>{props.children}</div>;
};

export default TableCell;
