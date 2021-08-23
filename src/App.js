import { useContext } from "react";
import TableContext from "./store/TableContext";
import logo from './logo.svg';
import classes from './App.module.css';
import Table from './components/Table';

function App() {
  const ctx = useContext(TableContext);

  const deleteHandler = id => {
    ctx.deleteRow(id);
  }

  const sortHandler = (id, direction) => {
    ctx.sortRow(id, direction);
  }
  
  return (
    <div className={classes.home}>
      <header className={classes.title}>React Table</header>      
      <Table headers={ctx.headers} data={ctx.data} onDelete={deleteHandler} onSort={sortHandler}/>
    </div>
  );
}

export default App;
